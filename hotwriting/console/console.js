var vpauseTimer;
var tpauseTimer;
var confessionTimer;
var mode = {
    synth: true,
    track: false,
    video: false,
    typewriter:false,
    replace:false,
    speech:false,
    confession:false,
}
var audioTrackId = "alfonso"
var ta;
var track;
var counter = 0;
var vidSrc;
var playType = false;
var muteVideo = false;
var startTime = 0;
//replace mode vars
var replaceText;
var speechStrings = [];
var speechLoop;
var endChars = "\n.!?,"
var endCharsRegex = /[\n.!\?,]+/
var params = {onend: speechEndCallback}
var speed = 2;
var confessionText;
var confess = true;
var showConfession = false;
var avertTimer = 0;
window.onload = function() {
    ta = document.getElementById("textEnter");
    track = document.getElementById(audioTrackId);
    // vidSrc = $('#tubular-player').attr('src');
    document.onkeypress = function(e) {
        if(mode.synth){
            playNote(e.which)
        }
        if(mode.track){
            if(track.paused){track.play()}
            clearTimeout(tpauseTimer);
            tpauseTimer = setTimeout(function(){track.pause()}, 500)
        }
        if (mode.video){
            if(playType){
                if(player.getPlayerState() != 1){player.playVideo()}
                clearTimeout(vpauseTimer);
                vpauseTimer = setTimeout(function(){player.pauseVideo()}, 500)
            }
        }
        if (mode.typewriter){
            if(e.which == 13){
                playSound("typewriterEnter")
            }
            if(e.which == 8){
                return false;
            }
            else{
                playSound('typewriterKey')
            }
        }
        if(mode.replace){
            for(var i=0; i<speed; i++){
                ta.value += replaceText.charAt(counter);
                if(mode.speech && endChars.indexOf(replaceText.charAt(counter)) != -1 && endChars.indexOf(replaceText.charAt(counter-1)) == -1){
                    var index = ta.value.split(endCharsRegex).length-2;
                    // replaceText.charAt(counter) == "\n" ? index++ : true;
                    if(responsiveVoice.isPlaying()){
                        speechStrings.push(ta.value.split(endCharsRegex)[index]);
                        console.log(speechStrings)
                    } else{
                        // responsiveVoice.speak(ta.value.split(endCharsRegex)[ta.value.split(endCharsRegex).length-2]);
                        responsiveVoice.speak(ta.value.split(endCharsRegex)[index], "Brazilian Portuguese Female", params);
                    }
                }
                counter++;
                ta.scrollTop = ta.scrollHeight;
                if(counter > replaceText.length){
                    counter = 0;
                    mode.replace = false;
                }
            }
            return false;
        }
        if(mode.speech){

        }
        if(mode.confession){
            clearTimeout(confessionTimer);
            // clearInterval(multiWordInterval);
            confessionTimer = setTimeout(sayNextWord, 500);
            if(avertTimer == 0){avertTimer = setTimeout(confessionAverted, getRandomInt(150,180) * 1000);}
        }
    }
}

$().ready(function(){
    $('#vidWrapper').tubular({videoId: 'QRbvNL1PHKg', mute: false});
    $('input.fonts').fontselect({
      style: 'font-select',
      placeholder: 'Select a font',
      lookahead: 5
    }).change(function(){
        var font = $(this).val().replace(/\+/g, ' ');
        $('textarea').css('font-family',font);
    });

})
Mousetrap.bindGlobal("enter", function(){
    if(mode.speech){
        if(ta.value.split("\n").pop() != ""){
            responsiveVoice.speak(ta.value.split("\n").pop(), "Brazilian Portuguese Female")
        }
    }
})
Mousetrap.bindGlobal("alt+v", function(){
    // clearMode();
    if(!mode.video){
        setVideoMode()
    } else {
        clearVideoMode()
    }
    return false
})
Mousetrap.bindGlobal("alt+shift+v", function(){
    playType = !playType;
    clearTimeout(vpauseTimer);
    if(!playType){player.playVideo()}
})

