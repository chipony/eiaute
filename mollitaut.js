const b0 = 'key';
const t = {};

const bins = (value) => {
  // Perform some computation or manipulation on the value
  return value + 1;
};

t[b0] = bins(t);

console.log(t); // Output: { 'key': 1 }
