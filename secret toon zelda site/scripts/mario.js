marioze = 0;

var luigi = new Audio();
function pickVoice(voice) {
  luigi.pause();
  luigi.currentTime = 0;
  luigi = document.getElementById("mariovoice"+voice);
}
function playVoice() {
  document.getElementById("mario").onclick = function() {
  marioze++;
  sessionStorage.setItem("marioz", marioze);
  pickVoice(Math.floor(Math.random()*19))
  luigi.pause();
  luigi.currentTime = 0;
  luigi.play();
  document.getElementById("mario").src = "scripts/mariop.gif"
  setTimeout(() => { document.getElementById("mario").src = "scripts/mario.png"; }, 3000);
  }
}

luigi.onended = function() {
  alert("The audio has ended");
} 