const adviceNumber = document.getElementById("advice-number");
const advice = document.getElementById("advice");
const button = document.getElementById("button");

async function getAdvice() {
	try {
		const response = await fetch("https://api.adviceslip.com/advice");
		if (!response.ok) {
			throw new Error("Error in api response");
		}
		const { slip } = await response.json();
		adviceNumber.textContent = `ADVICE #${slip.id}`;
		advice.textContent = slip.advice;
	} catch (error) {
		advice.textContent = "Sorry, we are unable to obtain advice at this time.";
		console.error(`Erro ao fazer a requisição: ${error}`);
	}
}

button.addEventListener("click", getAdvice);

getAdvice();
