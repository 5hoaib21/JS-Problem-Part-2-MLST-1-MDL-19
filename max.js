function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const max1 = getMax(96, 76);
const max2 = getMax("01", 2);
console.log("max of two is:", max1, typeof max2);
