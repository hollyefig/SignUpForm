const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label");
const errorMsg = document.querySelectorAll(".error");
const button = document.getElementById("button");
let firstEntry = [false, false, false, false, false, false];

button.disabled = true;

const inputEntered = (e) => {
  for (let i = 0; i < label.length; i++) {
    if (label[i].htmlFor === e.id) {
      firstEntry[i] = true;
      if (e.value !== "") {
        label[i].classList.add("labelSmall");
        errorMsg[i].textContent = "";
      } else {
        label[i].classList.remove("labelSmall");
        errorMsg[i].textContent = "* Required Field";
      }
    }
  }
  const pw1 = input[4].value;
  const pw2 = input[5].value;
  if (firstEntry[5] === true) {
    pw1 !== pw2
      ? (errorMsg[5].textContent = "* Passwords do not match")
      : (errorMsg[5].textContent = "✔️");
  }

  if (pw1 === pw2 && pw1 !== "" && pw2 !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
