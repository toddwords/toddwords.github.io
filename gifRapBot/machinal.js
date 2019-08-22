//shift+space to show/hide editor and run code
//key bindings
//Initalize Voice
meSpeak.loadConfig("lib/mespeak_config.json");
//choose a voice from the voice folder here
meSpeak.loadVoice('voices/en/en-us.json');
var sounds = {};
//things to loop
//hot dog, numbers, hello george h jones company, hum hum,
$(document).ready(function(){
	$('#bgvid')[0].currentTime = 16;

})
Mousetrap.bind('q', function() {
	speakNspell('marry me', "blue");
	showGif('rad.gif')
})

Mousetrap.bind('w', function() {
	speakNspell('George H. Jones', "green");
	showGif('smile.gif')
})

Mousetrap.bind('e', function() {
	speakNspell('wants to');
	showGif("blowmind.gif");
})

Mousetrap.bind('r', function() {
	speakNspell("and company");
	showGif("couch.gif");
})

Mousetrap.bind('t', function() {
	speakNspell("pretty little hands", "green");
	showGif("shaqdance.gif");
})

Mousetrap.bind('y', function() {
	speakNspell("munny", "orange");
	spell("money");
	showGif("money.gif");
})

Mousetrap.bind('u', function() {
	speakNspell("job", "purple");
	showGif("whoa.gif");
})
Mousetrap.bind('i', function() {
	speakNspell("no");
	showGif("couch.gif");
})
Mousetrap.bind('o', function() {
	speakNspell("work", "orange");
	showGif("seals.gif");
})
Mousetrap.bind('p', function() {
	speakNspell("worry");
	showGif("smile.gif");
})
Mousetrap.bind('[', function() {
	speakNspell("don't touch me", "red");
	showGif("smile.gif");
})
Mousetrap.bind(']', function() {
	speakNspell("something", "orange");
	showGif("wizard.gif");
})
Mousetrap.bind('\\', function() {
	speakNspell("somebody");
	showGif("scream.gif");
})

Mousetrap.bind('a', function() {
	speakNspell("let me alone");
	showGif("think.gif");
})
Mousetrap.bind('s', function() {
	speakNspell("i'll not submit");
	showGif("scream.gif");
})
Mousetrap.bind('d', function() {
	speakNspell("oh God");
	showGif("wink.gif");
})
Mousetrap.bind('f', function() {
	speakNspell("oh Mareee");
	spell("oh Mary");
	showGif("shaqdance.gif");
})
Mousetrap.bind('g', function() {
	speakNspell("tired");
	showGif("scream.gif");
})
Mousetrap.bind('h', function() {
	speakNspell("far");
	showGif("followYourDreams.gif");
})
Mousetrap.bind('j', function() {
	speakNspell("too", "blue");
	showGif("nod.gif");
})
Mousetrap.bind('k', function() {
	speakNspell("ennee more", "green");
	spell("any more", "green");
	showGif("sparkleLaugh.gif");
})
Mousetrap.bind('l', function() {
	speakNspell("pain");
	showGif("wave.gif");
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
	speakNspell("when I did it", "blue");
	showGif("nod.gif");
})
Mousetrap.bind('x', function() {
	speakNspell("I felt free", "green");
	showGif("dance2.gif");
})
Mousetrap.bind('c', function() {
	speakNspell("Free and not afraid", "white")
	showGif("fuckYeah.gif")
	
})

Mousetrap.bind('v', function() {
	speakNspell("I must die and go to hell", "white")
	showGif("nod.gif")

})
Mousetrap.bind('b', function() {
	speakNspell("But it made me free", "white")
	showGif("followYourDreams.gif")
})
Mousetrap.bind('n', function() {
	speakNspell("How can that be?", "white")
	showGif("followYourDreams.gif")
})
Mousetrap.bind('/', function() {
	$('#bgvid').fadeOut(10000)
	
})

Mousetrap.bind("space", function(){
	$('#bgvid')[0].play()
	$('#bgvid')[0].volume = 0;
	$('#bgvid').fadeIn(20000)
})

//The functions we'll be using

function speakNspell(str, color="white") {
	speak(str);
	$('h1').text(str);
	$('h1').css("color", "orange" )
}
function speak(str){
	if(!sounds[str]){
		console.log("adding")
		sounds[str] = meSpeak.speak(str, {variant:"f5",rawdata: "array"})
	}
	meSpeak.play(sounds[str]);
}
function spell(str, color){
	color = typeof color !== 'undefined' ?  color : "white"
	$('h1').text(str);
	$('h1').css("color", "orange");
}
function showGif(fileName){
	// $("html").css('background-image', 'url(gifs/'+fileName+')'); 
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