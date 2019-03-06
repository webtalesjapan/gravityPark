const express = require('express');
const firebase = require('firebase');

var validator = require('validator');

const router = express.Router();

/*
    STATUS CODES:
    0 - Added and subscribed
    1 - Aleady subscribed
    2 - Email already existed in unsubscribed form. -> subscribed.
    8 - Invalid Email
    9 - Could not subscribe.
 */

router.post('/', (req, res) => {
  const { body: formData } = req;
  if (formData.email && validator.isEmail(formData.email)) {
    const firebaseRef = firebase.database().ref('subscribed');
    firebaseRef.orderByChild('email').equalTo(formData.email).once('value', (snapshot) => {
      if (snapshot.exists()) {
        const snapJson = snapshot.toJSON();
        const keys = Object.keys(snapJson);
        const firstKey = keys[0];
        const val = snapJson[firstKey];
        if (val.subscribed) {
          res.status(200).send('1');
        } else {
          const updates = {};
          updates[firstKey] = {
            ...val,
            date: Date.now(),
            subscribed: true,
          };
          firebaseRef.update(updates)
            .then(() => {
              res.status(200).send('2');
            })
            .catch(() => {
              res.status(500).send('9');
            });
        }
      } else {
        const newChildKey = firebaseRef.push().key;
        const updates = {};
        updates[newChildKey] = {
          email: formData.email,
          date: Date.now(),
          subscribed: true,
        };
        firebaseRef.update(updates)
          .then(() => {
            res.status(200).send('0');
          })
          .catch(() => {
            res.status(500).send('9');
          });
      }
    });
  } else {
    res.status(500).send('8');
  }
});

module.exports = router;
