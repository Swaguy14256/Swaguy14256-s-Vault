var luigi = new Audio();

var source= document.createElement('source');
source.type= 'audio/wav';
source.src= '/wms merch store/sold!.wav';
luigi.appendChild(source);
source= document.createElement('source');
source.type= 'audio/mpeg';
source.src= '/wms merch store/sold!.mp3';
luigi.appendChild(source);
document.getElementById('no').onclick = function() {
  luigi.pause();
  luigi.currentTime = 0;
  luigi.play();
}

