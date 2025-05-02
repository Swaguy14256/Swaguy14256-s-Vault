let path = placelink + "merch/toonzelda"

var currentImage = 0
currentImage = parseInt(sessionStorage.getItem("viewedImage"))
function loadImage(image) {
	
	document.getElementById("large_image").src = "blank.png"
	document.getElementById("small_image_1").src = "blank.png"
	document.getElementById("small_image_2").src = "blank.png"
	document.getElementById("small_image_3").src = "blank.png"
	
	if (image < imageIndex.length) {
		document.getElementById("large_image").src = path + "/images/" + imageIndex[image][0];
		document.getElementById("image_text").innerHTML = imageIndex[image][0];
		document.getElementById("imageNumber").innerHTML = "Image " + (image+1) + ' of ' + imageIndex.length;
		
		document.getElementById("small_image_2").src = path + "/thumbs/" + imageIndex[image][0];
		if (image>0) {
			document.getElementById("small_image_1").src = path + "/thumbs/" + imageIndex[image-1][0];
		}
		if (image<imageIndex.length-1) {
			document.getElementById("small_image_3").src = path + "/thumbs/" + imageIndex[image+1][0];
		}
	} else {
		document.getElementById("imageNumber").innerHTML = "null";
	}
}

function back() {
	window.location.replace("index.html");
}

function setImage(image) {
	currentImage+=image;
	if (currentImage<0) {
		currentImage=0;
	}
	
	if (currentImage>=imageIndex.length) {
		currentImage=imageIndex.length-1;
	}
	
	sessionStorage.setItem("viewedImage", currentImage);
	
	loadImage(currentImage);
}

loadImage(currentImage);