
var amp; 
var reverb;
var geico1,geico2,geico3;
var lastAmp, currAmp;
var baseSize
var clips = ['chester1-1.mp3','chester1-2.mp3','chester1-3.mp3', 'chester1-4.mp3']
var images = ['chester1.jpg', 'chester2.png', 'chester3.png', 'chester4.png']
var currentClip;
var playlist = [];
var gecko1,gecko2,gecko3;
var side;
var Things = [];
var playCounter = 0;
function preload(){
  playlist = loadClips(clips)
  for (var i = 0; i < images.length; i++) {
    images[i] = loadImage('assets/'+images[i])
  }
}
function setup(){
	createCanvas(windowWidth,windowHeight)
	noFill();
  if(width >= height){side = height}
  else{side = width}
  // loadAndPlay(geicoClips)
	amp = new p5.Amplitude();
	reverb = new p5.Reverb();
  	// voice.disconnect()
  	// voice.connect(distortion)
  for (var i = 0; i < playlist.length; i++) {
    reverb.process(playlist[i],1.5,5)
    playlist[i].onended(playNext)
  }
    playNext();
  	lastAmp = 0;
  	if(width >= height){
  		baseSize = height * 0.5
      Things.push(new Thing(choice(images), width/4, -100,0,3))
      Things.push(new Thing(choice(images), width/8, height/4,0,-2))
      Things.push(new Thing(choice(images), width - width/4, height,0,1))
      Things.push(new Thing(choice(images), width - width/8, height/2,0,-4))
      Things.push(new Thing(choice(images), width/2, height,2,0))
  	} else {
  		baseSize = width * 0.5
  	}
}

function draw(){
	background(245,50,0)
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
    for (var i = 0; i < Things.length; i++) {
      Things[i].update()
      Things[i].scale += sin(second()+Things[i].speedY)/200
      Things[i].draw()
    }
}

function mouseClicked(){
	window.parent.location.href= "https://www.amazon.com/dp/B01GGHY0Y2?ref_=ams_ad_dp_asin_1/";
}
function playNext(){
  playlist[playCounter].play()
  playCounter++;
}
function loadClips(clipList){
  var newList = []
  for (var i = 0; i < clipList.length; i++) {
    newList.push(loadSound('assets/'+clipList[i]))
  }
  return newList
}

function Thing(img,X,Y,sX,sY){
  this.image = img
  this.x = X - img.width/2
  this.y = Y - img.height/2
  this.speedX = sX
  this.speedY = sY
  this.scale = 1;
  this.update = function(){
    this.x += this.speedX
    this.y += this.speedY
    if(this.y <= -this.image.height || this.y >= height){this.speedY *= -1}
    if(this.x <= -this.image.width || this.x >= width){this.speedX *= -1}
  }
  this.draw = function(){
    image(this.image,this.x,this.y, this.image.width * this.scale, this.image.height * this.scale)
  }
}


function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}