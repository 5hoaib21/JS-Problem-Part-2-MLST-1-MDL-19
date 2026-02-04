const phones = [
  { name: "Samsung", price: 110000, camera: "50mp", color: "black" },
  { name: "xoami", price: 15000, camera: "50mp", color: "black" },
  { name: "Oppo", price: 12000, camera: "50mp", color: "black" },
  { name: "Iphone", price: 120000, camera: "50mp", color: "black" },
  { name: "HTC", price: 50000, camera: "50mp", color: "black" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(phones);
console.log("cheapest phone ever is:", cheap);
