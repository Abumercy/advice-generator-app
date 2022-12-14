const diceBtn = document.getElementById("dice");
const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("quotes");
const apiUrl = "https://api.adviceslip.com/advice";

//Button click event
diceBtn.addEventListener("click", () => {
  //Request Data
  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      //Inject to DOM
      adviceNumber.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = `"${dataAdvice}"`;
    });
});




