THIS_DEVICE.leftImage = document.createElement("div");
THIS_DEVICE.leftImage.classList.add("left_feedback");
THIS_DEVICE.leftImage.style.display = "block";


THIS_DEVICE.leftImage.innerHTML = `<img src="images/${imageName}.png">`;

document.body.appendChild(THIS_DEVICE.leftImage);

return "";
