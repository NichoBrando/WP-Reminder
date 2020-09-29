const sendMail = require("./emailSender");
const cron = require("node-cron");
const remindsQuery = require("../queries/Reminds");

async function timeChecker() {
  const reminders = await remindsQuery.getByTime();
  reminders.map((element) => {
    const email = element.email;
    const username = element.username;
    const content = element.content;
    sendMail(email, content, element.date, username);
  });
}

function startTimeChecker() {
  cron.schedule("* * * * *", timeChecker);
}

module.exports = startTimeChecker;
