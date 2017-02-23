var metro, metro2;
var sawOsc, bassOsc, sqOsc1, sqOsc2, sqOsc3;
var txt = "Type or paste text into the box in the upper left corner to change sounds"
var pitchSetHira = [196,220,233.08,293.66,311.13,392,440,466.16,587.33,622.25,783.99];
var wordCounter = 0
var charCounter = 0
function preload(){
	chipFont = loadFont("ChipTunes-Bold.otf")
}
function setup(){
	createCanvas(windowWidth,windowHeight)
	//initalize oscillators
	sawOsc = new p5.SawOsc()
	sawOsc.start()
	bassOsc = new p5.SawOsc()
	bassOsc.start()
	sqOsc1 = new p5.SqrOsc()
	sqOsc2 = new p5.SqrOsc()
	sqOsc3 = new p5.SqrOsc()
	//turn text into array
	txt = txt.split(" ")
	//set metronome to play a note every 150ms
	metro = setInterval(playNote, 150)

}

function draw(){
	background(0)
	fill(0,255,0)
	textFont(chipFont)
	textAlign(CENTER)
	textSize(160)
	text(txt[wordCounter], width/4, height/16, width/2, height*0.75);	
}

function playNote(){	
	var word = txt[wordCounter]
	//on the start of a new word set the bass
	if(charCounter === 0){
		//get random letter from word
		var randomChar = Math.floor(Math.random() * word.length)
		//set bass to pitch of that letter divided by 2
		bassOsc.freq(getFreqFromChar(word[randomChar])/2)
	}
	sawOsc.freq(getFreqFromChar(word[charCounter]))
	charCounter++;
	//does a series of coin flips to add extra notes
	if(word[charCounter] && Math.random() < 0.5){
		sqOsc1.start()
		sqOsc1.freq(getFreqFromChar(word[charCounter]))
		charCounter++;
		// console.log("square 1 fire")
		if(word[charCounter] && Math.random() < 0.5){
			sqOsc2.start()
			sqOsc2.freq(getFreqFromChar(word[charCounter]))
			charCounter++
			// console.log("square 2 fire")
			if(word[charCounter] && Math.random() < 0.5){
				sqOsc3.start()
				sqOsc3.freq(getFreqFromChar(word[charCounter]))
				charCounter++
				// console.log("square 3 fire")
			} else{
				sqOsc3.stop()
			}
		} else {
			sqOsc2.stop()
			sqOsc3.stop()
		}

	} else {
		sqOsc1.stop()
		sqOsc2.stop()
		sqOsc3.stop()
	}
	//check to see if we're at the end of the word and reset the counter if so
	if(charCounter >= word.length){
		charCounter = 0;
		wordCounter++;
	}
	//set to repeat if we reach the end of the text
	if(wordCounter >= txt.length){
		wordCounter = 0;
	}
}
//gets frequency from frequency list using characters ascii value
function getFreqFromChar(char){
	return pitchSetHira[char.charCodeAt(0) % pitchSetHira.length]
}
//allows for user text input
function setNewText(newText){
	wordCounter = 0;
	charCounter = 0;
	txt = newText.trim().split(" ");
	txt = txt.filter(function(n){ return n != "" }); 

}