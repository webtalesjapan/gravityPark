const express = require('express');
const firebase = require('firebase');

const router = express.Router();
const uniqid = require('uniqid');

const mailjet = require('node-mailjet')
  .connect(process.env.MAILJET_K, process.env.MAILJET_S);

router.post('/form_submit', (req, res) => {
  const { body: formData } = req;
  if (formData.email) {
    const firebaseRef = firebase.database().ref();
    const newChildKey = firebaseRef.push().key;
    const updates = {};
    const key = `booked_activities/${formData.activityId}/${formData.location}/${formData.activityDateString}/${formData.activityTimeString}/${newChildKey}`;
    updates[key] = {
      id: uniqid(),
      ...formData,
      people: JSON.parse(formData.people),
    };

    firebase.database().ref().update(updates)
      .then((result) => {
        const request = mailjet
          .post('send', { version: 'v3.1' })
          .request({
            Messages: [
              {
                From: {
                  Email: 'no-reply@staging.gravitypark.jp',
                  Name: 'Gravity Park',
                },
                To: [
                  {
                    Email: formData.email,
                    Name: formData.name,
                  },
                ],
                Bcc: [
                  {
                    Email: 'dishab16@gmail.com ', // The gravity park email for checking the bookings.
                    Name: 'Gravity Park Admin',
                  },
                ],
                Subject: 'Your Booking Details!',
                HTMLPart: JSON.stringify(updates[key]),
              },
            ],
          });
        request
          .then((response) => {
            res.send(response);
          })
          .catch((err) => {
            res.send(err);
          });
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.send('Invalid email');
  }
});

module.exports = router;
