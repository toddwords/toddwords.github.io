var playing = true;
var fft;
var bgColor = 30;
var tutorial = -1;
var txt = "press Enter for Tutorial or just get started if you already know what you're doing"
var currImg;
var firstKey = false
var audiowide;
function preload() {
  recordImg = loadImage("recordKeys2.png");
  currImg = recordImg;
  playImg = loadImage("playKeys.png");
  loopImg = loadImage("loopKeys.png");
  sloopImg = loadImage("singleLoopKeys.png");
  stopImg = loadImage("stopLoop.png");
  vertImg = loadImage("verticals.png");
  spaceImg = loadImage("spaceSave.png");
  arrowImg = loadImage("rateVolume.png");
  audiowide = loadFont("fonts/audiowide.ttf")
  soundFileQ = new p5.SoundFile();
  soundFileW = new p5.SoundFile();
  soundFileE = new p5.SoundFile();
  soundFileR = new p5.SoundFile();
  soundFileT = new p5.SoundFile();
  soundFileY = new p5.SoundFile();
  soundFileU = new p5.SoundFile();
  soundFileI = new p5.SoundFile();
  soundFileO = new p5.SoundFile();
  soundFileP = new p5.SoundFile();
  beatFile = new p5.SoundFile();
  recorder = new p5.SoundRecorder();
  beatRecorder = new p5.SoundRecorder();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

 initAudio();

}

function draw() {
	background(bgColor);
	var f = map(mouseX, 0, width, 20, 800);
	a = map(mouseY, height, 0, 0.0, 1.0)
	r = map(mouseX, 0, width, 0, 3);

	  var waveform = fft.waveform();
	  stroke(255);
	  strokeWeight(10);
	  noFill()
	  beginShape();
	  for (var i = 0; i<waveform.length; i++){
	    var x = map(i, 0, waveform.length, 0, width);
	    var y = map(waveform[i], -1, 1, -height/2, height/2);
	    vertex(x, y + height/2);
	  }
	  endShape();

	if(tutorial > -1 || firstKey == false){
		fill(255, 25, 169);
	  	textAlign(CENTER);
		if(!firstKey){
			textFont(audiowide)
			textSize(72);
	  		text("sampl0rd", width/4, height/16, width/2, height*0.75);	
		}		
	  	textSize(28);
		text(txt, width/5, height/5, width * 0.6, height*0.75);
		if(tutorial >= 3 && tutorial <9){
			image(currImg,0, 0, width,height)
		} else if(tutorial > -1) {
			image(currImg,width/4, height *0.55,width/2, width/2 * currImg.height/recordImg.width)
		}
		if(tutorial == 0){
			text("", width/4, height * 0.85, width/2, height*0.75);
		}

	}
}

