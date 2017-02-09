var volume = 1.0
var gain1;
function preload(){
	war = loadSound("war.mp3")
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	gain1 = new p5.Gain()
	gain1.setInput(war)
	gSlider = createSlider(0, 100, 100);
  	gSlider.position(20, 20);
  	playButton = createButton("Play")
  	playButton.position(20,40)
  	playButton.mousePressed(function(){war.play()})
}

function draw(){
	background(240)
	textSize(72)
	volume = gSlider.value()/100.0
	gain1.amp(volume)
	text(volume.toString(),width/2,height/2)
}

function keyTyped(){
	console.log("hello")
	if(key === " "){
		console.log("hello")
		war.play()
	}
	if(key === "K"){
		groove(war,2.0,36,2)
	}
	if(key === "j"){
		volume -= 0.01
	}

}


function groove(soundFile,rate,start,duration){
	console.log("hello")
	soundFile.loop(0,rate,volume,start,duration)
}