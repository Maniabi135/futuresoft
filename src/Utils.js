const Utils = {};

Utils.convertDigitWithCommas = num => {
  if (num) {
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(num?.toString())) {
      num = num.replace(pattern, "$1,$2");
    }
    return num;
  }
  return 0;
};

Utils.convertDigit = num => {
  return !num && isNaN(num)
    ? 0
    : num < 9999
    ? num
    : num < 1000000 &&
    Utils.convertDigitWithCommas(Math.round(num / 1000) + "K");
};

export default Utils;
export { Utils };
