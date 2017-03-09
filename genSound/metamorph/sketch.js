var audiobook;
var attackLevel = 15.0;
var releaseLevel = 2.0;
var attackTime = 0.01
var decayTime = 0.09;
var susPercent = 0.4;
var releaseTime = 0.1;
var filter,prevF,nextF,prevR,nextR,startTime,pulseTime;
var analyzer,waveform; 
var noise, canNoise;
var env,noiseEnv;
var reverb;
function preload(){
	audiobook = loadSound("metamorph.mp3")
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	noFill();
	noise = new p5.Noise();
	noise.amp(0);
	noise.start();
	filter = new p5.BandPass();
	analyzer = new p5.FFT();
	amplitude = new p5.Amplitude()
	filter.set(340,3);
	env = new p5.Env();
  	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  	env.setRange(attackLevel, releaseLevel);
  	noiseEnv = new p5.Env();
  	noiseEnv.setADSR(.01, .05, susPercent, .05);
  	noiseEnv.setRange(0.2, 0);
  	reverb = new p5.Reverb()
  	reverb.process(filter,1.5,3)
  	// audiobook.disconnect()
  	audiobook.play()
  	audiobook.rate(1.1)
  	audiobook.disconnect()
  	audiobook.connect(filter)
  	audiobook.amp(10)
  	// filter.process(audiobook)
  	env.setInput(audiobook)
  	pulseTime = 200;
  	pulse()
	amplitude.setInput(filter)

  	setInterval(pulse, pulseTime)
}
function pulse(){
	env.play();
	prevF = filter.freq()
	nextF = random(80,3000)
	prevR = filter.res()
	nextR = Math.random()*10+0.01
	startTime = millis()
	canNoise = true
}
function draw(){
	console.log(amplitude.getLevel())
	background(70)
	var ratio = (millis()-startTime)/pulseTime
	var frq = lerp(prevF,nextF,ratio)
	var rs = lerp(prevR,nextR,ratio)
	filter.freq(frq)
	filter.res(rs)

	if(amplitude.getLevel() > 0.1 && canNoise){
		noiseEnv.play(noise)
		canNoise = false
	} 

	waveform = analyzer.waveform();
	stroke(230,137,80);
  	strokeWeight(10);
  	beginShape();
	  for (var i = 0; i < waveform.length; i++){
	    var x = map(i, 0, waveform.length, 0, width);
	    var y = map(waveform[i], -1, 1, -height/4, height/4);
	    vertex(x, y + height/2);
	  }
	 endShape();
}


