var minif = document.createElement("script");
minif.src = "https://the-place--minif.repl.co/link.js";
document.head.append(minif)

var sg14256 = document.createElement("script");
sg14256.src = "https://swaguy14256s-vault--swaguy14256.repl.co/script.js"
document.head.append(sg14256)

var llink;
var ilink = ["d","d"];
var slink = ["d","d"];
//console.log(ilink[1]);
var enable = -1;
var forcevault = 0;




function download(link) {
  if (enable!=-1) {
    window.location.href = slink[enable] + link;
  }
}

function loadImage(link) {
    slink[0] = placelink + "merch/files/"
    slink[1] = vaultlink + "toonzelda/files/"
    //console.log(ilink[1]);
    if (forcevault==0){
      checkHTMLN(0, link);
    }
    else{
      checkHTMLN(1, link);
    }
}

function loadImage2(link) {
  forcevault = 1;
  loadImage(link) 
  /**setTimeout(function(){
    ilink = vaultlink + "merch/images/"
    slink = vaultlink + "merch/files/"
    document.getElementById("main").src = ilink + link;
    enable=true;
  }, 1000);
  **/
}

var snag = new Audio()

var source= document.createElement('source');
source.type= 'audio/mpeg';
source.src= '/error.mp3';
snag.appendChild(source);

function playSound(state) {
  setTimeout(function(){
  if (Math.floor(Math.random()*state)==1) {
  snag.pause();
  snag.currentTime = 0;
  snag.play();
  alert("Sorry! We hit a snag.")
  }
  }, 1000);
}

playSound(20)

function checkHTMLN(index, link) {
  document.getElementById("main").onload=function(){
    //console.log("dd");
    enable=index;
  };
  document.getElementById("main").onerror=function(){
    if (index < slink.length-1) {
      document.getElementById("main").src="/scripts/wait.png"
      checkHTMLN(index+1, link)
    } else {
      console.log("no domains are up");
    }
  };
  document.getElementById("main").src=slink[index]+link;
};