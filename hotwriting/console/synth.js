var env = new p5.Env(0.2, 0.3, 0.7, 0.1, 0.2, 0.1, 0.5);
var env2 = new p5.Env(0.2, 0.1, 0.7, 0.05, 0.2, 0.05, 0.55);
var env3 = new p5.Env(0.2, 0.1, 0.7, 0.05, 0.2, 0.05, 0.6);
var env4 = new p5.Env(0.2, 0.1, 0.7, 0.05, 0.2, 0.05, 0.7);
var moveEnv = new p5.Env(0.1, 0.05, 0.3, 0.03, 0.2, 0.03, 1.5);
var triOsc = new p5.Oscillator('triangle');
var triOsc2 = new p5.Oscillator('triangle');
var triOsc3 = new p5.Oscillator('triangle');
var squOsc4 = new p5.Oscillator('square');
var pitches;
var pitchSet1 = [220, 247.5, 278.44, 293.34, 330, 371.25, 417.655, 440,495,556.88,586.67,660,742.5,835.31,880];
var pitchSet2 = [103.83,116.54,138.59,155.56,164.81,174.61,207.65, 233.08, 277.18, 311.13, 329.63,349.23,415.30,466.16, 554.37,622.25,659.25,698.46, 830.61, 932.33];
var pitchSet2Low = [58.27,69.30,77.78,87.31,103.83,116.54,138.59,155.56,164.81,174.61,207.65,233.08];
var pitchSet2Mid = [233.08, 277.18, 311.13, 329.63,349.23,415.30,466.16, 554.37,622.25,659.25,698.46, 830.61, 932.33,];
var pitchSet2High = [659.25,698.46, 830.61, 932.33, 1108.73, 1244.51, 1318.51, 1396.91,1661.22,1864.66];
var pitchSetEnig = [87.31,82.50,110,123.47,138.59,155.56,164.81,174.61, 185, 220, 246.94, 277.18, 311.13, 329.63,349.23,369.99,440,493.88, 554.37,622.25,659.25,698.46, ];
var pitchSetHira = [98,110,116.54,146.83,155.56,196,220,233.08,293.66,311.13,392,440,466.16,587.33,622.25,783.99];
var pitchSetHira2 = [98,123.47,138.59,146.83,185,196,246.94,277.18,293.66,369.99,392,493.88,554.37,587.33,739.99,783.99];
var pitchSetMinor = [130.81,146.83,155.56,174.61,207.65,246.94,264.63,293.66,311.13,349.23,415.30,493.88,523.25,587.33,622.25,698.46,830.61];


var synthOn = true;
function setup(){
	triOsc.amp(env);
	triOsc.start();
	triOsc2.amp(env2);
	triOsc2.start();
	triOsc3.amp(env3);
	triOsc3.start();
	squOsc4.amp(env4);
	squOsc4.start();
	pitches = pitchSet1;
	masterVolume(0.35);
}

function playNote(key) {
	note = key % pitches.length;
	if(Math.random() < 0.18){playChord(note)}
	else{
		triOsc.freq(pitches[note]);
		env.play(noise);		
	}

}

function playChord(note) {
	triOsc.freq(pitches[note]);
	if(note + 2 <= pitches.length - 1){triOsc2.freq(pitches[note + 2])}
	if(note + 4 <= pitches.length - 1){triOsc3.freq(pitches[note + 4])}
	if(note + 5 <= pitches.length - 1){squOsc4.freq(pitches[note + 5])}
	env.play(noise);
	env2.play(noise);
	env3.play(noise);
	env4.play(noise);
}

function toggleSynth(){
	if(synthOn){
		triOsc.stop();
		triOsc2.stop();
		triOsc3.stop();
		squOsc4.stop();
		synthOn = false;	
	} else{
		triOsc.start();
		triOsc2.start();
		triOsc3.start();
		squOsc4.start();	
		synthOn = true;	
	}
}