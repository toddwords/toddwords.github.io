// uncomment the line below and put your socket events in here
let width = 100;
let counter = 0;
let canRatchet = false;



$(document).keydown(function (e) {
  if(e.key == "/" && canRatchet){
    e.preventDefault()
    playSound2("ratchetSound")
    $('h3').text("\\")
    if(counter < lines.length - 3) width -= 1.5;
    $('.flex').css("width", `${width}vw`)
    canRatchet = false
  }
  if(e.key == "\\" && !canRatchet){
    e.preventDefault()
    playSound2("resetSound")   
    $('h3').text("/")
    canRatchet = true
    if(counter == 0){
      playSound("bg")
      $('.shift').removeClass("shift")
    }
    counter++
    if(lines[counter].length == 0){width-=5; $('.flex').css("width", `${width}vw`)} 
    if(counter == lines.length - 2){
      end()
    }
    $('h1').text(lines[counter])

    
  }
});

function end (){
  $(document).off('keydown')
  $('#bg')[0].pause()
  $('.flex').css("width", `0vw`)
  $('h3').text("")
}
function playSound(id){
    let sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime >  0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
function playSound2 (id) {
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    let sound = $("#" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime >  0){
        sound.currentTime = 0
    } else {
        sound.play()
    }

}


$('button.bottom-left').on("touchstart",function(){
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': "\\"}))
})

$('button.bottom-right').on("touchstart",function(){
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': "/"}))
})



