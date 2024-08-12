module.exports.add = (...args) => {
  let result = 0;
  args.forEach((num) => (result = result + num));
  console.log(result);
};

module.exports.sub = (a, ...args) => {
  let result = a;
  args.forEach((num) => (result -= num));
  console.log(result);
};
