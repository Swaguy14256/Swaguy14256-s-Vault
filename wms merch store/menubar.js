function includeHTML(callback) {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML(callback);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
  if (callback) callback();
};

var snag = new Audio()

var source = document.createElement('source');
source.type = 'audio/mpeg';
source.src = '/wms merch store/error.wav';
snag.appendChild(source);

playSound(20)

function playSound(state) {
  //marioz = eval(localStorage.getItem("marioz"))
  setTimeout(function() {
    if (Math.floor(Math.random() * state) == 1 ) {
      snag.pause();
      snag.currentTime = 0;
      snag.play();
      alert("Sorry! We hit a snag.")

      //We might be moving the snag script here?
    }
  }, 1000);
}

function finddepth() {
  var folderdepth = "";
  var location = window.location.pathname;
  var directory = location.substring(0, location.lastIndexOf('/'));
  var directoryname = location.substring(directory.lastIndexOf('/')+1, directory.length);
  while (directoryname != "wms%20merch%20store") {
    folderdepth = folderdepth + "../";
    location = directory;
    directory = location.substring(0, location.lastIndexOf('/'));
    directoryname = location.substring(directory.lastIndexOf('/')+1, directory.length);
  }
  document.getElementById("home").href = folderdepth;
  document.getElementById("archived").href = folderdepth + "../wms archived/";
}

includeHTML(finddepth);