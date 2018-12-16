const express = require('express');
const mailjet = require('node-mailjet')
  .connect('0c48b3cd702706936baea25d9792eac1test', 'fb3c07f20145022e97efac5df5ba8024test');
// TODO : Store these in env.
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Sample Api');
});

router.post('/form_submit', (req, res) => {
  const { body: formData } = req;
  if (formData.email) {
    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'sachdevraunaq@gmail.com',
              Name: 'Gravity Park',
            },
            To: [
              {
                Email: formData.email,
                Name: formData.name,
              },
            ],
            Subject: 'Your Booking Details!',
            HTMLPart: JSON.stringify(formData),
          },
        ],
      });
    request
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.send('Invalid email');
  }
});

module.exports = router;
