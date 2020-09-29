require("dotenv").config();
const AWS = require("aws-sdk");
// Amazon SES configuration
const SESConfig = {
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
};

function sendMail(email, subject, data) {
  var params = {
    Source: "nicholas@westpoint.io",
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: data,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
  };

  new AWS.SES(SESConfig)
    .sendEmail(params)
    .promise()
    .then((res) => {
      console.log(res);
    });
}
export default sendMail;
