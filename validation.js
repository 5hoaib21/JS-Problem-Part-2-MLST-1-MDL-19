function fullName(first, second) {
  if (typeof first !== "string") {
    return "first name should be a string";
  } else if (typeof second !== "string") {
    return "second name should be a string";
  }
  const full = first + " " + second;
  return full;
}

const full = fullName("Alamin");
// console.log(full);

//
//
//
