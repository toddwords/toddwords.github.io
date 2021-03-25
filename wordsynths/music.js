var pitchSets= { 
 pitchSet1 : [220, 247.5, 278.44, 293.34, 330, 371.25, 417.655, 440,495,556.88,586.67,660],
 // pitchSet1 : [220, 247.5, 278.44, 293.34, 330, 371.25, 417.655, 440,495,556.88,586.67,660,742.5,835.31,880],
 pitchSet2 : [207.65, 233.08, 277.18, 311.13, 329.63,349.23,415.30,466.16, 554.37,622.25,659.25,698.46],
 pitchSetEnig : [174.61, 185, 220, 246.94, 277.18, 311.13, 329.63,349.23,369.99,440,493.88, 554.37,622.25,659.25,698.46, ],
 pitchSetHira : [196,220,233.08,293.66,311.13,392,440,466.16,587.33,622.25,783.99],
 pitchSetHira2 : [196,246.94,277.18,293.66,369.99,392,493.88,554.37,587.33,739.99,783.99],
 pitchSetMinor : [264.63,293.66,311.13,349.23,415.30,493.88,523.25,587.33,622.25,698.46]
}
var restString = ''
var currInput = 0
// var kite1 = new p5.Part();
// var umb1 = new p5.Part();
// var el1 = new p5.Part();
// var c1 = new p5.Part();
var currPitchSet = pitchSets.pitchSet1;
let mid,lead,bass,reverb;

var currLoop;
var revLength = 6;
var revAmt = 1.5;
var reverbOn = false;
var loopSpeed = 200
var bassADSR = [0.2,0.5,0.6,1.0]
var ADSR = [0.05,0.2,0.2,0.5]
function setup(){
	mid = new Synth();
	lead = new Synth();
	bass = new Synth();
	mid.output = '#midText'
	lead.output = '#leadText'

	bass.env.setADSR(0.2,0.5,0.6,1.0)
	bass.octave = 0.5
	lead.octave = 2


	reverb = new p5.Reverb()

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
	// resetCounters();
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
 	this.env = new p5.Envelope()
	this.env.setADSR(ADSR[0],ADSR[1],ADSR[2],ADSR[3])
	this.env.setRange(1.0,0.0)
	this.octave = 1
	this.counter = 0
	this.basic = [0]
	this.currWord = ""
	this.output = "#bassText"
	this.play = function(trackName){
		note = this[trackName][this.counter % this[trackName].length]
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
function changeBGColor(color){
	$('html').css('background-color', color)
	// $('input').css('background-color', color)
}
 $('#bass').keyup(function(){
 	if($(this).val().trim().length > 0){
	 	bass.basic = $(this).val().trim().split('')
	 	bass.osc.amp(1)
 	}else{
 		bass.basic = [0]
 	}
 	bass.counter = 0
 })
 $('#mid').keyup(function(){
 	if($(this).val().trim().length > 0){
 		mid.basic = $(this).val().trim().split('')
		//mid.osc.amp(0.5)
 	}else{
 		mid.basic = [0]
 	}
 	mid.counter = 0
 })
 $('#lead').keyup(function(){
 	if($(this).val().trim().length > 0){
 		lead.basic = $(this).val().trim().split('')
 	} else{
 		lead.basic = [0]
 	}
 	lead.counter = 0
 })
 $('#rest').keyup(function(){
 	restString = $(this).val().trim()
 	$('#restText').text(restString)
 })
 $('#speed').keyup(function(){
 	if($(this).val().length >= 2){playBasic($(this).val())}
 })
 $('input').focus(function(){
  var that = this;
  setTimeout(function(){ that.selectionStart = that.selectionEnd = 10000; }, 0);
});
function keyPressed(){
	if(!currLoop){
		playBasic(loopSpeed)
	}
	getAudioContext().resume();
	if(keyCode == UP_ARROW){
		if(currInput > 0){currInput--}
		$('input')[currInput].focus()
	}
	else if(keyCode == DOWN_ARROW || keyCode == ENTER || keyCode == TAB){
		if(currInput < 3){currInput++}
		else{currInput=0}
		$('input')[currInput].focus()
		return false
	}

	else if(keyIsDown(SHIFT) && keyIsDown(CONTROL)){
		console.log("test");
		if(key == '!'){
			console.log("test1");
			changePitchSet('pitchSet1')
			changeBGColor('White')
		}
		else if(key == '@'){
			changePitchSet('pitchSet2')
			changeBGColor('LightSkyBlue')
		}
		else if(key == '#'){
			changePitchSet('pitchSetMinor')
			changeBGColor('DarkGray')
		}
		else if(key == '$'){
			changePitchSet('pitchSetEnig')
			changeBGColor('Plum')
		}
		else if(key == '%'){
			changePitchSet('pitchSetHira')
			changeBGColor('LightSalmon')
		}
		else if(key == '^'){
			changePitchSet('pitchSetHira2')
			changeBGColor('LightPink')
		}
		else if(key == '&'){
			if(!reverbOn){
				reverb.connect()
				reverb.process(bass.osc, revLength, revAmt)
				reverb.process(mid.osc, revLength, revAmt)
				reverb.process(lead.osc, revLength, revAmt)
				reverbOn = true;
				changeLoopSpeed(2.25)
				changeADSR(8)
				$('#cover').fadeIn()

			} else {
				reverb.disconnect();
				reverbOn= false;
				changeLoopSpeed(1/2.25);
				changeADSR(1/8);
				$('#cover').fadeOut()

			}
			

		}
		else if(key == '*'){
			changeADSR(1.5);
			changeLoopSpeed(1.08);

			console.log(loopSpeed)
		}
		else if(key == '('){
			changeADSR(1/1.5)
			changeLoopSpeed(1/1.08);
			console.log(loopSpeed)
		}
		else if(key == ')'){
			bass.counter = 0;
			mid.counter = 0;
			lead.counter = 0;
		}
	}
}
function changeLoopSpeed(amt){
	loopSpeed *= amt
	playBasic(loopSpeed)
}
function changeADSR(amt){
	ADSR = ADSR.map(x => x * amt)
	bassADSR = bassADSR.map(x => x * amt)
	bass.env.setADSR(bassADSR[0],bassADSR[1],bassADSR[2],bassADSR[3])
	mid.env.setADSR(ADSR[0],ADSR[1],ADSR[2],ADSR[3])
	lead.env.setADSR(ADSR[0],ADSR[1],ADSR[2],ADSR[3])
}

function mouseClicked(){

}