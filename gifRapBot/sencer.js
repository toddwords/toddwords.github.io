//shift+space to show/hide editor and run code
//key bindings
//Initalize Voice
meSpeak.loadConfig("lib/mespeak_config.json");
//choose a voice from the voice folder here
meSpeak.loadVoice('voices/en/en-us.json');
var sounds = {};


Mousetrap.bind('q', function() {
	speakNspell('some thoughts on pedagogy', "blue");
	showGif('rad.gif')
})

Mousetrap.bind('w', function() {
	speakNspell('modify first, build from scratch later', "green");
	showGif('crushSelf.gif')
})

Mousetrap.bind('e', function() {
	speakNspell('examples that illustrate what\'s possible');
	showGif("blowmind.gif");
})

Mousetrap.bind('r', function() {
	speakNspell("using technology with the goals of art");
	showGif("sparkleLaugh.gif");
})

Mousetrap.bind('t', function() {
	speakNspell("no efficiency", "red");
	showGif("no.gif");
})

Mousetrap.bind('y', function() {
	speakNspell("no scalability", "red");
	showGif("skull.gif");
})

Mousetrap.bind('u', function() {
	speakNspell("no abstraction", "red");
	showGif("skeptical.gif");
})
Mousetrap.bind('i', function() {
	speakNspell("no professionalism", "red");
	showGif("facepalm.gif");
})
Mousetrap.bind('o', function() {
	speakNspell("using technology to make things people can love", "green");
	showGif("excited.gif");
})
Mousetrap.bind('p', function() {
	speakNspell("that lighten the weight of existence");
	showGif("sadDolphin.gif");
})

Mousetrap.bind('a', function() {
	speakNspell("art is for other people", "green");
	showGif("dance2.gif");
})
Mousetrap.bind('s', function() {
	speakNspell("show it to them", "green");
	showGif("dance2.gif");
})
Mousetrap.bind('d', function() {
	speakNspell("(all projects as easily accessible websites)");
	showGif("shaqdance.gif");
})
Mousetrap.bind('f', function() {
	speakNspell("what is the project only you can make?", "blue");
	showGif("ambition.gif");
})
Mousetrap.bind('g', function() {
	speakNspell("all these things are out there, what will your practice be?", "blue");
	showGif("followYourDreams.gif");
})
Mousetrap.bind('h', function() {
	speakNspell("THANK YOU");
	showGif("wave.gif");
})
Mousetrap.bind('j', function() {
	speakNspell("boring", "blue");
	showGif("nod.gif");
})
Mousetrap.bind('k', function() {
	speakNspell("forget", "green");
	showGif("sparkleLaugh.gif");
})
Mousetrap.bind('l', function() {
	speakNspell("pain");
	showGif("wave.gif");
})
Mousetrap.bind('[', function() {
	speakNspell("I", "red");
	showGif("smile.gif");
})
Mousetrap.bind(']', function() {
	speakNspell("will", "orange");
	showGif("wizard.gif");
})
Mousetrap.bind('\\', function() {
	speakNspell("am");
	showGif("scream.gif");
})
Mousetrap.bind(';', function() {
	speakNspell("help");
	showGif("huh.gif");
})
Mousetrap.bind('\'', function() {
	speakNspell("and", "blue")
	showGif("highFive.gif")
})
Mousetrap.bind('z', function() {
	speakNspell("happy", "blue");
	showGif("nod.gif");
})
Mousetrap.bind('x', function() {
	speakNspell("birthday", "green");
	showGif("dance2.gif");
})
Mousetrap.bind('n', function() {
	speakNspell("to");
	showGif("gotcha.gif");
})
Mousetrap.bind('m', function() {
	speakNspell("be");
	showGif("seals.gif");
})
Mousetrap.bind(',', function() {
	speakNspell("want", "blue");
	showGif("excited.gif");
})
Mousetrap.bind('.', function() {
	speakNspell("or", "white")
	showGif("facepalm.gif")
})
Mousetrap.bind('/', function() {
	speakNspell("not", "white")
	showGif("skull.gif")
})
Mousetrap.bind('c', function() {
	speakNspell("like", "white")
	showGif("fuckYeah.gif")
	
})