function keyTyped(){
	getAudioContext().resume().then(() => {
		initAudio()
		if(tutorial > 0 && key != " "){introCheck(key)}
		if(!firstKey){
			firstKey = true
			var elem = document.getElementById('about');
	    	elem.parentNode.removeChild(elem);
		}
		if(keyCode == 13 ){if(tutorial < 0){tutorial = 0;txt = "Press and hold Shift + any letters in the top row on the keyboard to record a sound (a mic is required). Recording stops when you let go.\n(Press Enter to close tutorial, or Click to skip ahead)"}else{tutorial = -1;currImg = recordImg}}
		if(key == " "){
			beatRecorder.record(beatFile);
			bgColor = 150;
		}
		if(key == "Q"){
			recorder.record(soundFileQ);
			bgColor = 100;
		}
		if(key == "W"){
			recorder.record(soundFileW);
			bgColor = 100;
		}
		if(key == "E"){
			recorder.record(soundFileE);
			bgColor = 100;
		}
		if(key == "R"){
			recorder.record(soundFileR);
			bgColor = 100;
		}
		if(key == "T"){
			recorder.record(soundFileT);
			bgColor = 100;
		}
		if(key == "Y"){
			recorder.record(soundFileY);
			bgColor = 100;
		}
		if(key == "U"){
			recorder.record(soundFileU);
			bgColor = 100;
		}
		if(key == "I"){
			recorder.record(soundFileI);
			bgColor = 100;
		}
		if(key == "O"){
			recorder.record(soundFileO);
			bgColor = 100;
		}
		if(key == "P"){
			recorder.record(soundFileP);
			bgColor = 100;
		}
		if(key == "q"){
			soundFileQ._looping = false;
			soundFileQ.play(0,r,a);
		}
		if(key == "w"){
			soundFileW._looping = false;
			soundFileW.play(0,r,a);
		}
		if(key == "e"){
			soundFileE._looping = false;
			soundFileE.play(0,r,a);
		}
		if(key == "r"){
			soundFileR._looping = false;
			soundFileR.play(0,r,a);
		}
		if(key == "t"){
			soundFileT._looping = false;
			soundFileT.play(0,r,a);
		}
		if(key == "y"){
			soundFileY._looping = false;
			soundFileY.play(0,r,a);
		}
		if(key == "u"){
			soundFileU._looping = false;
			soundFileU.play(0,r,a);
		}
		if(key == "i"){
			soundFileI._looping = false;
			soundFileI.play(0,r,a);
		}
		if(key == "o"){
			soundFileO._looping = false;
			soundFileO.play(0,r,a);
		}
		if(key == "p"){
			soundFileP._looping = false;
			soundFileP.play(0,r,a);
		}
		if(key == "a"){
			soundFileQ.loop(0,r,a);
		}
		if(key == "A"){
			soundFileQ.stop();
		}
		if(key == "s"){
			soundFileW.loop(0,r,a);
		}
		if(key == "S"){
			soundFileW.stop();
		}
		if(key == "d"){
			soundFileE.loop(0,r,a);
		}
		if(key == "D"){
			soundFileE.stop();
		}
		if(key == "f"){
			soundFileR.loop(0,r,a);
		}
		if(key == "F"){
			soundFileR.stop();
		}
		if(key == "g"){
			soundFileT.loop(0,r,a);
		}
		if(key == "G"){
			soundFileT.stop();
		}
		if(key == "h"){
			soundFileY.loop(0,r,a);
		}
		if(key == "H"){
			soundFileY.stop();
		}
		if(key == "j"){
			soundFileU.loop(0,r,a);
		}
		if(key == "J"){
			soundFileU.stop();
		}
		if(key == "k"){
			soundFileI.loop(0,r,a);
		}
		if(key == "K"){
			soundFileI.stop();
		}
		if(key == "l"){
			soundFileO.loop(0,r,a);
		}
		if(key == "L"){
			soundFileO.stop();
		}
		if(key == ";"){
			soundFileP.loop(0,r,a);
		}
		if(key == ":"){
			soundFileP.stop();
		}
		if(key == "z"){
			soundFileQ.pause();
			setTimeout(function(){soundFileQ.loop(0,r,a,0);},10)
		}
		if(key == "x"){
			soundFileW.pause();
			setTimeout(function(){soundFileW.loop(0,r,a,0);},10)
		}
		if(key == "c"){
			soundFileE.pause();
			setTimeout(function(){soundFileE.loop(0,r,a,0);},10)
		}
		if(key == "v"){
			soundFileR.pause();
			setTimeout(function(){soundFileR.loop(0,r,a,0);},10)
		}
		if(key == "b"){
			soundFileT.pause();
			setTimeout(function(){soundFileT.loop(0,r,a,0);},10)
		}
		if(key == "n"){
			soundFileY.pause();
			setTimeout(function(){soundFileY.loop(0,r,a,0);},10)
		}
		if(key == "m"){
			soundFileU.pause();
			setTimeout(function(){soundFileU.loop(0,r,a,0);},10)
		}
		if(key == ","){
			soundFileI.pause();
			setTimeout(function(){soundFileI.loop(0,r,a,0);},10)
		}
		if(key == "."){
			soundFileO.pause();
			setTimeout(function(){soundFileO.loop(0,r,a,0);},10)
		}
		if(key == "/"){
			soundFileP.pause();
			setTimeout(function(){soundFileP.loop(0,r,a,0);},10)
		}
		if(key == "-"){
			masterVolume(0, 10);
		}
		if(key == "_"){
			masterVolume(1);
		}
		if(key == "="){
			soundFileQ.stop();
			soundFileW.stop();
			soundFileE.stop();
			soundFileR.stop();
			soundFileT.stop();
			soundFileY.stop();
			soundFileU.stop();
			soundFileI.stop();
			soundFileO.stop();
			soundFileP.stop();
		}
	})

}
function keyReleased(){
	if(tutorial === 0 || key == " "){introCheck(key)}
	if(keyCode == RIGHT_ARROW && tutorial > -1){introCheck("click");return false}
	if(keyCode == LEFT_ARROW && tutorial > 1){tutorial-=2;introCheck("click");return false}
	if(key == "Q"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "W"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "E"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "R"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "T"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "Y"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "U"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "I"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "O"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == "P"){
		recorder.stop()
		bgColor = 30;
	}
	if(key == " "){
		beatRecorder.stop();
		bgColor = 30;
		saveSound(beatFile, "myBeat.wav");
	}
	if(key == "z"){
		soundFileQ.loop(0,r,a,0);
	}
}


