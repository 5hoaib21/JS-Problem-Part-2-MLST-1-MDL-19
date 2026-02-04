function layeredDiscountedTotal(quantity) {
  const first100Pric = 100;
  const second100Pric = 90;
  const above200Pric = 70;

  if (quantity <= 100) {
    const total = quantity * first100Pric;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Pric;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Pric;
    const total = first100Total + remainingTotal;
    return total;
  } else {
    const first100Total = 100 * first100Pric;
    const second100Total = 100 * second100Pric;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200Pric;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}
const total = layeredDiscountedTotal(101);
console.log(total);
