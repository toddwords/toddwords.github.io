//shift+space to show/hide editor and run code
//key bindings

var sounds = {};
Mousetrap.bind('q', function() {
	speakNspell('nathaniel', "blue");
	showGif('rad.gif')
})

Mousetrap.bind('w', function() {
	speakNspell('the sewer boy', "green");
	showGif('sewerboy.gif')
})

Mousetrap.bind('e', function() {
	speakNspell('is wretched');
	showGif("facepalm.gif");
})

Mousetrap.bind('r', function() {
	speakNspell("so wretched");
	showGif("sadDolphin.gif");
})

Mousetrap.bind('t', function() {
	speakNspell("but pleased", "green");
	showGif("smile.gif");
})

Mousetrap.bind('y', function() {
	speakNspell("to make", "orange");
	showGif("seals.gif");
})

Mousetrap.bind('u', function() {
	speakNspell("your acquaintance", "purple");
	showGif("shaqdance.gif");
})
Mousetrap.bind('i', function() {
	speakNspell("he has heard");
	showGif("showdown.gif");
})
Mousetrap.bind('o', function() {
	speakNspell("about", "orange");
	showGif("nod.gif");
})
Mousetrap.bind('p', function() {
	speakNspell("the unpaid internship", "orange");
	showGif("money.gif");
})
Mousetrap.bind('[', function() {
	speakNspell("in your office");
	showGif("typing.gif");
})

Mousetrap.bind(']', function() {
	speakNspell("and would like");
	showGif("smile.gif");
})
Mousetrap.bind('\\', function() {
	speakNspell("to offer his services","blue");
	showGif("excited.gif");
})
Mousetrap.bind('a', function() {
	speakNspell("his eyes are all pupil");
	showGif("wink.gif");
})
Mousetrap.bind('s', function() {
	speakNspell("like little black craters");
	showGif("crushSelf.gif");
})
Mousetrap.bind('d', function() {
	speakNspell("and looking at him");
	showGif("scream.gif");
})
Mousetrap.bind('f', function() {
	speakNspell("fills you with sorrow");
	showGif("skull.gif");
})
Mousetrap.bind('g', function() {
	speakNspell("and disgust", "blue");
	showGif("nod.gif");
})
Mousetrap.bind('h', function() {
	speakNspell("there is nothing you can do", "green");
	showGif("sparkleLaugh.gif");
})
Mousetrap.bind('j', function() {
	speakNspell("but give him a job");
	showGif("followYourDreams.gif");
})
Mousetrap.bind('k', function() {
	speakNspell("that's not even a job", "red");
	showGif("no.gif");
})
Mousetrap.bind('l', function() {
	speakNspell("and try to get his transportation covered", "orange");
	showGif("wizard.gif");
})
Mousetrap.bind('z', function() {
	speakNspell("when he thanks you");
	showGif("scream.gif");
})
Mousetrap.bind('x', function() {
	speakNspell("his breath smells like rooms where people have died");
	showGif("huh.gif");
})
Mousetrap.bind('c', function() {
	speakNspell("it is good to have someone on your team", "blue");
	showGif("highFive.gif");
})
Mousetrap.bind('v', function() {
	speakNspell("it is good to have an ally", "green");
	showGif("dance2.gif");
})
Mousetrap.bind('b', function() {
	speakNspell("as the gears");
	showGif("crushSelf.gif");
})
Mousetrap.bind('n', function() {
	speakNspell("continue");
	showGif("seals.gif");
})
Mousetrap.bind('m', function() {
	speakNspell("to grind", "blue");
	showGif("gotcha.gif");
})
Mousetrap.bind('0', function() {
	playSound("clap")
	
})

Mousetrap.bind('-', function() {
	playSound("scratch")

})
Mousetrap.bind('=', function() {
	playSound("bassDrum")
})

Mousetrap.bind('/', function() {
	setBGColor("white");
	spell("REMIX!", "blue")
	playSound("remix");
})




//This is where you play your beats

// Mousetrap.bind('1', function() {
// 	pauseAll();
// 	var beat = $('#beat1')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 
// Mousetrap.bind('2', function() {
// 	pauseAll();
// 	var beat = $('#beat2')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 
// Mousetrap.bind('3', function() {
// 	pauseAll();
// 	var beat = $('#beat3')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 
// Mousetrap.bind('4', function() {
// 	pauseAll();
// 	var beat = $('#beat4')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 
// Mousetrap.bind('5', function() {
// 	pauseAll();
// 	var beat = $('#beat5')[0];
// 	beat.volume = 1;
// 	beat.play();
// }) 
// Mousetrap.bind('6', function() {
// 	pauseAll();
// 	var beat = $('#beat6')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 
// Mousetrap.bind('7', function() {
// 	pauseAll();
// 	var beat = $('#beat7')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 
// Mousetrap.bind('8', function() {
// 	pauseAll();
// 	var beat = $('#beat8')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 
// Mousetrap.bind('9', function() {
// 	pauseAll();
// 	var beat = $('#beat9')[0];
// 	beat.volume = 0.8;
// 	beat.play();
// }) 

// Mousetrap.bind('0', function() {
// 	pauseAll();
// })

// Mousetrap.bind('=', function() {
// 	speakNspell("THANK YOU VERY MUCH");
// 	showGif("wave.gif");
// 	pauseAll();
// 	playSound("applause")
// }) 


//The functions we'll be using

function speakNspell(str, color="white") {
	console.log("stopping?")
	meSpeak.stop()
	if(!sounds[str]){
		console.log("adding")
		sounds[str] = meSpeak.speak(str, {rawdata: "array"})
	}
	meSpeak.play(sounds[str]);
	$('h1').text(str);
	$('h1').css("color", color)
}
function speak(str){
	meSpeak.speak(str, {speed:175, amplitude:600});
}
function spell(str, color){
	color = typeof color !== 'undefined' ?  color : "white"
	$('h1').text(str);
	$('h1').css("color", color);
}
function showGif(fileName){
	$("html").css('background-image', 'url(gifs/'+fileName+')'); 
}

function setBGColor(color){
	$("html").css('background-color', color); 
	$("html").css('background-image', 'url()'); 

}

function pauseAll(){
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
}

var playSound = function(id) {
    sound = $("#" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
//Initalize Voice
meSpeak.loadConfig("lib/mespeak_config.json");
//choose a voice from the voice folder here
meSpeak.loadVoice('voices/en/en-us.json');

//in-browser editor

$(document).ready(function() {
	$('#butttn').click(function () {
    var val = $('#editor_js').val();
    console.log(val);
    eval(val);
})
   $.ajax({
   url : "nathaniel.js",
   dataType: "text",
   success : function (data) {
       $("#editor_js").text(data);
          }
})
})

Mousetrap.bind('shift+r', function () {
    var val = $('#editor_js').val();
    console.log(val);
    eval(val);
})
Mousetrap.bindGlobal('shift+space', function () {
    var val = $('#editor_js').val();
    eval(val);
    $('#editorDiv').fadeToggle();
	$('#gifList').fadeToggle();
    $('h1').text("");
    $('html').focus();
    return false;
})
Mousetrap.bind('shift+e', function() {
	$('#editorDiv').fadeToggle();
})
Mousetrap.bind('shift+g', function() {
	$('#gifList').fadeToggle();
})