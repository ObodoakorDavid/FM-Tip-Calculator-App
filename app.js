/** @format */

// Elements

let billElement = document.querySelector(".bill");
let buttons = document.querySelectorAll(".grid-container button");
let inputPercent = document.querySelector(".grid-container input");
let billError = document.querySelector(".section1 > small");
let numberOfPeopleError = document.querySelector(".section3 > small");
let tipPersonElement = document.querySelector(".tip-person");
let tipTotalElement = document.querySelector(".tip-total");
let numberOfPeopleElement = document.querySelector(".nop");
let form = document.querySelector("form");
let reset = document.querySelector(".reset");

// Variables

let percent = null;
let billInput = null;
let numberOfPeopleInput = null;
let tip = null;

billError.style.display = "none";
numberOfPeopleError.style.display = "none";

function calcPercent() {
  let tempResult = (billInput * percent) / 100;
  let tipPerPerson = tempResult / numberOfPeopleInput;
  let totalResult = tipPerPerson * numberOfPeopleInput;
  let tipPerPersonString = String(tipPerPerson);

  console.log(tipPerPerson);
  console.log(totalResult);

  if (tipPerPersonString.includes(".")) {
    let tempIndex = tipPerPersonString.indexOf(".");

    if (
      tipPerPersonString.charAt(tempIndex) + 1 == 0 &&
      tipPerPersonString.charAt(tempIndex) + 2 == 0
    ) {
      tipPersonElement.textContent = `$${tipPerPersonString.slice(
        0,
        tipPerPersonString.indexOf(".")
      )}`;
      tipTotalElement.textContent = `$${totalResult}`;
    } else {
      tipPersonElement.textContent = `$${tipPerPersonString.slice(
        0,
        tipPerPersonString.indexOf(".") + 3
      )}`;
      tipTotalElement.textContent = `$${totalResult}`;
    }
  } else {
    tipPersonElement.textContent = `$${tipPerPersonString}`;
    tipTotalElement.textContent = `$${totalResult}`;
  }
}

let checkErrorState = () => {
  if (billInput == "0" || numberOfPeopleInput == "0") {
    if (billInput == "0" && numberOfPeopleInput == "0") {
      billError.textContent = "Can't be zero";
      billError.style.display = "block";
      numberOfPeopleError.textContent = "Can't be zero";
      numberOfPeopleError.style.display = "block";
    } else if (numberOfPeopleInput == "0") {
      numberOfPeopleError.textContent = "Can't be zero";
      numberOfPeopleError.style.display = "block";
    } else if (billInput == "0") {
      billError.textContent = "Can't be zero";
      billError.style.display = "block";
    }
  } else if (numberOfPeopleInput == null || billInput == null) {
    if (billInput == null && numberOfPeopleInput == null) {
      billError.textContent = "Required!";
      billError.style.display = "block";
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (numberOfPeopleInput == null) {
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (billInput == null) {
      billError.textContent = "Required!";
      billError.style.display = "block";
    }
  } else if (numberOfPeopleInput == "" || billInput == "") {
    if (billInput == "" && numberOfPeopleInput == "") {
      billError.textContent = "Required!";
      billError.style.display = "block";
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (numberOfPeopleInput == "") {
      numberOfPeopleError.textContent = "Required!";
      numberOfPeopleError.style.display = "block";
    } else if (billInput == "") {
      billError.textContent = "Required!";
      billError.style.display = "block";
    }
  } else {
    calcPercent();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    let input = e.target.value;
    percent = e.target.value;
    console.log(input);
    checkErrorState();
    button.classList.add("active");
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

billElement.addEventListener("change", (e) => {
  billInput = e.target.value;
  checkErrorState();
});

numberOfPeopleElement.addEventListener("change", (e) => {
  numberOfPeopleInput = e.target.value;
  checkErrorState();
});

// Fous State

billElement.addEventListener("focusout", (e) => {
  checkErrorState();
});

numberOfPeopleElement.addEventListener("focusout", (e) => {
  checkErrorState();
});

billElement.addEventListener("focusin", (e) => {
  billError.style.display = "none";
});

numberOfPeopleElement.addEventListener("focusin", (e) => {
  numberOfPeopleError.style.display = "none";
});

// reset

reset.addEventListener("click", () => {
  percent = null;
  billInput = null;
  numberOfPeopleInput = null;
  tip = null;
  tipPersonElement.textContent = `$${0}`;
  tipTotalElement.textContent = `$${0}`;
  buttons.forEach((btn) => btn.classList.remove("active"));
  billElement.value = "";
  numberOfPeopleElement.value = "";
  billError.style.display = "none";
  numberOfPeopleError.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