function introCheck(key){
	console.log(tutorial + " "+ key)
	if(['Q','W','E','R','T','Y','U','I','O','P','click'].indexOf(key) !== -1 && tutorial == 0){
		currImg = playImg
		tutorial++;
		txt = "Press the same letter key you held down to play the sound"
	}
	else if(['q','w','e','r','t','y','u','i','o','p','click'].indexOf(key) !== -1 && tutorial == 1){
		currImg = playImg
		tutorial++;
		txt = "Press the same letter key you held down to play the sound"
	}
	else if(['q','w','e','r','t','y','u','i','o','p','click'].indexOf(key) !== -1 && tutorial >= 2 && tutorial <=8){
		txt = "The mouse position affects playback. The x-axis controls how fast the sample is played (left = slow, right = fast) and the y-axis controls how loud (bottom = quiet, top = loud). Try it!"
		currImg = arrowImg;
		tutorial++;
		if(tutorial > 8){txt = "The top row of keys just plays the sound. The next two rows loop that sound. Each column of keys is a different 'track'. Try pressing the key below the sound you recorded earlier."; currImg = vertImg;}
	}
	else if(['a','s','d','f','g','h','j','k','l',';','click'].indexOf(key) !== -1 && tutorial == 9){
		tutorial++;
		if(tutorial > 9){txt = "The second row allows you to layer multiple loops of the same sound. Try making multiple loops at different rates."; currImg = loopImg;}
	}
	else if(['a','s','d','f','g','h','j','k','l',';','click'].indexOf(key) !== -1 && tutorial >= 10 && tutorial <=13){
		tutorial++;
		if(tutorial > 13){txt = "Press Shift + a key in the second row to cancel all loops from that key, or '=' to stop all loops"; currImg = stopImg}
	}
	else if(['A','S','D','F','G','H','J','K','L',':','click'].indexOf(key) !== -1 && tutorial == 14){
		tutorial++;
		if(tutorial > 14){txt = "The bottom row of keys allows you to move around a single loop rather than creating multiples. If you already have multiple loops on that track it will just change the most recent"; currImg = sloopImg}
	}
	else if(['z','x','c','v','b','n','m',',','.','/','click'].indexOf(key) !== -1 && tutorial >= 15 && tutorial <=19){
		tutorial++;
		if(tutorial > 19){txt = "When you've created a soundscape you like, hold down Space to record it as a WAV file"; currImg = spaceImg}
	}
	else if([" ",'click'].indexOf(key) !== -1 && tutorial == 20){
		tutorial++;
		if(tutorial > 20){
			txt = "Those are the basics! But the real fun starts when you get multiple tracks going at once so give that a shot. And if something breaks, just refresh and start over :)"; 
			setTimeout(function(){txt=""; tutorial = -1}, 7000)
		}
	}

}

function mousePressed(){
	getAudioContext().resume()
	if(tutorial > -1){
		var currText = txt
		while(txt == currText){
			if(tutorial > 20){tutorial = -1;break}
			introCheck('click')
		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function initAudio(){
  fft = new p5.FFT();

    // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  
  // connect the mic to the recorder
  recorder.setInput(mic);
  beatRecorder.setInput();

  // create an empty sound file that we will use to playback the recording
  
}