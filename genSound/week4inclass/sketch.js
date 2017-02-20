var metro, metro2;
var triOsc;
var notes = [57,60,62,64,67,69];
var randMidiBass;
var changeBass = false;
function preload(){

}

function setup(){
	metro = setInterval(metroOutput,100)
	metro2 = setInterval(metroOutput2,5000)
	triOsc = new p5.TriOsc();
	// triOsc.start()
	triOsc.pan(-1)
	triOsc2 = new p5.TriOsc();
	// triOsc2.start()
	triOsc2.pan(1)
	bassOsc = new p5.TriOsc(midiToFreq(57));
	bassOsc.start()
}

function draw(){
	bassOsc.pan(sin(TWO_PI/100000 * millis()))
}

function metroOutput(){
	var randMidi = notes[Math.floor(random(6))]
	var freq = midiToFreq(randMidi)
	triOsc.freq(freq)
	var randMidi2 = notes[Math.floor(random(6))]
	var freq2 = midiToFreq(randMidi2)
	triOsc2.freq(freq2)
	randMidiBass = notes[Math.floor(random(6))]
	var freqBass = midiToFreq(randMidiBass - 12)
	if(changeBass){bassOsc.freq(freqBass)}
}

function metroOutput2(){
	changeBass = true
	setTimeout(function(){changeBass = false}, random(150,500))
}

