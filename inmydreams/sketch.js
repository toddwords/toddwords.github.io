var time = 0;
var hasStarted = false;
var	s = "";
var	chorus = false;
var	ellipseArray = [];
var	adArray = [];
var	amplitude;
var	bgDraw = false;
var	gSolo = false;
var song;
function preload(){
  ad0 = loadImage("assets/bod.png");
  ad1 = loadImage("assets/gift.png");
  ad2 = loadImage("assets/goldiPhone.png");
  ad3 = loadImage("assets/netflixPopup.png");
  ad4 = loadImage("assets/WARNING.png");
  ad5 = loadImage("assets/colgate.png");
  ad6 = loadImage("assets/freeDVD.png");
  ad7 = loadImage("assets/moneyAd.png");
  ad8 = loadImage("assets/mortgage.png");
  ad9 = loadImage("assets/uPhoenix.png");
  ad10 = loadImage("assets/simpleText.png");
  ad11 = loadImage("assets/slotAd.png");
  ad12 = loadImage("assets/zeroAds.png");
  song = loadSound('assets/advertisements441.mp3');
}
function setup() {
	// document.getElementsByTagName("H1")[0].innerHTML = "";
	// if(song.sampleRate() == 48000){song = loadSound('assets/advertisements48.mp3')}
	createCanvas(windowWidth, windowHeight);
  	rectMode(RADIUS);
	imgArray = [ad0,ad1,ad2,ad3,ad4,ad5,ad6,ad7,ad8,ad9,ad10,ad11,ad12];
	clear();
	textAlign(CENTER);
	textSize(32);
	if(windowWidth < 800){textSize(28)}
	fill(0);
	text("Advertisements In My Dreams\n-Thunder & Lightning-", windowWidth/2, windowHeight/2 -150)
	textSize(28);
	fill(210);
	strokeWeight(1);
	stroke(0);
	text("Click and move your mouse\n to interact with this piece\n\nClick to begin", windowWidth/2, windowHeight/2 -35)
	// text("Click to begin", windowWidth/2, windowHeight/2)
  	amplitude = new p5.Amplitude();
  	// song.addCue(11.00, changeText, "Another summer is thrown into the pile")
  	// song.addCue(16.00, changeText, "And my crooked neighbor gone and walked a crooked mile")
  	// song.addCue(21.00, changeText, "Children laughing in the aisles")
  	// song.addCue(26.00, changeText, "And you dance 'round in your kitchen")
  	// song.addCue(28.00, changeText, "It's the center of the earth")
  	// song.addCue(31.00, changeText, "Last night there were advertisements in my dreams")
}
function changeText(text){
	s = text;
}

function draw() {
	time = song.currentTime();
	// time = song.currentTime() * song.sampleRate()/44100;
	// console.log(song.sampleRate())
	if (hasStarted){
		setChorus();
		if (time < 160 && song.currentTime() > 0){background(255);}
		noStroke();
		for (var i = 0; i < ellipseArray.length; i++){
			var level = amplitude.getLevel();
			var size = map(level, 0, 1, 100, 500);
			var red = map(level * abs(sin(ellipseArray[i].t)), 0, 1, ellipseArray[i].r, 255)
			var green = map(level * abs(tan(ellipseArray[i].t)), 0, 1, ellipseArray[i].g, 255)
			var blue = map(level * abs(cos(ellipseArray[i].t)), 0, 1, ellipseArray[i].b, 255)
			fill(red, green, blue)
			ellipse(ellipseArray[i].x, ellipseArray[i].y, size, size)
			if(chorus == false){
				ellipseArray[i].x += ellipseArray[i].speedX * (level + 0.15);
				ellipseArray[i].y += ellipseArray[i].speedY * (level + 0.15);
			}
			if(ellipseArray[i].x - size/2 < 0){
				if(ellipseArray[i].speedX < 0){ellipseArray[i].speedX *= -1}
			}

			if(ellipseArray[i].x + size/2 > windowWidth){
				if(ellipseArray[i].speedX > 0){ellipseArray[i].speedX *= -1}
			}
			if(ellipseArray[i].y - size/2 < 0){
				if(ellipseArray[i].speedY < 0){ellipseArray[i].speedY *= -1}
			}

			if(ellipseArray[i].y + size/2 > windowHeight){
				if(ellipseArray[i].speedY > 0){ellipseArray[i].speedY *= -1}
			}
			if(!song.isPlaying()){
				ellipseArray[i].speedX *= 0.995;
				ellipseArray[i].speedY *= 0.995;
			}
		}
		if(!song.isPlaying()){
				fill(255);
				noStroke();
				textAlign(CENTER);
				textFont("Helvetica");
				textSize(36)
				text("Advertisements In My Dreams - Thunder & Lightning", windowWidth/2, windowHeight/2 -50)
				textSize(32)
				text("Interactive Music Video by Todd Anderson (@toddwords)", windowWidth/2, windowHeight/2 +20)
		}
		if (time >= 12 && time < 150){
			setText();
			if(gSolo == false){
				for (var i = 0; i < adArray.length; i++){
					drawPopUp(i);
				}
			}
		}
	} 	
}
function mousePressed() {
	if(song.isPlaying() == false && !hasStarted) {
		clear();
		hasStarted = true;
		toggleFullScreen();
		ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		song.play();
	}
	else if(song.isPlaying() && song.currentTime() > 0){
		if (time < 12.586 || gSolo == true || time >= 150){
			ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
			ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
			ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		} else {
			addAd();
		}
	}
}
function mouseMoved() {
		if(time >= 97 && time < 125.415){
			if (random() < 0.6){
				if (time < 114.117 ){
					ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
					if(ellipseArray.length > 50){ellipseArray.shift()}
				}
				else {
					addAd();
				}
			}
		}


}

