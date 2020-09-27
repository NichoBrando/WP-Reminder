import { text } from "../card/card";

require("dotenv").config();
const AWS = require("aws-sdk");

// Amazon SES configuration
const SESConfig = {
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
};

var params = {
  Source: "nicholas.computacao@outlook.com",
  Destination: {
    ToAddresses: ["nicholas.computacao@outlook.com"],
  },
  ReplyToAddresses: ["nicholas.computacao@outlook.com"],
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: text,
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Node + SES Example",
    },
  },
};

new AWS.SES(SESConfig)
  .sendEmail(params)
  .promise()
  .then((res) => {
    console.log(res);
  });
