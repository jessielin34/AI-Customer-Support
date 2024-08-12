const franc = require("franc");
const iso6391 = require("iso-639-1");

function detectLanguage(text) {
  const langCode = franc(text);
  return iso6391.getCode(iso6391.getName(langCode)) || "en";
}

module.exports = { detectLanguage };
