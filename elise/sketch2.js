var ads = {
  intro : {clips: ['intro1.mp3', 'intro2.mp3', 'intro3.mp3', 'intro4.mp3', 'intro5.mp3', 'intro6.mp3', 'intro7.mp3'], images: ['cart1.png', 'cart2.png', 'cart3.png', 'cart4.png', 'cart5.png', 'cart6.png'], bg: 245, link:'https://amazon.com'},
  chester3 : {clips: ['pain1.mp3', 'pain2.mp3', 'pain3.mp3', 'pain4.mp3'], images: ['cart1.png'], bg: 0, link:'https://amazon.com'},
  geico1 : {clips: ['geico1.mp3','geico2.mp3', 'geico3.mp3'], images: ['gecko1.png', 'gecko2.gif', 'gecko3.png'], bg: 245, link: 'https://geico.com'},
  geico2 : {clips: ['geico2-1.mp3','geico2-3.mp3', 'geico2-4.mp3'], images: ['gecko1.png', 'gecko2.gif', 'gecko3.png'], bg: 245, link: 'https://geico.com'},
  geico3 : {clips: ['geico3-1.mp3','geico3-2.mp3','geico3-3.mp3', 'geico3-4.mp3'], images: ['gecko1.png', 'gecko2.gif', 'gecko3.png'], bg: 245, link: 'https://geico.com'},
  chester1 : {clips: ['chester1-1.mp3','chester1-2.mp3','chester1-3.mp3', 'chester1-4.mp3'], images: ['chester1.jpg', 'chester2.png', 'chester3.png','chester4.png'], bg: 'rgb(245,50,0)', link: 'https://www.amazon.com/Cheetos-Chester-Dresser-Halloween-Cheetah/dp/B01LZKSBOM'},
  chester2 : {clips: ['chester2-1.mp3','chester2-2.mp3','chester2-3.mp3'], images: ['chesterBike.png','chester1.jpg', 'chester3.png','chesterBike.png'], bg: 'rgb(245,50,0)', link: 'https://www.amazon.com/Cheetos-Chester-Dresser-Halloween-Cheetah/dp/B01LZKSBOM'},
  bell1 : {clips: ['bell1-1.mp3','bell1-2.mp3','bell1-3.mp3'], images: ['bell1.gif','bell2.png','taco1.png', 'taco2.png', 'taco3.png','taco4.png', 'taco5.png'], bg: 'rgb(247,184,84)', link: 'https://tacobell.com'},
  bell2 : {clips: ['bell2-1.mp3','bell2-1.mp3','bell2-1.mp3'], images: ['bell1.gif','bell2.png','taco1.png', 'taco2.png', 'taco3.png','taco4.png', 'taco5.png'], bg: 'rgb(247,184,84)', link: 'https://tacobell.com'}
}
var currAd = ads[getParameterByName('scene')]
var amp; 
var reverb;
var geico1,geico2,geico3;
var lastAmp, currAmp;
var baseSize
var clips = currAd.clips
var images = currAd.images
var playlist = [];
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
    if(images[0]){
      Things.push(new Thing(images[0], width/4, -100,random(-5,5),random(-5,5)))
      Things.push(new Thing(choice(images), width/8, height/4,random(-5,5),random(-5,5)))
      Things.push(new Thing(choice(images), width - width/4, height,random(-5,5),random(-5,5)))
      Things.push(new Thing(choice(images), width - width/8, height/2,random(-5,5),random(-5,5)))
      Things.push(new Thing(choice(images), width/2, height,random(-5,5),random(-5,5)))
    }
      
  	if(width >= height){
  		baseSize = height * 0.5
  	} else {

  		baseSize = width * 0.5
  	}
}

function draw(){
	background(currAd.bg)
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
	window.parent.location.href= currAd.link;
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


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}