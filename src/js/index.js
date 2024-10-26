const adviceNumber = document.getElementById("advice-number");
const advice = document.getElementById("advice");
const button = document.getElementById("button");
let number = 1;

button.addEventListener("click", () => {
	number++;
	adviceNumber.textContent = `ADVICE #${number}`;
});
