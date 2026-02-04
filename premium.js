const phones = [
  { name: "Samsung", price: 110000, camera: "50mp", color: "black" },
  { name: "xoami", price: 50000, camera: "50mp", color: "black" },
  { name: "Oppo", price: 20000, camera: "50mp", color: "black" },
  { name: "Iphone", price: 120000, camera: "50mp", color: "black" },
  { name: "HTC", price: 50000, camera: "50mp", color: "black" },
];

function getPremiumPhone(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}

const premium = getPremiumPhone(phones);
console.log("Premium phone ever is:", premium);