Mousetrap.bind('v', function() {
	speakNspell("yourself", "white")
	showGif("nod.gif")

})
Mousetrap.bind('b', function() {
	speakNspell("brand", "white")
	showGif("followYourDreams.gif")
})

Mousetrap.bind('/', function() {
	speakNspell("not", "white")
	showGif("skull.gif")
})




//This is where you play your beats

Mousetrap.bind('1', function() {
	pauseAll();
	var beat = $('#beat1')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 
Mousetrap.bind('2', function() {
		pauseAll();
	var beat = $('#beat2')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 
Mousetrap.bind('3', function() {
	pauseAll();
	var beat = $('#beat3')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 
Mousetrap.bind('4', function() {
	pauseAll();
	var beat = $('#beat4')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 
Mousetrap.bind('5', function() {
	pauseAll();
	var beat = $('#beat5')[0];
	beat.volume = 1;
	playSound(beat.id);
}) 
Mousetrap.bind('6', function() {
	pauseAll();
	var beat = $('#beat6')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 
Mousetrap.bind('7', function() {
	pauseAll();
	var beat = $('#beat7')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 
Mousetrap.bind('8', function() {
	pauseAll();
	var beat = $('#beat8')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 
Mousetrap.bind('9', function() {
	pauseAll();
	var beat = $('#beat9')[0];
	beat.volume = 0.8;
	playSound(beat.id);
}) 

Mousetrap.bind('0', function() {
	pauseAll();
})

Mousetrap.bind('=', function() {
	speakNspell("THANK YOU VERY MUCH");
	showGif("wave.gif");
	pauseAll();
	playSound("applause")
}) 


//The functions we'll be using

function speakNspell(str, color="white") {
	if(!sounds[str]){
		console.log("adding")
		sounds[str] = meSpeak.speak(str, {rawdata: "array"})
	}
	meSpeak.play(sounds[str]);
	$('h1').text(str);
	$('h1').css("color", color)
}
function speak(str){
	meSpeak.speak(str, {speed:getRandomInt(50,350), pitch:getRandomInt(0,100), amplitude:600});
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



$(document).ready(function() {
	$('#butttn').click(function () {
    var val = $('#editor_js').val();
    console.log(val);
    eval(val);
})
   $.ajax({
   url : "sencer.js",
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("gifs/ambition.gif","gifs/blowmind.gif","gifs/chewie.gif","gifs/couch.gif","gifs/crushSelf.gif","gifs/dance.gif","gifs/dance2.gif","gifs/danceKid.gif","gifs/excited.gif","gifs/facepalm.gif","gifs/followYourDreams.gif","gifs/fuckYeah.gif","gifs/giflist.txt","gifs/gotcha.gif","gifs/highFive.gif","gifs/huh.gif","gifs/iheartu.gif","gifs/missionAccomplished.gif","gifs/money.gif","gifs/no.gif","gifs/nod.gif","gifs/ohBoy.gif","gifs/ohYeah.gif","gifs/party.gif","gifs/popcorn.gif","gifs/rad.gif","gifs/sadDolphin.gif","gifs/scream.gif","gifs/seals.gif","gifs/shaqdance.gif","gifs/showdown.gif","gifs/skeptical.gif","gifs/skull.gif","gifs/smile.gif","gifs/sparkleLaugh.gif","gifs/spiderHelmet.gif","gifs/sports.gif","gifs/surprise.gif","gifs/think.gif","gifs/typing.gif","gifs/want.gif","gifs/wave.gif","gifs/whoa.gif","gifs/why.gif","gifs/wink.gif","gifs/wizard.gif","gifs/wow.gif", "gifs/wrong.gif");