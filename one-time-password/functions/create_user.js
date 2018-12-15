const admin = require("firebase-admin");

module.exports = (req, res) => {
  // Verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: "Bad input" });
  }

  // Format the phone number to remove dashes and parens, anything but digits
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin
    .auth()
    .createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
};
