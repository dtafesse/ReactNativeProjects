const admin = require("firebase-admin");

module.exports = (req, res) => {
  if (!req.body.phone) {
    return res.status(422).send({ error: "You must provide a phone number" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // notice getUser needs an id - phone is saved as the id
  admin
    .auth()
    .getUser(phone)
    .then(user => {});
};
