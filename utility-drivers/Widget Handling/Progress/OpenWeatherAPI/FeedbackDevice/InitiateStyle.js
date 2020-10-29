var style = document.createElement("style");
style.innerHTML = `

.left_feedback {
	margin: 0 auto;
	z-index: 101;
	position: absolute;
	left: 500px;
	top: 70px;
	transform-origin: top left;
	transform: scale(0.2);
	pointer-events:none;
	touch-action:none;
}

.right_feedback {
	margin: 0 auto;
	z-index: 101;
	position: absolute;
	left: 785px;
	top: 70px;
	transform-origin: top left;
	transform: scale(0.2);
	pointer-events:none; 
	touch-action:none;
}

.center_feedback {
	margin: 0 auto;
	z-index: 101;
	position: absolute;
	left: 640px;
	top: 70px;
	transform-origin: top left;
	transform: scale(0.2);
	pointer-events:none;
	touch-action:none;
}
`;

document.head.appendChild(style);

return "";
