const parseFormat = (format) => {
  const newFormat = String(format);
  const newFormatArray = newFormat.split(" ");

  return newFormatArray;
};

const checkNumber = (number, addZero) => {
  return addZero && parseInt(number, 10) < 10 ? "0" + String(number) : number;
};

const changeFormat = (
  format = "h m Y M D",
  separators = "/",
  date = null,
  addZero = true
) => {
  const newDate = !date ? new Date() : new Date(date);
  const newFormatArray = parseFormat(format);
  let newString = "";

  const day = checkNumber(newDate.getDate(), addZero);
  const month = checkNumber(newDate.getMonth() + 1, addZero);
  const year = checkNumber(newDate.getFullYear(), addZero);
  const hour = checkNumber(newDate.getHours(), addZero);
  const min = checkNumber(newDate.getMinutes(), addZero);
  const sec = checkNumber(newDate.getSeconds(), addZero);

  //"h m s Y M D dotw"
  newFormatArray.forEach((item, index) => {
    switch (item) {
      case "D":
        newString += String(day);
        break;
      case "M":
        newString += String(month);
        break;
      case "Y":
        newString += String(year);
        break;
      case "h":
        newString += String(hour);
        break;
      case "m":
        newString += String(min);
        break;
      case "s":
        newString += String(sec);
        break;
      default:
        break;
    }
    if (index < newFormatArray.length - 1) newString += separators;
  });

  return newString;
};

module.exports = changeFormat;
