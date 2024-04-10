(() => {
	const letterBox = document.querySelector(".letterbox");
	const lettersSpan = document.querySelector(".letters");
	const innerString = lettersSpan.innerText.split("").map(l => `<div class='letter'>${l.replace(" ", "&nbsp;")}</div>`).join("");
	letterBox.insertAdjacentHTML("beforeend", innerString);
	lettersSpan.remove();

	const letters = document.querySelectorAll(".letter");
	letters.forEach(letter => {
		letter.addEventListener("mouseover", () => {
			letter.style.transform = "scale(2.0)";
		});
		letter.addEventListener("mouseout", () => {
			letter.style.transform = "scale(1)";
		});

		// assign random hex color
		// letter.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`
		
		let start, previousTimeStamp;
		let done = false;
		let speed = +`0.00${(Math.floor(Math.random() * 5) + 5) || 1}`
		console.log(speed)

		window.addEventListener("keydown", (event) => {
			if (event.key === " " || event.key.toUpperCase() === letter.innerText) {
				done = false;
				start = undefined;
				letter.style.transform = "translateY(0)";
				new Audio(`audio/lift.mp3`).play();
			}
		})

		function step(timeStamp) {
			if (start === undefined) {
				start = timeStamp;
			}

			const elapsed = timeStamp - start;

			if (previousTimeStamp !== timeStamp) {
				// Math.min() is used here to make sure the element stops at exactly 200px
				const count = Math.min(speed * elapsed, 200);
				if (count > 165) {
					letter.remove();
					if (document.querySelectorAll(".letter").length === 0) {
						alert("You lose!");
					}
					setTimeout(() => new Audio(`audio/${Math.floor(Math.random() * 3) + 1}.mp3`).play(), Math.floor(Math.random() * 200));
					done = true;
				}
				letter.style.transform = `translateY(${count}px)`;
				if (count === 200) done = true;
			}

			// if (elapsed < 30000) {
				previousTimeStamp = timeStamp;
				if (!done) {
					window.requestAnimationFrame(step);
				}
			// }
		}

		window.requestAnimationFrame(step);
	});
})();