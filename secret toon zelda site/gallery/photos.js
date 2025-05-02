let imagesPP = 10;
let path = placelink + "merch/toonzelda/"

var blockIndex;
var imagePage = 0;

function loadImages(startIndex) {
	blockIndex = 0;
	for (i=startIndex;i<startIndex+imagesPP;i++) {
		if (i < imageIndex.length) {
			document.getElementById("pic_box_"+blockIndex).style.display = "block";
			document.getElementById("pic_"+blockIndex).src = path + "/thumbs/" + imageIndex[i][0];
			document.getElementById("pic_text_"+blockIndex).innerHTML = imageIndex[i][0];
			
			//document.getElementById("debug").innerHTML = i + "<" + imageIndex.length;
		} else {
			document.getElementById("pic_box_"+blockIndex).style.display = "none";
		}
		blockIndex++;
	}
}

function viewImage(imageID) {
	sessionStorage.setItem("viewedImage", (imagePage*imagesPP)+imageID);
	window.location.replace("viewer.html");
	//document.getElementById("debug").innerHTML = sessionStorage.getItem("viewedImage");
}

function setPage(page) {
	imagePage+=page;
	if (imagePage<0) {
		imagePage=0;
	}
	
	if (imagePage>((imageIndex.length-0.00001)/imagesPP)) {
		imagePage=Math.floor((imageIndex.length-0.0001)/imagesPP);
	}
	
	updatePage()
}

function updatePage() {
	loadImages(imagePage*imagesPP)
	document.getElementById("pageNumber").innerHTML = "Page " + (imagePage+1) + " of " + (Math.floor((imageIndex.length-0.0001)/imagesPP)+1);
	document.getElementById("pageNumber2").innerHTML = "Page " + (imagePage+1) + " of " + (Math.floor((imageIndex.length-0.0001)/imagesPP)+1);
}

updatePage()