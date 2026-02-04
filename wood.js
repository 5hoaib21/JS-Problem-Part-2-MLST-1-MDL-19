function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotlaWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotlaWood + tableTotalWood + bedTotalWood;
  return totalWood;
}
const wood = woodQuantity(1, 0, 4);
console.log("wood needed", wood);

//----------------------------
/***
 * Shirt Price --> 500
 * Pant Price --> 300
 * shoe price --> 900
 */
function shoppingCost(shirtQuantity, pantQuantity, shoeQuantity) {
  const perShirtPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 900;

  const totalShitPrice = shirtQuantity * perShirtPrice;
  const totalPantPrice = pantQuantity * perPantPrice;
  const totalShoePrice = shirtQuantity * perShoePrice;

  const shoppingBudget = totalShitPrice + totalPantPrice + totalShoePrice;

  return shoppingBudget;
}

const TotalCost = shoppingCost(3, 3, 2);
console.log("Total Shopping Cost is:", TotalCost);
