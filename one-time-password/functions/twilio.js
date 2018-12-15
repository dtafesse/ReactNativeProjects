const twilio = require("twilio");
const config = require("./config");

const accountSid = config.accountSid;
const authToken = config.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);
