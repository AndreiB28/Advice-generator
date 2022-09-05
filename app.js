const generateBtn = document.getElementById("generate");
const adviceId = document.querySelector(".id");
const advicetext = document.querySelector(".text");

generateAdvice();

generateBtn.addEventListener("click", generateAdvice);

async function generateAdvice() {
  await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = `ADVICE #${data.slip.id}`;
      advicetext.textContent = `" ${data.slip.advice} "`;
    });
};
