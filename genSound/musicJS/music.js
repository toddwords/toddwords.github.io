var pitchSets= { 
 pitchSet1 : [220, 247.5, 278.44, 293.34, 330, 371.25, 417.655, 440,495,556.88,586.67,660,742.5,835.31,880],
 pitchSet2 : [207.65, 233.08, 277.18, 311.13, 329.63,349.23,415.30,466.16, 554.37,622.25,659.25,698.46, 830.61, 932.33],
 pitchSetEnig : [174.61, 185, 220, 246.94, 277.18, 311.13, 329.63,349.23,369.99,440,493.88, 554.37,622.25,659.25,698.46, ],
 pitchSetHira : [196,220,233.08,293.66,311.13,392,440,466.16,587.33,622.25,783.99],
 pitchSetHira2 : [196,246.94,277.18,293.66,369.99,392,493.88,554.37,587.33,739.99,783.99],
 pitchSetMinor : [264.63,293.66,311.13,349.23,415.30,493.88,523.25,587.33,622.25,698.46,830.61]
}
var restString = ''
var kite1 = new p5.Part();
var umb1 = new p5.Part();
var el1 = new p5.Part();
var c1 = new p5.Part();
var currPitchSet = pitchSets.pitchSet1;
var mid = new Synth();
var lead = new Synth();
var bass = new Synth();
var currLoop;
function setup(){
	mid['kite1'] = [1,0,2,4,5,1,0,1]
	lead['kite1'] = [7,0,8,9,5,0,11,12,8]
	bass['kite1'] =  [1,0,0,0,2,0,0,3,0,0,1,0,0,0,2,0,4,0,0,0];
	mid.output = '#midText'
	lead.output = '#leadText'
	kite1.setBPM(60)
    umb1.setBPM(100)
    el1.setBPM(45)
    c1.setBPM(60)
	bass.env.setADSR(0.2,0.5,0.6,1.0)
	bass.octave = 0.5
	lead.octave = 2
	bass['umb1'] = [3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,1,0,1,0,1,0,5,1,1,0,1,0,1,0]
	lead['umb1'] = [0,0,0,0,0,0,0,0,0,0,0,6,0,8,9,11,9,0,0,8,9,11,9,0,0,0,0,0,0,0,0,0,0,0]
	mid['umb1'] = [0,3,0,3,0,3,3,3,0,4,0,4,0,4,4,4,0,5,0,5,0,5,5,5]
	bass['el1'] = [1,0,2,0,3,0,6,0]
	// lead.createPhrase(el1, [0,0,10,0,0,10,10,0,0,0,0,0,6,10,11,0,0,10,0,0,0,10])
	mid['el1'] = [0]
	// mid['el1'] = [6,0,0,0,0,0,0,0,6,0,0,0,0,0,0,6]
	lead['el1'] = [0]
	playBasic(200)
}


function playTrack(trackName, fadeInTime){
	var trackSettings = {"kite1": {time:250,pitchSet:pitchSet1, v:0.6}, "umb1": {time:150, pitchSet:pitchSetMinor, v:0.6},"el1": {time:335, pitchSet:pitchSet2, v:0.3}}
	masterVolume(trackSettings[trackName].v,fadeInTime)
	currPitchSet = trackSettings[trackName].pitchSet
	clearInterval(currLoop)
	resetCounters();
	currLoop = setInterval(function(){
    	mid.play(trackName)
    	lead.play(trackName)
    	bass.play(trackName)
    },trackSettings[trackName].time)
}
function playBasic(speed){
	clearInterval(currLoop)
	resetCounters();
	currLoop = setInterval(function(){
    	mid.play('basic')
    	lead.play('basic')
    	bass.play('basic')
    },speed)
}
function fadeOut(time){
	masterVolume(0,time)
	setTimeout(function(){clearInterval(currLoop)},time * 1000)
}
function Synth(){
 	this.osc = new p5.Oscillator();
 	this.osc.setType('triangle')
 	this.osc.amp(0)
 	this.osc.start()
 	this.env = new p5.Env()
	this.env.setADSR(0.05,0.2,0.2,0.5)
	this.octave = 1
	this.counter = 0
	this.basic = [0]
	this.currWord = ""
	this.output = "#bassText"
	this.play = function(trackName){
		note = this[trackName][this.counter % this[trackName].length]
		console.log(note)
		if(this.counter % this[trackName].length == 0){this.currWord = ''}
		if(restString.indexOf(note) > -1){if(note === ' '){this.currWord += note}note = 0}
		if(isNaN(note) || note === ' '){this.currWord += note; note = 1 + note.charCodeAt(0) % currPitchSet.length; }
		$(this.output).text(this.currWord)
		if(note > 0){
			this.osc.freq(currPitchSet[note-1]*this.octave)
			this.env.play(this.osc)
		}
		this.counter++;
	}
	this.createPhrase = function(part,pattern){
		var name = Math.floor(Math.random() * 9999)
		name = name.toString()
		console.log(pattern)
		var phrase = new p5.Phrase(name,this.play.bind(this),pattern)
		part.addPhrase(phrase)
	}

 }

 function resetCounters(){
 	mid.counter = 0;
 	lead.counter = 0;
 	bass.counter = 0;
 }
  function changePitchSet(ps){
 	currPitchSet = pitchSets[ps]
 }

 $('#bass').keyup(function(){
 	bass.basic = $(this).val().trim().split('')
 	bass.counter = 0
 })
 $('#mid').keyup(function(){
 	mid.basic = $(this).val().trim().split('')
 	mid.counter = 0
 })
 $('#lead').keyup(function(){
 	lead.basic = $(this).val().trim().split('')
 	lead.counter = 0
 })
 $('#rest').keyup(function(){
 	restString = $(this).val().trim()
 	$('#restText').text(restString)
 })
 $('#speed').keyup(function(){
 	if($(this).val().length >= 2){playBasic($(this).val())}
 })
