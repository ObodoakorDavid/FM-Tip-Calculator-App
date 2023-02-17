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
let tipAmountValue = 0;
let totalAmountValue = 0;

billError.style.display = "none";
numberOfPeopleError.style.display = "none";

function calcPercent() {
  percent = Number(numberOfPeopleInput);
  let tempResult = (bill * percent) / 100;
  let tipPerPerson = tempResult / numberOfPeopleInput;
  tipAmountValue = tipPerPerson;
  let totalResult = tipPerPerson * numberOfPeopleInput;
  totalAmountValue = totalResult;

  console.log(result);
  console.log("hELLO");
  console.log(numberOfPeopleInput);
  console.log(percent);
  console.log(bill);
}

let checkErrorState = () => {
  billError.style.display = "none";
  numberOfPeopleError.style.display = "none";

  if (bill == "0" || numberOfPeopleInput == "0") {
    if (bill == "0" && numberOfPeopleInput == "0") {
      billError.textContent = "Can't be zero";
      billError.style.display = "block";
      numberOfPeopleError.textContent = "Can't be zero";
      numberOfPeopleError.style.display = "block";
    } else if (numberOfPeopleInput == "0") {
      numberOfPeopleError.textContent = "Can't be zero";
      numberOfPeopleError.style.display = "block";
    } else if (bill == "0") {
      billError.textContent = "Can't be zero";
      billError.style.display = "block";
    }
  } else if (numberOfPeopleInput == null || bill == null) {
    if (bill == null && numberOfPeopleInput == null) {
      billError.textContent = "Required!";
      billError.style.display = "block";
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (numberOfPeopleInput == null) {
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (bill == null) {
      billError.textContent = "Required!";
      billError.style.display = "block";
    }
  } else {
    calcPercent();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let input = e.target.value;
    percent = e.target.value;
    console.log(input);
  });
});

inputPercent.addEventListener("change", (e) => {
  percent = e.target.value;
});

billInput.addEventListener("change", (e) => {
  bill = e.target.value;
  checkErrorState();
});

numberOfPeopleElement.addEventListener("change", (e) => {
  numberOfPeopleInput = e.target.value;
  checkErrorState();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
