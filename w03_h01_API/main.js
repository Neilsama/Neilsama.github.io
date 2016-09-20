var soundId;
// var swc = 0; //0 = stop, 1 = play
var mySound;
var soundUrl;
var amplitude = 0.5;
var file;

// function playSounds(){

// 	SC.get('/tracks').then(function(tracks){
// 	var random = Math.floor(Math.random()*49)
// 	// console.log("track[",random,"] id is",tracks[random].id,"track[",random,"] url is:",tracks[random].permalink_url);
// 	// console.log('tracks', tracks);
// 	soundUrl = tracks[random].permalink_url;
// 	soundId = "/tracks/"+tracks[random].id;
	
// 	SC.stream(soundId).then(function(sound){
//  	 mySound = sound
//  	 mySound.play();
//  	});	
	
// 	});
// }



function setup() {

	SC.initialize({
		client_id:'f8d01220cc0357129af3ed02a2aececb'
	});

	// createCanvas(1200, 400).parent('canvas');
	noCanvas();
	var playBtn = select('#play');
	var stopBtn = select('#stop');

	playBtn.mousePressed(playSounds);
	stopBtn.mousePressed(stopSounds);
  	amplitude = new p5.Amplitude(); 
}


function playSounds(){
	//get track----------------------------------
	SC.get('/tracks').then(function(tracks){
	var random = Math.floor(Math.random()*49)
	console.log('tracks', tracks[random]);
	soundUrl = tracks[random].permalink_url;
	soundId = "/tracks/"+tracks[random].id;
	$("#user").html("Author : "+tracks[random].user.username);
	$("#title").html("Title : "+tracks[random].title);
	$("#url").html("Url : "+soundUrl);

	// loadJSON(soundUrl,gotData());
	// get stream----------------------------
	SC.stream(soundId).then(function(player){
 	  mySound = player;
 	  // console.log("player:: ",player);
 	  //   loadJSON(player);
 	 	player.play(); 	 	
 	 	
 	});	
//---------------ajax------------	 
	// var myUrl = "http://api.soundcloud.com/tracks/"+tracks[random].id+"?format=json&client_id=f8d01220cc0357129af3ed02a2aececb";
	// $.ajax({
	// 	url : myUrl,
	// 	dataType : "jsonp",
	// 	success : function(player) {
	// 		// loadJSON(myUrl,gotData());
	// 		song = loadSound(myUrl);
	// 		console.log("gotData");
	// 		// mySound = loadSound(soundUrl+'?client_id=f8d01220cc0357129af3ed02a2aececb');
	// 		// player.play();		
	// 	},
	// 	error: function(response){
	// 		console.log("error");
	// 	}
	// });
});

}

function gotData(data){	
	mySound = data;
	mySound.play();
	console.log("data");
}

function stopSounds(){
	if(mySound.isPlaying()==true){
		mySound.pause();
		$("#stop").html("Play");
	}
	else{
		mySound.play();
		$("#stop").html("Pause");

	}

}

function draw() {
    // clear();
    // text("here");
    // var level = amplitude.getLevel();
    // console.log("level is:",level);
    // var size = map(level, 0, 1, 0, 300);

    // for(var i = 0;i<30;i++){
    //   fill("#ff19a5");
    //   ellipse(random(1200),random(400),size/10,size/10);
    // }
    // fill("#ff19a5");
    // noStroke();
    // ellipse(width/2, height/2, size, size);
}


