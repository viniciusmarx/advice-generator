const adviceNumber = document.getElementById("advice-number");
const advice = document.getElementById("advice");
const button = document.getElementById("button");

async function getAdvice() {
	try {
		const response = await axios.get("https://api.adviceslip.com/advice");
		const { slip } = response.data;
		const data = response.data;
		console.log({ ...data });

		adviceNumber.textContent = `ADVICE #${slip.id}`;
		advice.textContent = slip.advice;
	} catch (error) {
		advice.textContent = "Sorry, we are unable to obtain advice at this time.";
		console.error(`Erro ao fazer a requisição: ${error}`);
	}
}

button.addEventListener("click", getAdvice);

getAdvice();
