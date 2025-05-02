var randomgameart = new Array();

randomgameart[0] = new Image();
randomgameart[0].src = "../gameart/ww/ww.png";

randomgameart[1] = new Image();
randomgameart[1].src = "../gameart/mc/mc.png";

randomgameart[2] = new Image();
randomgameart[2].src = "../gameart/st/st.png";

randomgameart[3] = new Image();
randomgameart[3].src = "../gameart/st ghost/st ghost.png";

randomgameart[4] = new Image();
randomgameart[4].src = "../gameart/bl/bl.png";

randomgameart[5] = new Image();
randomgameart[5].src = "../gameart/logo/logo.png";

randomgameart[6] = new Image();
randomgameart[6].src = "../gameart/WWHD/wwhd.png";

randomgameart[7] = new Image();
randomgameart[7].src = "../gameart/hwl/hwl.png";

randomgameart[8] = new Image();
randomgameart[8].src = "../gameart/hwl2/hwl2.png";

randomgameart[9] = new Image();
randomgameart[9].src = "../gameart/phantom/phantom.png";

randomgameart[10] = new Image();
randomgameart[10].src = "../modelimages/nn3ds/she is a hippie.png";

function loadImage(number) {
  var rng = Math.floor(Math.random()*number)
 document.getElementById("main").src = randomgameart[rng].src;
 marioz = parseInt(sessionStorage.getItem("marioz"));
 if (marioz == 19) {
   window.location.href = "../scripts/error.html";
 }
}