
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
  if(width >= height){side = height}
  else{side = width}
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
    // if(side == height){scale(height/700,height/700)}
    // else{scale(width/1500,width/1500)}
    rotate(0.2)
    translate(width/2,0)
    image(gecko2,width/4+(millis()/70),height - gecko2.height -height/8)
    image(gecko1,width-(millis()/50),height/4)
    image(gecko3,width*-0.07+(millis()/20),height/20)
    rotate(-0.5)
    image(gecko3,width*-0.02+(millis()/35),height/2)
    image(gecko3,width/2+(millis()/35),height)
    image(gecko2,width/2-(millis()/40),height)
    image(gecko2,width-width*0.07-(millis()/5),height *0.75 - gecko2.height)
    image(gecko1,width-(millis()/5),gecko2.height *0.75)
    translate(0,height/2)

    rotate(millis()/1000)
    image(gecko1,width/-3+(millis()/40),height/20)
    image(gecko2,millis()/65,height/40)
    rotate(millis()/10000)
    image(gecko3, width/8+(millis()/130),height - gecko1.height - height/11)

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


