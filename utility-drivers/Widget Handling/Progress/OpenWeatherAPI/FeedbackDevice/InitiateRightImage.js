THIS_DEVICE.rightImage = document.createElement("div");
THIS_DEVICE.rightImage.classList.add("right_feedback");
THIS_DEVICE.rightImage.style.display = "block";


THIS_DEVICE.rightImage.innerHTML = `<img src="images/${imageName}.png">`;

document.body.appendChild(THIS_DEVICE.rightImage);

return "";
