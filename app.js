/** @format */

let billInput = document.querySelector(".bill");
// let buttons = document.querySelectorAll("button");
let buttons = document.querySelectorAll(".grid-container button");
let inputPercent = document.querySelector(".grid-container input");
let billError = document.querySelector(".section1 > small");
let numberOfPeopleError = document.querySelector(".section3 > small");
let tipPersonElement = document.querySelector(".tip-person");
let tipTotalElement = document.querySelector(".tip-total");
let numberOfPeopleElement = document.querySelector(".nop");
let form = document.querySelector("form");
let percent = null;
let bill = null;
let numberOfPeopleInput = null;
let tip = null;
// let tipAmountValue = 0;
// let totalAmountValue = 0;

billError.style.display = "none";
numberOfPeopleError.style.display = "none";

function calcPercent() {
  let tempResult = (bill * percent) / 100;
  let tipPerPerson = tempResult / numberOfPeopleInput;
  // tipAmountValue = tipPerPerson;
  let totalResult = tipPerPerson * numberOfPeopleInput;
  // totalAmountValue = totalResult;

  tipPersonElement.textContent = `$${tipPerPerson.toString().slice(0, 3)}`;
  tipTotalElement.textContent = `$${totalResult}`;

  console.log(numberOfPeopleInput);
  console.log(percent);
  console.log(bill);
  console.log(totalResult);
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
  } else if (numberOfPeopleInput == "" || bill == "") {
    if (bill == "" && numberOfPeopleInput == "") {
      billError.textContent = "Required!";
      billError.style.display = "block";
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (numberOfPeopleInput == "") {
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (bill == "") {
      billError.textContent = "Required!";
      billError.style.display = "block";
    }
  } else {
    calcPercent();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach(btn => btn.classList.remove('active'))
    let input = e.target.value;
    percent = e.target.value;
    console.log(input);
    checkErrorState();
    button.classList.add('active')
  });
  button.addEventListener("focusout", () => {
    checkErrorState();
  });
});

inputPercent.addEventListener("change", (e) => {
  percent = e.target.value;
  checkErrorState();
});

inputPercent.addEventListener("focusout", (e) => {
  percent = e.target.value;
  checkErrorState();
});

billInput.addEventListener("change", (e) => {
  bill = e.target.value;
  checkErrorState();
});

numberOfPeopleElement.addEventListener("change", (e) => {
  numberOfPeopleInput = e.target.value;
  checkErrorState();
});

// Fous State

billInput.addEventListener("focusout", (e) => {
  checkErrorState();
});

numberOfPeopleElement.addEventListener("focusout", (e) => {
  checkErrorState();
});

billInput.addEventListener("focusin", (e) => {
  billError.style.display = "none";
});

numberOfPeopleElement.addEventListener("focusin", (e) => {
  numberOfPeopleError.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
