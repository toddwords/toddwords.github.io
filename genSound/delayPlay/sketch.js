var osc,delay,env,reverb,mic;

function preload(){

}

function setup(){
	createCanvas(windowWidth,windowHeight)
	osc = new p5.TriOsc();
	delay = new p5.Delay()
	reverb = new p5.Reverb()
	mic = new p5.AudioIn();
	mic.start()
	mic.connect()
	env = new p5.Env(.01, 0.2, .2, .1)
	osc.amp(0)
	osc.start()
	delay.process(osc,.67,.3)
	reverb.process(osc,3,2)
	delay.setType(1)
	setInterval(function(){env.play(osc)},200)
}

function draw(){
	var t = map(mouseX,0,width,0.0,1.0)
	var frq = map(mouseY,0,height,50,1500)
	osc.freq(frq)
}

function keyTyped(){
	if(key == " "){
		env.play(osc)
	}
}
