const fs = require("fs");

function createCard(content, date) {
  let cardDate = new Date(date);
  let card = fs.readFileSync(__dirname + "/card.html", "utf8");
  card = card
    .replace("%CONTENT%", content)
    .replace("%DATE%", cardDate.getDay())
    .replace("%HOUR%", cardDate.getHours());
  return card;
}

module.exports = createCard;
