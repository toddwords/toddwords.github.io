
var amp; 
var reverb;
var geico1,geico2,geico3;
var lastAmp, currAmp;
var baseSize
var geicoClips = ['geico1.mp3','geico2.mp3','geico3.mp3']
var currentClip;
var nextClips = [];
var gecko1,gecko2,gecko3;
var side;
function setup(){
	createCanvas(windowWidth,windowHeight)
	noFill();
  if(width >= height){side = width}
  else{side = height}
  // loadAndPlay(geicoClips)
  gecko1 = loadImage('assets/gecko1.png', function(){console.log(gecko1.width)})
  gecko2 = loadImage('assets/gecko2.gif')
  gecko3 = loadImage('assets/gecko3.png')
  geico1 = loadSound('assets/geico1.mp3', function(){geico1.play()})
  geico2 = loadSound('assets/geico2.mp3')
	geico3 = loadSound('assets/geico3.mp3')
  geico1.onended(function(){geico2.play()})
  geico2.onended(function(){geico3.play()})
	amp = new p5.Amplitude();
	reverb = new p5.Reverb();
  	// voice.disconnect()
  	// voice.connect(distortion)
    reverb.process(geico1,1.5,5)
    reverb.process(geico2,1.5,5)
  	reverb.process(geico3,1.5,5)
  	lastAmp = 0;
  	if(width >= height){
  		baseSize = height * 0.5
  	} else {
  		baseSize = width * 0.5
  	}
}

function draw(){
	background(245)
	noStroke()
	currAmp = amp.getLevel();
	lerpAmp = lerp(lastAmp,currAmp, 0.08)
	lastAmp = lerpAmp
	fill('rgba(0,50,230,0.7)');

  // Draw an ellipse with size based on volume
  	ellipse(width/2, height/2, baseSize*1.1+lerpAmp*900, baseSize*1.1+lerpAmp*900);
  	fill(0,50,230);
  	ellipse(width/2, height/2, baseSize, baseSize);
    scale(width/1536,width/1536)
    rotate(0.2)
    image(gecko2,width/4+(millis()/70),height/8)
    image(gecko1,width-(millis()/50),height/4)
    rotate(-0.5)
    image(gecko3,width*-0.07+(millis()/20),height/20)
    image(gecko2,width-width*0.07-(millis()/5),0)
    image(gecko1,width-(millis()/5),gecko2.height *0.75)

    translate(width/2,height/2)
    rotate(millis()/1000)
    image(gecko1,width/-3+(millis()/40),height/20)
    rotate(millis()/10000)
    image(gecko1, width/8+(millis()/130),height/11)

}

function mouseClicked(){
	window.parent.location.href= "https://www.theweirdestthingsforsale.com/weird-thing/";
}

function loadAndPlay(clipList){
  currentClip = loadSound('assets/'+clipList[0], function(){currentClip.play()})
  currentClip.onended(function(){currentClip = nextClips[0]; currentClip.play()})
  for (var i = 1; i < clipList.length; i++) {
    nextClips.push(loadSound('assets/'+clipList[i]))
    nextClips[i-1].onended(function(){currentClip = nextClips[i]; currentClip.play()})
  }
}