Mousetrap.bindGlobal("alt+s", function(){
    // clearMode();
    mode.synth = !mode.synth
    return false
})
Mousetrap.bindGlobal("alt+t", function(){
    // clearMode();
    mode.track = !mode.track;
    return false
})
Mousetrap.bindGlobal("alt+y", function(){
    // clearMode();
    mode.typewriter = !mode.typewriter;
    return false
})
Mousetrap.bindGlobal("alt+p", function(){
    // clearMode();
    mode.speech = !mode.speech
    // speechLoop = setInterval(speakAndClear, 5000)
    return false
})
Mousetrap.bindGlobal("alt+r", function(){
    mode.replace = !mode.replace;
    counter = 0;
    replaceText = "O, reason not the need! Our basest beggars\nAre in the poorest thing superfluous.\nAllow not nature more than nature needs,\nMan’s life is cheap as beast’s. Thou art a lady:'\n'If only to go warm were gorgeous,\nWhy, nature needs not what thou gorgeous wear’st\nWhich scarcely keeps thee warm. But, for true need-\nYou heavens, give me that patience, patience I need!\nYou see me here, you gods, a poor old man,\nAs full of grief as age; wretched in both.\nIf it be you that stirs these daughters’ hearts\nAgainst their father, fool me not so much\nTo bear it tamely; touch me with noble anger,\nAnd let not women’s weapons, water drops,\nStain my man’s cheeks! No, you unnatural hags!\nI will have such revenges on you both\nThat all the world shall- I will do such things-\nWhat they are yet, I know not; but they shall be\nThe terrors of the earth! You think I’ll weep.\nNo, I’ll not weep.\nI have full cause of weeping, but this heart\nShall break into a hundred thousand flaws\nOr ere I’ll weep. O fool, I shall go mad!"
    return false
})
Mousetrap.bindGlobal("alt+c", function(){
    // clearMode();
    mode.confession = !mode.confession;
    mode.track = !mode.track;
    confessionText = "Todd's main credit card is an american express, the number is 3 7 9 7 1 9 7 5 0 5 0 2 0 3 4 -Exp.- 0 3 2 9 -CVV- 6 4 4 1 Fuck My Life"
    confessionText = confessionText.split(" ");
    return false
})

// Mousetrap.bindGlobal("alt+\\", function(){clearMode()})
Mousetrap.bindGlobal("alt+o", function(){
    $('#colorOptions').fadeToggle();
    return false
})
Mousetrap.bindGlobal("alt+m", function(){
    $('#muteBG')[0].checked = !$('#muteBG')[0].checked;
    setMuteVideo($('#muteBG')[0].checked);
})
Mousetrap.bindGlobal("ctrl+alt+s", function(){
    saveTextAsFile();
    return false;
})
Mousetrap.bindGlobal("alt+shift+1", function(){
    mode.synth = true
    pitches = pitchSet1;
})
Mousetrap.bindGlobal("alt+shift+2", function(){
    mode.synth = true
    pitches = pitchSetBlues;
})
Mousetrap.bindGlobal("alt+shift+3", function(){
    mode.synth = true
    pitches = pitchSetEnig;
})
Mousetrap.bindGlobal("alt+shift+4", function(){
    mode.synth = true
    pitches = pitchSetHira;
})
Mousetrap.bindGlobal("alt+shift+5", function(){
    mode.synth = true
    pitches = pitchSetMinor;
})
Mousetrap.bindGlobal("alt+1", function(){
    setVideoMode();
    changeVid($('#urlList input')[0].value)
    return false
})

