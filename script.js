const confirmBtn = document.querySelector("#confirm");
const continueBtn = document.querySelector("#continue");
const rightContainer = document.querySelector(".rightContainer");
const confirmedContainer = document.querySelector(".confirmedContainer");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let expireDate = document.querySelector(".expireDate");
let holderInput = document.querySelector("#holderInput");
let holderDisplay = document.querySelector(".personName");
let cardNumber = document.querySelector("#cardNumber");
let numberInput = document.querySelector("#numberInput");
let displayCardNumber = "0";
let securityCode = document.querySelector("#securityCode");
let cvcInput = document.querySelector("#cvcInput");
let holderError = document.querySelector(".holderError");
let numberError = document.querySelector(".numberError");
let monthAndYearError = document.querySelector(".monthAndYearError");
let cvcError = document.querySelector(".cvcError");
let inputs = [numberInput, holderInput, cvcInput, monthInput, yearInput];
let errorMsg = [numberError, holderError, cvcError, monthAndYearError];

confirmBtn.addEventListener("click", () => {
  if (
    numberInput.value != "" &&
    monthInput.value != "" &&
    yearInput.value != "" &&
    cvcInput.value != "" &&
    holderInput.value != ""
  ) {
    rightContainer.classList.toggle("visible");
    confirmedContainer.classList.toggle("visible");
  } else {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("error");

        if (i === 3 || i === 4 || (i === 3 && i === 4)) {
          errorMsg[3].classList.add("errorMsg");
        } else {
          errorMsg[i].classList.add("errorMsg");
        }
      } else {
        inputs[i].classList.remove("error");

        if (i === 3 || i === 4) {
          // Eliminăm mesajul de eroare doar dacă și luna și anul sunt completate corect
          if (monthInput.value !== "" && yearInput.value !== "") {
            errorMsg[3].classList.remove("errorMsg");
          }
        } else {
          errorMsg[i].classList.remove("errorMsg");
        }
      }
    }
  }
});

continueBtn.addEventListener("click", () => {
  rightContainer.classList.toggle("visible");
  confirmedContainer.classList.toggle("visible");
  expireDate.innerHTML = "00/00";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  holderDisplay.innerHTML = "Jane Appleseed";
  securityCode.innerHTML = "000";
  numberInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
  cvcInput.value = "";
  holderInput.value = "";
  holderError.classList.remove("errorMsg");
  cvcError.classList.remove("errorMsg");
  numberError.classList.remove("errorMsg");
  monthAndYearError.classList.remove("errorMsg");
  numberInput.classList.remove("error");
  holderInput.classList.remove("error");
  yearInput.classList.remove("error");
  monthInput.classList.remove("error");
  cvcInput.classList.remove("error");
});

numberInput.addEventListener("input", () => {
  displayCardNumber = numberInput.value;
  cardNumber.innerHTML = displayCardNumber;
});

holderInput.addEventListener("input", () => {
  holderDisplay.innerHTML = holderInput.value;
});

monthInput.addEventListener("input", () => {
  if (monthInput.value.length <= 2) {
    expireDate.innerHTML = month.value + "/" + year.value;
    monthInput.value = monthInput.value.slice(0, 2);
  }
});

yearInput.addEventListener("input", () => {
  if (yearInput.value.length <= 2) {
    expireDate.innerHTML = month.value + "/" + year.value;
  }
});

monthInput.oninput = function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
};

yearInput.oninput = function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
};

numberInput.oninput = function () {
  if (this.value.length > 4) {
    displayCardNumber =
      this.value.slice(0, 4) +
      " " +
      this.value.slice(4, 8) +
      " " +
      this.value.slice(8, 12) +
      " " +
      this.value.slice(12, 16);
    this.value = this.value.slice(0, 16);
    cardNumber.innerHTML = displayCardNumber;
  }
};

cvcInput.oninput = function () {
  if (this.value.length >= 3) {
    this.value = this.value.slice(0, 3);
  }
};

cvcInput.addEventListener("input", () => {
  if (cvcInput.value.length <= 3) {
    securityCode.innerHTML = cvcInput.value;
  }
});
