let total = document.querySelector(".total");
let a = document.querySelector(".qty");
let button = document.querySelector(".btn");
let basket = document.querySelector("#basket");

const arr = [
  ["apple", 0.6],
  ["orange", 0.4],
  ["pineapple", 2],
  ["banana", 0.3],
];

button.addEventListener("click", () => {
  const selectedValue = basket.value;
  const mult = arr.find((value) => value[0] === selectedValue);
  const [name, val] = mult;
  const inputValue = a.value;
  const ans = val * inputValue;
  total.innerHTML = `Total:$ ${ans}`;
});
