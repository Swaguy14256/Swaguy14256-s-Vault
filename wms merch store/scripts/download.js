var llink;
var ilink = ["d", "d", "d"];
var slink = ["d", "d", "d"];
//console.log(ilink[1]);
var enable = -1;
var forcevault = 0;

var vaultlink = "https://super-bold-marmot.ngrok-free.app/merch/";

var snag = new Audio()

var source = document.createElement('source');
source.type = 'audio/mpeg';
source.src = '/wms merch store/error.wav';
snag.appendChild(source);


function download(link) {
  if (enable ==1) {
    window.location.href = vaultlink + "files/" + link;
  } else {
    alert("If you would like to download this file, find '" + link + "' in any of the file mirrors. If you cannot find it, contact us and we will add it.")
    window.location.href = "/wms merch store/eol";
  }
}

function loadImageOld(link) {
  ExternalLink.getExternalLink(function(link) {
    console.log(link);
    placelink = link;


    //console.log(ilink[1]);
    if (forcevault == 0) {
      checkHTMLN(link);
    }
    else {
      checkHTMLN(link);
    }
  })
}

function loadImaged(link) {
  //window.location.replace("/wms merch store/eol");
  var redirectt = document.createElement("a");
  redirectt.href = '/wms merch store/eol';
  redirectt.innerText = "Content not available. Click here to learn more.";
  h = document.getElementById("main").parentElement;
  h.innerHTML = "";
  h.appendChild(redirectt);
}

function loadImage(link) {
  //Get Minifs Place
  //checkHTMLN(0, link);
  // Checks for Minif's place, then Swaguy14256's Vault by default, but only Swaguy14256's Vault if the forcevault flag is not 0.
  checkHTMLN(link);
}

function addImages() {

}

function loadImage2(link) {
  loadImage(link)
  /**setTimeout(function(){
    ilink = vaultlink + "merch/images/"
    slink = vaultlink + "merch/files/"
    document.getElementById("main").src = ilink + link;
    enable=true;
  }, 1000);
  **/
}

playSound(20)

function playSound(state) {
  setTimeout(function() {
    if (Math.floor(Math.random() * state) == 1) {
      snag.pause();
      snag.currentTime = 0;
      snag.play();
      alert("Sorry! We hit a snag.")
    }
  }, 1000);
}

function checkHTMLN(link) {
  document.getElementById("main").onload = function() {
    //console.log("dd");
    enable = 1;
  };
  document.getElementById("main").onerror = function() {
    console.log("no domains are up");

    var redirectt = document.createElement("a");
    redirectt.href = '/wms merch store/eol';
    redirectt.innerText = "Content not available. Click here to learn more.";
    h = document.getElementById("main").parentElement;
    h.innerHTML = "";
    h.appendChild(redirectt);
  };
  document.getElementById("main").src = vaultlink + "images/" + link;
};

