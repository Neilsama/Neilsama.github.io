var num = 1;
var song1;
var song2;
var fft;

function preload(){

  song1=loadSound('sounds/sound1.mp3');
  song2=loadSound('sounds/sound2.mp3');
}

function setup() {
  amplitude = new p5.Amplitude();
  createCanvas(1200, 400).parent('canvas');
}

function togglePlaying(i){
  if(i == 1){
    if(!song1.isPlaying()){
      song1.play();
    }
    else{
      song1.stop();
    }
  }
  
  if(i == 2){
    if(!song2.isPlaying()){
      song2.play();
    }
    else{
      song2.stop();
    }
  }
}

function draw() {
    clear();

    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 0, 300);

    for(var i = 0;i<30;i++){
      fill("#ff19a5");
      ellipse(random(1200),random(400),size/10,size/10);
    }
    fill("#ff19a5");
    noStroke();
    ellipse(width/2, height/2, size, size);
}
