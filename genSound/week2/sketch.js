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
  	loopStartSlider = createSlider(0,war.duration(),0)
  	loopLengthSlider = createSlider(0,4,4,0.1)
  	loopStartSlider.position(20, 40);
  	loopLengthSlider.position(20, 60);
  	loopStartSlider.changed(restartLoop)
  	loopLengthSlider.changed(restartLoop)
  	loopStartSlider.style("width","600px")
  	loopLengthSlider.style("width","600px")
  	playButton = createButton("Play")
  	playButton.position(20,80)
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
		groove(war,1.0,36,2)
	}
	if(key === "j"){
		volume -= 0.01
	}

}
function restartLoop(){
	war.stop()
	groove(war,1.0,loopStartSlider.value(),loopLengthSlider.value())
}


function groove(soundFile,rate,start,duration){
	console.log("hello")
	soundFile.loop(0,rate,volume,start,duration)
}