Mousetrap.bindGlobal("alt+2", function(){
    setVideoMode();
    changeVid($('#urlList input')[1].value)
    return false
})
Mousetrap.bindGlobal("alt+3", function(){
    setVideoMode();
    changeVid($('#urlList input')[2].value)
    return false
})
Mousetrap.bindGlobal("alt+4", function(){
    setVideoMode();
    changeVid($('#urlList input')[3].value)
    return false
})
Mousetrap.bindGlobal("alt+5", function(){
    setVideoMode();
    changeVid($('#urlList input')[4].value)
    return false
})
Mousetrap.bindGlobal("alt+6", function(){
    setVideoMode();
    changeVid($('#urlList input')[5].value)
    return false
})
Mousetrap.bindGlobal("alt+7", function(){
    setVideoMode();
    changeVid($('#urlList input')[6].value)
    return false
})
Mousetrap.bindGlobal("alt+8", function(){
    setVideoMode();
    changeVid($('#urlList input')[7].value)
    return false
})
Mousetrap.bindGlobal("alt+9", function(){
    setVideoMode();
    changeVid($('#urlList input')[8].value)
    return false
})
Mousetrap.bindGlobal("alt+0", function(){
    setVideoMode();
    changeVid($('#urlList input')[9].value)
    return false
})
Mousetrap.bindGlobal("alt+-", function(){
    var fs = $('#textEnter').css("font-size");
    var fsNum = parseFloat(fs.slice(0,-2));
    fsNum *= 0.9;
    $('#textEnter').css("font-size", fsNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("alt+=", function(){
    var fs = $('#textEnter').css("font-size");
    var fsNum = parseFloat(fs.slice(0,-2));
    fsNum /= 0.9;
    $('#textEnter').css("font-size", fsNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("ctrl+right", function(){
    var ms = $('#textEnter').css("padding-left");
    var msNum = parseFloat(ms.slice(0,-2));
    msNum += 5;
    $('#textEnter').css("padding-left", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("alt+left", function(){
    var ms = $('#textEnter').css("padding-right");
    var msNum = parseFloat(ms.slice(0,-2));
    msNum += 5;
    $('#textEnter').css("padding-right", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("ctrl+down", function(){
   var ms = $('#textEnter').css("padding-top");
   var msNum = parseFloat(ms.slice(0,-2));
    msNum += 5;
    $('#textEnter').css("padding-top", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("alt+up", function(){
    var ms = $('#textEnter').css("height");
    var msNum = parseFloat(ms.slice(0,-2));
    msNum -= 5;
    $('#textEnter').css("height", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("ctrl+left", function(){
    var ms = $('#textEnter').css("padding-left");
    var msNum = parseFloat(ms.slice(0,-2));
    msNum -= 5;
    $('#textEnter').css("padding-left", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("alt+right", function(){
    var ms = $('#textEnter').css("padding-right");
    var msNum = parseFloat(ms.slice(0,-2));
    msNum -= 5;
    $('#textEnter').css("padding-right", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("ctrl+up", function(){
    var ms = $('#textEnter').css("padding-top");
    var msNum = parseFloat(ms.slice(0,-2));
    msNum -= 5;
    $('#textEnter').css("padding-top", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("alt+down", function(){
    var ms = $('#textEnter').css("height");
    var msNum = parseFloat(ms.slice(0,-2));
    msNum += 5;
    $('#textEnter').css("height", msNum.toString() + "px")
    return false
})
Mousetrap.bindGlobal("ctrl+1", function(){
    mode.replace = true;
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[0].value}
    return false;
})
Mousetrap.bindGlobal("ctrl+2", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[1].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+3", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[2].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+4", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[3].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+5", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[4].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+6", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[5].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+7", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[6].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+8", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[7].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+9", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[8].value};
    return false;
})
Mousetrap.bindGlobal("ctrl+0", function(){
    mode.replace = true
    if(mode.replace){resetText(); replaceText = $('#replaceTexts textarea')[9].value};
    return false;
})
Mousetrap.bindGlobal("esc", function(){
    location.href = "../toc/index.html"
})
function clearMode(){
    $('#tubular-container').hide();
    mode.synth = false;
    mode.track = false; 
    clearVideoMode()
    mode.typewriter = false;
    // mode.replace = false;
    mode.speech = false;
    mode.confession = false;
}

function changeTextColor(color){
    $('textarea').css('color', color);
}
function changeShadowColor(color){
    $('textarea').css('text-shadow', "3px 3px" + color);
}
function changeBGColor(color){
    $('html').css('background-color', color);
}

function changeVid(url){
    if(mode.video){
        if(url.search('youtube.com|youtu.be/') != -1){
            if($('#web-iframe').length > 0){$('#web-iframe').attr('src', ""); $('#tubular-player').show(); }
            if(url.search('youtube.com') != -1){var video_id = url.split('v=')[1];}
            else{var video_id = url.split("be/")[1].split("?")[0]}
            var video_time = url.split('t=');
            if(video_time.length > 1){
                video_time = video_time[1];
                video_time = video_time.split("s")[0];
                video_time = video_time.split("m");
                if(video_time.length > 1){startTime = parseInt(video_time[0]) * 60 + parseInt(video_time[1])}
                else{startTime = parseInt(video_time[0])}
            } else{
                startTime = 0;
            }
            var ampersandPosition = video_id.indexOf('&');
            if(ampersandPosition != -1) {
              video_id = video_id.substring(0, ampersandPosition);
            }
            console.log(startTime)
            console.log(video_id)
            player.loadVideoById(video_id, startTime);
            muteVideo ? player.mute() : player.unMute();
            // var newSrc = vidSrc.replace(/embed\/(.*)\?/, "embed/"+video_id+"?")
            // $('#tubular-player').attr('src', newSrc)
            // if(!playType){player.playVideo()}
         } else if(url.search(".jpg|.jpeg|.gif|.png") != -1){
            $('html').css("background-image", "url("+url+")")
            player.pauseVideo();
            $('#web-iframe').attr('src', "")
            $('#tubular-container').hide();
         }

         else{
            if($('#web-iframe').length == 0){$('#tubular-container').append('<iframe id="web-iframe" width="100%" height="100%" style="border:0" src=""></iframe>')}
            if(url.search('http') == -1){url = "http://" + url}
            player.pauseVideo();
            $('#web-iframe').attr('src', url)
            $('#tubular-player').hide();
         }
 }
}
function clearVideoMode(){
    mode.video = false;
    player.pauseVideo();
    $('#web-iframe').attr('src', "")
    $('html').css("background-image", "")
    $('#tubular-container').hide();
}
function confessionAverted(){
    // clearMode();
    clearTimeout(confessionTimer);
    mode.track = false
    mode.confession = false
    $('#confessionBox').text("CONGRATULATIONS YOU HAVE RETAINED YOUR PRIVACY");
    playSound('applause')
    setTimeout(function(){$('#confessionBox').fadeOut()},5000);
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max+1 - min)) + min;
}
function onReadyFunction(){
    if(!playType){player.playVideo()};
    muteVideo ? player.mute() : player.unMute();
    player.addEventListener("onStateChange", onStateChangeFunction)
}
function onStateChangeFunction(state){
    console.log(state);
    if(state.data == 0){player.seekTo(startTime)}
}

function resetText(){
    counter = 0;
    speechStrings = [];
}
function saveTextAsFile()
    {
        var textToWrite = ta.value;
        var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
        var fileNameToSaveAs = "consoleOutput.txt";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null)
        {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
        else
        {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();
    }
function sayNextWord(){
    if(confessionText.length > 0 && mode.confession){
        if(confessionText[0] == "3"){showConfession = true; $('#confessionBox').prepend("Todd's CCN: ") }
        if(showConfession){$('#confessionBox').append(confessionText[0])};
        responsiveVoice.speak(confessionText.shift());
        confessionTimer = setTimeout(sayNextWord, 1200);
    }
}

function setMuteVideo(checked){
    muteVideo = checked;
    checked ? player.mute() : player.unMute()
}
function setPlayAsYouType(){
    playType = !playType;
    if(!playType){
        if(mode.track){track.pause()}
        if(mode.video){player.pauseVideo()}
    }
}
function setSpeed(value){
    speed = value;
}
function setVideoMode(){
    mode.video = true;
    $('#tubular-container').show();
    player.addEventListener("onReady", "onReadyFunction") 
    if(!playType){player.playVideo()}
}
function speakAndClear(){
    if(speechStrings != ""){responsiveVoice.speak(speechStrings, "UK English Female", params)};
    speechStrings = "";
    // if(!mode.speech){clearInterval(speechLoop);}

}
function speechEndCallback(){
    if(speechStrings.length > 0){responsiveVoice.speak(speechStrings.shift(), "UK English Female", params)};
    console.log(speechStrings)
}
var playSound = function(id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
