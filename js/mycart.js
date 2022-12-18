const cartForm = document.querySelector("#cartForm");

const formName = document.querySelector("#formName");
const errorName = document.querySelector("#errorName");

const formAddress = document.querySelector("#formAddress");
const errorAddress = document.querySelector("#errorAddress");

const formEmail = document.querySelector("#formEmail");
const errorEmail = document.querySelector("#errorEmail");

const formCard = document.querySelector("#formCard");
const errorCard = document.querySelector("#errorCard");

function confirmForm(confirmAll) {
  confirmAll.preventDefault();
  if (confirmCharacters(formName.value, 0) === true) {
    errorName.style.display = "none";
  } else {
    errorName.style.display = "block";
  }

  if (confirmCharacters(formAddress.value, 0) === true) {
    errorAddress.style.display = "none";
  } else {
    errorAddress.style.display = "block";
  }

  if (confirmCharacters(formCard.value, 16) === true) {
    errorCard.style.display = "none";
  } else {
    errorCard.style.display = "block";
  }
  if (confirmEmail(formEmail.value) === true) {
    errorEmail.style.display = "none";
  } else {
    errorEmail.style.display = "block";
  }
}

function confirmCharacters(formValue, formLength) {
  if (formValue.trim().length > formLength) {
    return true;
  } else {
    return false;
  }
}

function confirmEmail(formEmail) {
  const emailCharacters = /\S+@\S+\.\S+/;
  const confirmEmailCharacters = emailCharacters.test(formEmail);
  return confirmEmailCharacters;
}

cartForm.addEventListener("submit", confirmForm);
