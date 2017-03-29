//change images on page
var images = document.getElementsByTagName('img');
var imgUrl = "wink.gif"
for (var i = 0, l = images.length; i < l; i++) {
	
  // images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
  //alternatively this could come from a folder of images.

  // if(Math.random()<0.5){imgUrl = "sadDolphin.gif"}
  images[i].src = "https://media.giphy.com/media/DpN3VaWVQ0OiY/giphy.gif"
}

