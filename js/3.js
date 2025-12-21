const [input, output] = ["input", "output"].map((selector) =>
	document.querySelector(selector)
);
input.addEventListener("input", () => {
	output.innerText = input.value
		.split(" ")
		.map((word) => getShortenation(word))
		.join(" ");
});

function getShortenation(word) {
	const firstLetter = word[0];
	const lastLetter = word[word.length - 1];
	const length = Math.max(0, word.length - 2);
	return firstLetter + length.toString() + lastLetter;
}
