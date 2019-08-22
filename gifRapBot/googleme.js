//shift+space to show/hide editor and run code
//key bindings

var sounds = {}
Mousetrap.bind('q', function() {
	speakNspell('google', "blue");
	showGif('googleSearch.gif')
})

Mousetrap.bind('w', function() {
	speakNspell('me', "green");
	showGif('smile.gif')
})

Mousetrap.bind('e', function() {
	speakNspell('find out some shit');
	showGif("blowmind.gif");
})

Mousetrap.bind('r', function() {
	speakNspell("about");
	showGif("couch.gif");
})

Mousetrap.bind('t', function() {
	speakNspell("it's free", "green");
	showGif("shaqdance.gif");
})

Mousetrap.bind('y', function() {
	speakNspell("get your news", "orange");
	showGif("money.gif");
})

Mousetrap.bind('u', function() {
	speakNspell("from", "purple");
	showGif("whoa.gif");
})
Mousetrap.bind('i', function() {
	speakNspell("just");
	showGif("couch.gif");
})
Mousetrap.bind('o', function() {
	speakNspell("find my livejournal", "orange");
	showGif("seals.gif");
})
Mousetrap.bind('p', function() {
	speakNspell("if you can");
	showGif("smile.gif");
})
Mousetrap.bind('[', function() {
	speakNspell("2006 is hard to remember", "red");
	showGif("smile.gif");
})
Mousetrap.bind(']', function() {
	speakNspell("for", "orange");
	showGif("wizard.gif");
})
Mousetrap.bind('\\', function() {

	speakNspellFast("except for your data which is sold to advertisers");
	showGif("scream.gif");
})
Mousetrap.bind('a', function() {
	speakNspell("but not");
	showGif("think.gif");
})
Mousetrap.bind('s', function() {
	speakNspell("so");
	showGif("scream.gif");
})
Mousetrap.bind('d', function() {
	speakNspell("image search me", "purple");
	showGif("googleImageSearch.gif");
})
Mousetrap.bind('f', function() {
	speakNspell("find my private pictures");
	showGif("shaqdance.gif");
})
Mousetrap.bind('g', function() {
	speakNspell("be a power user");
	showGif("scream.gif");
})
Mousetrap.bind('h', function() {
	speakNspell("filetype: jpeg");
	showGif("followYourDreams.gif");
})
Mousetrap.bind('j', function() {
	speakNspell("filetype: png", "blue");
	showGif("nod.gif");
})
Mousetrap.bind('k', function() {
	speakNspell("filetype: tiff", "green");
	showGif("sparkleLaugh.gif");
})
Mousetrap.bind('l', function() {
	speakNspell("filetype: mp4");
	showGif("wave.gif");
})

Mousetrap.bind(';', function() {
	speakNspell("filetype: bmp");
	showGif("huh.gif");
})
Mousetrap.bind('\'', function() {
	speakNspell("look closer", "blue")
	showGif("highFive.gif")
})
Mousetrap.bind('z', function() {
	speakNspell("get larger", "blue");
	showGif("nod.gif");
})
Mousetrap.bind('x', function() {
	speakNspell("large images only", "green");
	showGif("dance2.gif");
})
Mousetrap.bind('c', function() {
	speakNspell("animated");
	showGif("gotcha.gif");
})
Mousetrap.bind('v', function() {
	speakNspell("animate me");
	showGif("seals.gif");
})
Mousetrap.bind('b', function() {
	speakNspell("you don't need the real one", "blue");
	showGif("excited.gif");
})
Mousetrap.bind('n', function() {
	speakNspell("you can just", "white")
	showGif("facepalm.gif")
})
Mousetrap.bind('/', function() {
	speakNspell("not", "white")
	showGif("skull.gif")
})







//This is where you play your beats

Mousetrap.bind('1', function() {
	speakNspell("buy", "white")
	showGif("money.gif")
}) 
Mousetrap.bind('2', function() {
	speakNspell("Martim", "white")
	showGif("ambition.gif")
}) 
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
		sounds[str] = meSpeak.speak(str, {pitch:15, rawdata: "array"})
	}
	meSpeak.play(sounds[str]);
	$('h1').text(str);
	$('h1').css("color", color)
}
function speakNspellFast(str, color) {
	color = typeof color !== 'undefined' ?  color : "white"
	meSpeak.speak(str, {speed:350, pitch:80, amplitude:50});
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
   url : "googleme.js",
   dataType: "text",
   success : function (data) {
       $("#editor_js").text(data);
          }
})
})

// Mousetrap.bind('shift+r', function () {
//     var val = $('#editor_js').val();
//     console.log(val);
//     eval(val);
// })
Mousetrap.bindGlobal('shift+space', function () {
    var val = $('#editor_js').val();
    eval(val);
    $('#editorDiv').fadeToggle();
	$('#gifList').fadeToggle();
    $('h1').text("");
    $('html').focus();
    return false;
})
// Mousetrap.bind('shift+e', function() {
// 	$('#editorDiv').fadeToggle();
// })
// Mousetrap.bind('shift+g', function() {
// 	$('#gifList').fadeToggle();
// })