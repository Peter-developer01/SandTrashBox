console.log("Hello, World!");

const destroyFineOk = document.querySelector("#AAAAAAAAAAAAAA");
onkeydown = e => {
	if (e.key === "D") {
		document.body.style.backgroundColor = "red";
		destroyFineOk.innerHTML += "D";

		onkeydown = e => {
			if (e.key === "E") {
				document.body.style.backgroundColor = "green";
				destroyFineOk.innerHTML += "es";

				onkeydown = e => {
					if (e.key === "S") {
						document.body.style.filter = "blur(3px)";
						document.body.style.backgroundColor = "inherit";
						setTimeout(() => {
							document.body.style.filter = "none";
						}, 1000);
						destroyFineOk.innerHTML += "t";

						onkeydown = e => {
							if (e.key === "T") {
								document.body.style.transform = "rotate(180deg)";
								destroyFineOk.innerHTML += "ro";

								onkeydown = e => {
									if (e.key === "R") {
										document.body.style.transform = "none";
										destroyFineOk.innerHTML += "y";

										onkeydown = e => {
											if (e.key === "O") {
												let past = destroyFineOk.innerHTML;
												destroyFineOk.innerHTML = "...";
												setTimeout(() => {
													destroyFineOk.innerHTML = past;
													destroyFineOk.innerHTML += "e";
												}, 1000);

												onkeydown = e => {
													if (e.key === "Y") {
														destroyFineOk.innerHTML += "d";
														setTimeout(() => {
															past = destroyFineOk.innerHTML;
															destroyFineOk.innerHTML = "PRESS ENTER TO DESTROY";
															setTimeout(() => destroyFineOk.innerHTML = past, 100);
														}, 1000);

														onkeydown = e => {
															if (e.key === "Enter") {
																onkeydown = null;
																destroyFineOk.innerHTML += "!";
																destroyFineOk.style.color = "red";

																setTimeout(() => {
																	alert("BOOM!")
																	document.body.innerHTML = "";
																	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ%$#@!)(*&^qwertyuiop[]asdfghjkl;'\zxcvbnm";
																	document.body.style.wordWrap = "anywhere";
																	const interval = setInterval(() => {
																		document.body.innerHTML += letters[Math.floor(Math.random() * letters.length)];
																	}, 100);
																	setTimeout(() => {
																		clearInterval(interval);
																	}, 42424);
																}, 3000);
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}