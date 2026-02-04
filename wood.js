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
//
//
//
//
//----------------------------
