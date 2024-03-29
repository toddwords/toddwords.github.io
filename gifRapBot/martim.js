//shift+space to show/hide editor and run code
//key bindings
//Initalize Voice
meSpeak.loadConfig("lib/mespeak_config.json");
//choose a voice from the voice folder here
meSpeak.loadVoice('voices/en/en-us.json');
var sounds = {};


Mousetrap.bind('q', function() {
	speakNspell('let', "blue");
	showGif('rad.gif')
})

Mousetrap.bind('w', function() {
	speakNspell('me', "green");
	showGif('smile.gif')
})

Mousetrap.bind('e', function() {
	speakNspell('tell');
	showGif("blowmind.gif");
})

Mousetrap.bind('r', function() {
	speakNspell("you");
	showGif("couch.gif");
})

Mousetrap.bind('t', function() {
	speakNspell("a", "green");
	showGif("shaqdance.gif");
})

Mousetrap.bind('y', function() {
	speakNspell("secret", "orange");
	showGif("money.gif");
})

Mousetrap.bind('u', function() {
	speakNspell("about", "purple");
	showGif("whoa.gif");
})
Mousetrap.bind('i', function() {
	speakNspell("your");
	showGif("couch.gif");
})
Mousetrap.bind('o', function() {
	speakNspell("dad", "orange");
	showGif("seals.gif");
})
Mousetrap.bind('p', function() {
	speakNspell("my");
	showGif("smile.gif");
})

Mousetrap.bind('a', function() {
	speakNspell("what");
	showGif("think.gif");
})
Mousetrap.bind('s', function() {
	speakNspell("are");
	showGif("scream.gif");
})
Mousetrap.bind('d', function() {
	speakNspell("afraid");
	showGif("wink.gif");
})
Mousetrap.bind('f', function() {
	speakNspell("of");
	showGif("shaqdance.gif");
})
Mousetrap.bind('g', function() {
	speakNspell("is");
	showGif("scream.gif");
})
Mousetrap.bind('h', function() {
	speakNspell("life");
	showGif("followYourDreams.gif");
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


Mousetrap.bind('1', function() {
	speakNspell("buy", "white")
	showGif("money.gif")
}) 
Mousetrap.bind('2', function() {
	spell("Martim", "white")
	speak("Marteam")
	showGif("ambition.gif")
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


//in-browser editor

// $(document).ready(function() {
// 	$('#butttn').click(function () {
//     var val = $('#editor_js').val();
//     console.log(val);
//     eval(val);
// })
//    $.ajax({
//    url : "beabrand.js",
//    dataType: "text",
//    success : function (data) {
//        $("#editor_js").text(data);
//           }
// })
// })

// Mousetrap.bind('shift+r', function () {
//     var val = $('#editor_js').val();
//     console.log(val);
//     eval(val);
// })
// Mousetrap.bindGlobal('shift+space', function () {
//     var val = $('#editor_js').val();
//     eval(val);
//     $('#editorDiv').fadeToggle();
// 	$('#gifList').fadeToggle();
//     $('h1').text("");
//     $('html').focus();
//     return false;
// })
// Mousetrap.bind('shift+e', function() {
// 	$('#editorDiv').fadeToggle();
// })
// Mousetrap.bind('shift+g', function() {
// 	$('#gifList').fadeToggle();
// })

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}