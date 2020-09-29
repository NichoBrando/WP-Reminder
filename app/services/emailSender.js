const createCard = require("../card/card");

const AWS = require("aws-sdk");
// Amazon SES configuration
const SESConfig = {
  accessKeyId: "", //accessKeyId,
  secretAccessKey: "", //AWS-Secret-Key,
  region: "", //AWS-Region,
};

function sendMail(email, content, date, username) {
  console.log(date);
  const cardDate = new Date(date);
  var params = {
    Source: "",
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: createCard(content, cardDate.getDay(), cardDate.getHours()),
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Remind to ${username}`,
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

module.exports = sendMail;
