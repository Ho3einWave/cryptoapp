const MoneyFormater = (money) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(money)) >= 1.0e12
    ? (Math.abs(Number(money)) / 1.0e12).toFixed(2) + "T"
    : // Six Zeroes for Millions
    Math.abs(Number(money)) >= 1.0e9
    ? (Math.abs(Number(money)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(money)) >= 1.0e6
    ? (Math.abs(Number(money)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(money)) >= 1.0e3
    ? (Math.abs(Number(money)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(money));
};

export default MoneyFormater;
