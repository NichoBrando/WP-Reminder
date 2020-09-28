const remindsQuery = require("../queries/Reminds");

async function timeChecker() {
  const reminders = await remindsQuery.getByTime();
  if (reminders.length > 0) console.log(reminders);
  else console.log("Don't have any reminders to show");
}
module.exports = timeChecker;