function setChorus() {
		if(time >= 33.838 && time < 46.807){
			chorus = true
		}
		else if(time >= 68.151 && time <= 97){
			chorus = true
		}
		else if(time >= 125.415 && time < 150){
			chorus = true

		}
		else {
			chorus = false;
		}
}
function addAd(){
	adArray.push({x:mouseX, y:mouseY, index: Math.floor(random(0,imgArray.length)), speedX: random(-8,8), speedY: random(-8,8)});
	if(adArray.length > 35){adArray.shift()};

}
function drawPopUp(i){
	index = adArray[i].index;
    img = imgArray[index];
    popCenter = adArray[i].x - img.width/2
    image(img, popCenter, adArray[i].y);
	if(chorus == true){
		adArray[i].x += adArray[i].speedX;
		adArray[i].y += adArray[i].speedY;
		if (adArray[i].x - img.width/2 < 0){
			if(adArray[i].speedX < 0){adArray[i].speedX *= -1;}
		}
		if (adArray[i].x + img.width/2 > windowWidth){
			if(adArray[i].speedX > 0){adArray[i].speedX *= -1;}
		}
		if (adArray[i].y < 0){
			if(adArray[i].speedY < 0){adArray[i].speedY *= -1;}
		}
		if (adArray[i].y + img.height > windowHeight){
			if(adArray[i].speedY > 0){adArray[i].speedY *= -1;}
		}
	}
   //index = adArray[i].index;

  if (index == 0){
	textSize(24);
	if(s.length > 40){textSize(19); textLeading(19);}
	if(s.length > 50){textSize(17); textLeading(17);}
	textLeading(24);
	textFont("Arial");
	textAlign(CENTER);
	textStyle(ITALIC);
   	fill(10);
    text(s, popCenter, adArray[i].y + 14, img.width, 60);
  }
  if (index == 1){
	textSize(28);
	textLeading(24);
	textFont("Helvetica");
	textAlign(CENTER);
	textStyle(NORMAL);
   	stroke(0);
   	fill(10);
    text(s, popCenter + 43, adArray[i].y + 68, img.width -85, 100);
  }
  if (index == 2){
	textSize(24);
	textLeading(24);
	if(s.length > 40){textSize(18); textLeading(22);}
	if(s.length > 50){textSize(16); textLeading(18);}
	textFont("Trebuchet MS");
	textAlign(CENTER);
	textStyle(NORMAL);
   	stroke(0);
   	fill(166, 141, 58);
    text(s, popCenter + 80, adArray[i].y + 78, img.width -85, 100);
  }
   if (index == 3){
	textSize(26);
	textLeading(26);
	if(s.length > 40){textSize(22); textLeading(22);}
	if(s.length > 50){textSize(20); textLeading(18);}
	textFont("Futura");
	textAlign(CENTER);
	textStyle(BOLD);
   	stroke(0);
   	fill(255);
    text(s, popCenter + 180, adArray[i].y + 40, 150, img.height);
  }
   if (index == 4){
	textSize(26);
	textLeading(26);
	if(s.length > 40){textSize(22); textLeading(22);}
	if(s.length > 50){textSize(20); textLeading(18);}
	textFont("Arial Black");
   	fill(255, 0 ,0 );
	textAlign(CENTER);
	textStyle(NORMAL);
   	noStroke();
    text(s, popCenter + 100, adArray[i].y + 130, img.width - 200, 100);
    textSize(14);
	textLeading(14);
    textFont("Georgia");
	textStyle(NORMAL);
   	fill(0);
   	stroke(0);
    text(s+" "+s+" "+s+" "+s+" "+s, popCenter +92, adArray[i].y + 230, img.width - 185, 64);
  }
  if (index == 5){
	textSize(30);
	textLeading(30);
	textAlign(CENTER);
	textFont("Gill Sans MT");
	textStyle(NORMAL);
   	noStroke();
   	fill(0,174,239);
    text(s, popCenter + 25, adArray[i].y + 100, img.width - 50, img.height/2);
  }
  if (index == 6){
	textSize(22);
	textLeading(22);
	if(s.length > 40){textSize(18); textLeading(22);}
	if(s.length > 50){textSize(16); textLeading(18);}
	textFont("Arial Black");
	textAlign(LEFT);
	textStyle(NORMAL);
   	noStroke();
   	fill(255);
    text(s, adArray[i].x - 10, adArray[i].y + 115, img.width/2 - 15, 150);
  }
   if (index == 7){
	textSize(40);
	textLeading(40);
	textFont("Lucida Bright");
	textAlign(CENTER);
	textStyle(BOLD);
   	stroke(0);
   	fill(255,255,0);
    text(s, popCenter, adArray[i].y + 100, img.width, img.height);
  }
  if (index == 8){
	textSize(22);
	textLeading(22);
	if(s.length > 40){textSize(18); textLeading(18);}
	if(s.length > 50){textSize(16); textLeading(16);}
	textFont("Times New Roman");
   	fill(0);
	textAlign(CENTER);
	textStyle(NORMAL);
   	noStroke();
    text(s, popCenter + 60, adArray[i].y + 10, img.width - 100, 100);
    textSize(12);
	textLeading(12);
	textStyle(NORMAL);
   	fill(0);
   	stroke(0);
    text(s+" "+s+" "+s, popCenter + img.width/4, adArray[i].y + 65, img.width/2, img.height * 0.75);
  }
  if (index == 9){
	textSize(30);
	textLeading(30);
	if(s.length > 40){textSize(26); textLeading(26);}
	if(s.length > 50){textSize(22); textLeading(22);}
	textFont("Palatino");
   	fill(152, 0 ,0 );
	textAlign(CENTER);
	textStyle(NORMAL);
   	noStroke();
    text('"'+s+'"', popCenter + 30, adArray[i].y + 100, img.width * 0.6, img.height/2);
    textSize(18);
	textLeading(20);
	if(s.length > 40){textSize(16); textLeading(16);}
    textFont("Tahoma");
	textAlign(LEFT);
	textStyle(NORMAL);
   	fill(230);
    text(s, popCenter + 20, adArray[i].y + 240, img.width *0.33, img.height * 0.35);
  }
  if (index == 10){
	textSize(16);
	textLeading(30);
	textFont("Arial Narrow");
	textAlign(LEFT);
	textStyle(NORMAL);
   	noStroke();
   	fill(0);
    text(s+" "+s, adArray[i].x + -100, adArray[i].y + 65, img.width*0.63, img.height/2);
  }
  if (index == 11){
	textSize(36);
	textLeading(36);
	textFont("Impact");
	textAlign(CENTER);
	noStroke();
	textStyle(BOLD);
   	fill(0,75,255);
    text(s, popCenter + img.width/2 -20, adArray[i].y + 80, img.width/2, img.height);
  }
  if (index == 12){
	textSize(24);
	textLeading(24);
	if(s.length > 40){textSize(20); textLeading(20);}
	if(s.length > 50){textSize(18); textLeading(18);}
	textFont("Rockwell");
   	fill(255, 247 ,143 );
	textAlign(CENTER);
	textStyle(NORMAL);
   	stroke(80);
    text(s, popCenter + 5, adArray[i].y + 20, img.width - 10, 60);
    textSize(15);
	textLeading(20);
	if(s.length > 40){textSize(13); textLeading(13);}
	if(s.length > 50){textSize(11); textLeading(11);}
    textFont("Tahoma");
	textStyle(BOLD);
   	fill(255,0,0);
   	noStroke();
    text(s, popCenter - 36 + (img.width/2 + 10)/2, adArray[i].y + img.height/2 + 25, img.width/2 + 25, 50);
  }


}
function setText(){
	// time = song.currentTime();
	if(time >= 12.586 && time < 18.077){
		s = "Another summer is thrown into the pile";
	}
	if(time >= 18.077 && time < 22.763){
		s = "And my crooked neighbor gone and walked a crooked mile";
	}
	if(time >= 22.763 && time < 25.674){
		s = "Children laughing in the aisles";
	}
	if(time >= 25.674 && time < 28.526){
		s = "Numbers flashing on the screen";
	}
	if(time >= 28.526 && time < 31.292){
		s = "And you dance 'round in your kitchen";
	}
	if(time >= 31.292 && time < 33.838){
		s = "It's the center of the earth";
	}
	if(time >= 33.838 && time < 46.807){
		s = "Last night there were advertisements in my dreams";
	}
	if(time >= 46.807 && time < 52.479){
		s = "Oh and it seemed like we had it for a while";
	}
	if(time >= 52.479 && time < 57.060){
		s = "But we were just barefoot there on the chilly bathroom tile";
	}
	if(time >= 57.060 && time < 59.924){
		s = "Yesterday I was a child";
	}
	if(time >= 59.924 && time < 62.641 ){
		s = "Tomorrow an old man";
	}
	if(time >= 62.641 && time < 65.608){
		s = "When I see you I feel crazy";
	}
	if(time >= 65.608 && time < 68.724){
		s = "Wanna kiss ya, wanna hold ya";
	}
	if(time >= 68.151 && time < 81.085){
		s = "Last night there were advertisements in my dreams";
	}
	if(time >= 81.085 && time < 83.940){
		s = "Oh, oh, oh";
	}
	if(time >= 83.940 && time < 86.818){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}
	if(time >= 86.818 && time < 89.621){
		s = "Oh, oh, oh, oh";
	}
	if(time >= 89.621 && time < 97){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}
	if(time >= 97 && time < 114.117){
		s = "Guitar solooooo";
		gSolo = true;
		adArray = [];
	}
	if(time >= 114.117 && time < 117.093){
		s = "Yesterday I was a child";
		gSolo = false;
	}
	if(time >= 117.093 && time < 119.857){
		s = "Tomorrow an old man";
	}
	if(time >= 119.857 && time < 122.762){
		s = "See the mind wring its hands";
	}
	if(time >= 122.762 && time < 125.415){
		s = "See the heartstrings start to stir";
	}
	if(time >= 125.415 && time < 138.280){
		s = "Last night there were advertisements in my dreams.";
	}
	if(time >= 138.280 && time < 141.080){
		s = "Oh, oh, oh";
	}
	if(time >= 141.080 && time < 143.935){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}
	if(time >= 143.935 && time < 146.867){
		s = "Oh, oh, oh, oh";
	}
	if(time > 146.867){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  imgArray = [ad0,ad1,ad2,ad3,ad4,ad5,ad6,ad7,ad8,ad9,ad10,ad11,ad12];
  if(!hasStarted){
  	textAlign(CENTER);
	textSize(36);
	if(windowWidth < 800){textSize(28)}
	fill(0);
	text("Advertisements In My Dreams\n-Thunder & Lightning-", windowWidth/2, windowHeight/2 -150)
	textSize(28);
	fill(210);
	strokeWeight(1);
	stroke(0);
	text("Click and move your mouse\n to interact with this piece\n\nClick to begin", windowWidth/2, windowHeight/2 -35)
	// text("Click to begin", windowWidth/2, windowHeight/2)
  }
}

function keyTyped(){
	if(key == "f"){
		toggleFullScreen();
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } 
  // else {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   }
  // }
}