var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, triOsc, bp, noise,frq,rng;


function preload(){

}

function setup(){
	createCanvas(windowWidth,windowHeight)
	env = new p5.Env();
  	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  	env.setRange(attackLevel, releaseLevel);
	triOsc = new p5.TriOsc()
	// triOsc.amp(env);
  	// triOsc.start();
	triOsc.freq(440);
	bp = new p5.Filter('bandpass')
	noise = new p5.Noise()
	noise.disconnect()
	noise.amp(0)
	bp.process(noise)
	noise.start()
	rng = 5
}

function draw(){
	bp.set(frq,rng)

	frq = map(mouseX,0,width,1000,4000)
	// rng = map(mouseY,0,height,10,100)
	
}

function keyTyped(){
	if(key === 'a'){
  		env.setADSR(attackTime, decayTime, susPercent, releaseTime);
		env.play(bp)
	}
	if(key === 's'){
  		env.setADSR(attackTime, decayTime, susPercent, releaseTime);
		env.play(noise)
	}
	if(key === 'k'){
  		env.setADSR(attackTime, decayTime, susPercent, releaseTime);
		env.play(noise)
	}

}


