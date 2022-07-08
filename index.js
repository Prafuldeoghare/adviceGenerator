const changeAdvice = document.getElementById("dice");
const idNumber = document.getElementById("idNumber");
const quote = document.getElementById("lines");

function handleChange() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((response) => {
      idNumber.innerHTML = response?.slip?.id;
      quote.innerHTML = `&#8220;${response?.slip?.advice}&#8221;`;
    });
}

changeAdvice.addEventListener("click", handleChange);
window.addEventListener("DOMContentLoaded", handleChange);
