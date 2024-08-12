import { franc } from "franc";
import iso6391 from "iso-639-1";

export function detectLanguage(text) {
  const langCode = franc(text);
  return iso6391.getCode(iso6391.getName(langCode)) || "en"; // Default to 'en' if detection fails
}
