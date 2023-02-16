/** @format */

let billInput = document.querySelector(".bill");
// let buttons = document.querySelectorAll("button");
let buttons = document.querySelectorAll(".grid-container button");
let inputPercent = document.querySelector(".grid-container input");
let billError = document.querySelector(".section1 > small");
let numberOfPeopleError = document.querySelector(".section3 > small");
// console.log(buttons);
let numberOfPeopleElement = document.querySelector(".nop");
let form = document.querySelector("form");
let percent = null;
let bill = null;
let numberOfPeopleInput = null;
let tip = null;

billError.style.display = "none";
numberOfPeopleError.style.display = "none";

function calcPercent() {
  percent = Number(numberOfPeopleInput);
  let result = (bill * percent) / 100;
  console.log(result);
  // console.log(typeof numberOfPeopleInput);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.value);
    let input = e.target.value;
    console.log(input);
  });
});

inputPercent.addEventListener("change", (e) => {
  percent = e.target.value;
});

billInput.addEventListener("change", (e) => {
  bill = e.target.value;
  numberOfPeopleError.style.display = "none";
  billError.style.display = "none";
  if (numberOfPeopleInput == null || numberOfPeopleInput == "") {
    numberOfPeopleError.style.display = "block";
  } else {
    numberOfPeopleError.style.display = "none";
    calcPercent();
  }
});

numberOfPeopleElement.addEventListener("change", (e) => {
  billError.style.display = "none";
  numberOfPeopleError.style.display = "none";
  numberOfPeopleInput = e.target.value;
  if (bill == null || bill == "") {
    billError.style.display = "block";
  } else {
    billError.style.display = "none";
    calcPercent();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
