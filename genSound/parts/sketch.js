var pitchSet1 = [220, 247.5, 278.44, 293.34, 330, 371.25, 417.655, 440,495,556.88,586.67,660,742.5,835.31,880];
var pitchSet2 = [207.65, 233.08, 277.18, 311.13, 329.63,349.23,415.30,466.16, 554.37,622.25,659.25,698.46, 830.61, 932.33];
var pitchSetEnig = [174.61, 185, 220, 246.94, 277.18, 311.13, 329.63,349.23,369.99,440,493.88, 554.37,622.25,659.25,698.46, ];
var pitchSetHira = [196,220,233.08,293.66,311.13,392,440,466.16,587.33,622.25,783.99];
var pitchSetHira2 = [196,246.94,277.18,293.66,369.99,392,493.88,554.37,587.33,739.99,783.99];
var pitchSetMinor = [264.63,293.66,311.13,349.23,415.30,493.88,523.25,587.33,622.25,698.46,830.61];
var kite1 = new p5.Part();
var umb1 = new p5.Part();
var el1 = new p5.Part();
var c1 = new p5.Part();
var currPitchSet = pitchSet1;
var mid = new Synth();
var lead = new Synth();
var bass = new Synth();
function setup(){
	mid.createPhrase(kite1, [1,0,2,4,5,1,0,1])
	lead.createPhrase(kite1, [7,0,8,9,5,0,11,12,8])
	bass.createPhrase(kite1, [1,0,0,0,2,0,0,3,0,0,1,0,0,0,2,0,4,0,0,0])
	kite1.setBPM(60)
    umb1.setBPM(100)
    el1.setBPM(45)
    c1.setBPM(60)
	bass.env.setADSR(0.2,0.5,0.6,1.0)
	bass.octave = 0.5
	bass.createPhrase(umb1, [3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,1,0,1,0,1,0,5,1,1,0,1,0,1,0])
	lead.createPhrase(umb1, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,8,9,11,9,0,0,8,9,11,9])
	mid.createPhrase(umb1, [0,3,0,3,0,3,3,3,0,4,0,4,0,4,4,4,0,5,0,5,0,5,5,5])
	bass.createPhrase(el1, [1,0,2,0,3,0,6,0])
	// lead.createPhrase(el1, [0,0,10,0,0,10,10,0,0,0,0,0,6,10,11,0,0,10,0,0,0,10])
	mid.createPhrase(el1, [6,0,0,0,0,0,0,0,6,0,0,0,0,0,0,6])
	lead.createPhrase(el1,[0,9,9,10,0,4,7,0,8])
	mid.createPhrase(c1,[7,6,7,3,4,0,7,6,7,9,7,0,7,6,7,8,3,4,5,3,2,3,0,0])
}

function keyTyped() {
	if(key == "k"){
		currPitchSet = pitchSet1;
    	kite1.loop();
    }
    if(key == "u"){
    	currPitchSet = pitchSetMinor;
    	lead.osc.setType('sawtooth')
    	umb1.loop()
    }
    if(key == "l"){
    	currPitchSet = pitchSet2;
    	bass.osc.setType('triangle')
    	mid.osc.setType('triangle')
    	lead.osc.setType('triangle')
    	el1.loop()
    }
    if(key == "c"){
    	currPitchSet = pitchSetMinor;
    	c1.loop()
    }

 }

function playKite1(){
	currPitchSet = pitchSet1;
    kite1.loop();
}

function Synth(){
 	this.osc = new p5.Oscillator();
 	this.osc.setType('triangle')
 	this.osc.amp(0)
 	this.osc.start()
 	this.env = new p5.Env()
	this.env.setADSR(0.05,0.2,0.2,0.5)
	this.octave = 1
	this.play = function(time,note){
		if(note > 0){
			this.osc.freq(currPitchSet[note-1]*this.octave)
			this.env.play(this.osc)
		}
	}
	this.createPhrase = function(part,pattern){
		var phrase = new p5.Phrase(name,this.play.bind(this),pattern)
		part.addPhrase(phrase)
	}

 }