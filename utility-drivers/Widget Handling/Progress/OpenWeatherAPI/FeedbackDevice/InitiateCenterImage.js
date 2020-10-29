THIS_DEVICE.centerImage = document.createElement("div");
THIS_DEVICE.centerImage.classList.add("center_feedback");
THIS_DEVICE.centerImage.style.display = "block";


THIS_DEVICE.centerImage.innerHTML = `<img src="images/${imageName}.png">`;

document.body.appendChild(THIS_DEVICE.centerImage);

return "";
