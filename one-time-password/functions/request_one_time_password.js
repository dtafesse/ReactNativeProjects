const admin = require("firebase-admin");
const twilio = require("./twilio");
const config = require("./config");

module.exports = (req, res) => {
  if (!req.body.phone) {
    return res.status(422).send({ error: "You must provide a phone number" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // notice getUser needs an id - phone is saved as the id
  admin
    .auth()
    .getUser(phone)
    .then(userRecord => {
      const code = Math.floor(Math.random() * 8999 + 1000);

      twilio.messages.create(
        {
          body: `Your code is ${code}`,
          to: phone,
          from: config.accountPhoneNumber
        },
        err => {
          if (err) {
            console.log(err);
            return res.status(422).send({ error: "Invalid Phone Number" });
          }
          // there is no err so save the code to fb database
          admin
            .database()
            .ref("users/" + phone)
            .update({ code: code, codeValid: true }, () => {
              res.send({ success: true });
            });
        }
      );
    })
    .catch(err => {
      console.log(err);
      res.status(422).send({ error: "User not found" });
    });
};
