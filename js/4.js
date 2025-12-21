const box = document.querySelector(".box");
const wantedPosition = {
	x: 500,
	y: 200,
};

function draw() {
	setBoxPos(wantedPosition.x - screenX, wantedPosition.y - screenY);
	window.requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

function setBoxPos(x, y) {
	box.style.left = x + "px";
	box.style.top = y + "px";
}

// Hehe, that works!
// Even though that's a bit jerky!
