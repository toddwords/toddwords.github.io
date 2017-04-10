
var amp; 
var reverb;
var distortion = new p5.Distortion(0.03,'none')
var myVoice = new p5.Speech(); 
var voice;
var lastAmp, currAmp;
var baseSize

function setup(){
	createCanvas(windowWidth,windowHeight)
	noFill();
	voice = loadSound('voice.mp3', function(){voice.play()})
	amp = new p5.Amplitude();
	reverb = new p5.Reverb();
  	// voice.disconnect()
  	// voice.connect(distortion)
  	reverb.process(voice,0.5,2)
  	lastAmp = 0;
  	if(width >= height){
  		baseSize = height * 0.5
  	} else {
  		baseSize = width * 0.5
  	}
}

function draw(){
	background(225)
	noStroke()
	currAmp = amp.getLevel();
	lerpAmp = lerp(lastAmp,currAmp, 0.08)
	lastAmp = lerpAmp
	fill('rgba(0,50,230,0.7)');

  // Draw an ellipse with size based on volume
  	ellipse(width/2, height/2, baseSize*1.1+lerpAmp*900, baseSize*1.1+lerpAmp*900);
  	fill(0,50,230);
  	ellipse(width/2, height/2, baseSize, baseSize);


}

function mouseClicked(){
	window.parent.location.href= "https://www.theweirdestthingsforsale.com/weird-thing/";
}


