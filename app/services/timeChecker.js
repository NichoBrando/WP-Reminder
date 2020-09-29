const cron = require("node-cron");
const remindsQuery = require("../queries/Reminds");

async function timeChecker() {
  const reminders = await remindsQuery.getByTime();
  if (reminders.length > 0) reminders.map((element) => 1);
  else console.log("Don't have any reminders to show");
}

function startTimeChecker() {
  cron.schedule("* * * * *", timeChecker);
}

module.exports = startTimeChecker;
