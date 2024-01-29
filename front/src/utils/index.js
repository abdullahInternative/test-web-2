export const shortenText = (text, n) => {
  if (text.length > n) {
    const shortenedText = text.toString(0, n).concat("...");
    return shortenedText;
  }
  return text;
};
