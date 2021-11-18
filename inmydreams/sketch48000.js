var time = 0;
var hasStarted = false;
var	s = "";
var	chorus = false;
var	ellipseArray = [];
var	adArray = [];
var	amplitude;
var	bgDraw = false;
var	gSolo = false;
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
  song = loadSound('assets/advertisements.wav');
}
function setup() {
	// document.getElementsByTagName("H1")[0].innerHTML = "";
	createCanvas(windowWidth, windowHeight);
	imgArray = [ad0,ad1,ad2,ad3,ad4,ad5,ad6,ad7,ad8,ad9,ad10,ad11,ad12];
	clear();
	textAlign(CENTER);
	textSize(36);
	fill(0);
	text("Advertisements In My Dreams - Thunder & Lightning", windowWidth/2, windowHeight/2 -150)
	textSize(28);
	fill(210);
	strokeWeight(1);
	stroke(0);
	text("Click and move your mouse to interact with this piece", windowWidth/2, windowHeight/2 -35)
	text("Click to begin", windowWidth/2, windowHeight/2)
  	amplitude = new p5.Amplitude();
  	rectMode(RADIUS);
}

function draw() {
	time = Math.floor(song.currentTime());
	if (hasStarted){
		setChorus();
		if (song.isPlaying() && time < 147 && song.currentTime() > 0){background(255);}
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
			if (ellipseArray[i].x < 0 || ellipseArray[i].x > windowWidth){
				ellipseArray[i].speedX *= -1;
			}
			if (ellipseArray[i].y < 0 || ellipseArray[i].y > windowHeight){
				ellipseArray[i].speedY *= -1;
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
		if (time >= 11 && time < 137 && gSolo == false){
			setText();
			for (var i = 0; i < adArray.length; i++){
				drawPopUp(i);
			}
		}
	} 	
}
function mousePressed() {
	if(song.isPlaying() == false && !hasStarted) {
		clear();
		hasStarted = true;
		//fullscreen(true);
		ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		song.play();
	}
	else if(song.isPlaying() && song.currentTime() > 0){
		if (time < 11 || gSolo == true || time >= 137){
			ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
			ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
			ellipseArray.push({x:mouseX, y:mouseY, t: time, speedX: random(-8,8), speedY: random(-8,8), r: random(0,200), g: random(0,200), b:random(0,200)});
		} else {
			addAd();
		}
	}
}
function mouseMoved() {
		if(time >= 89 && time < 115){
			if (random() < 0.6){
				if (time < 105){
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
		if(time >= 31 && time < 43){
			chorus = true
		}
		else if(time >= 62 && time <= 89){
			chorus = true
		}
		else if(time >= 115 && time < 137){
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
	if(chorus == true){
		adArray[i].x += adArray[i].speedX;
		adArray[i].y += adArray[i].speedY;
		if (adArray[i].x < 0 || adArray[i].x > windowWidth){
			adArray[i].speedX *= -1;
		}
		if (adArray[i].y < 0 || adArray[i].y > windowHeight){
			adArray[i].speedY *= -1;
		}
	}
   //index = adArray[i].index;
   index = adArray[i].index;
   img = imgArray[index];
   popCenter = adArray[i].x - img.width/2
   image(img, popCenter, adArray[i].y);
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
	time = Math.floor(song.currentTime());
	if(time >= 11 && time < 16){
		s = "Another summer is thrown into the pile";
	}
	if(time >= 16 && time < 21){
		s = "And my crooked neighbor gone and walked a crooked mile";
	}
	if(time >= 21 && time < 23){
		s = "Children laughing in the aisles";
	}
	if(time >= 23 && time < 26){
		s = "Numbers flashing on the screen";
	}
	if(time >= 26 && time < 28){
		s = "And you dance 'round in your kitchen";
	}
	if(time >= 28 && time < 31){
		s = "It's the center of the earth";
	}
	if(time >= 31 && time < 43){
		s = "Last night there were advertisements in my dreams";
	}
	if(time >= 43 && time < 48){
		s = "Oh and it seemed like we had it for a while";
	}
	if(time >= 48 && time < 52){
		s = "But we were just barefoot there on the chilly bathroom tile";
	}
	if(time >= 52 && time < 55){
		s = "Yesterday I was a child";
	}
	if(time >= 55 && time < 57){
		s = "Tomorrow an old man";
	}
	if(time >= 57 && time < 60){
		s = "When I see you I feel crazy";
	}
	if(time >= 60 && time < 62){
		s = "Wanna kiss ya, wanna hold ya";
	}
	if(time >= 62 && time < 74){
		s = "Last night there were advertisements in my dreams";
	}
	if(time >= 74 && time < 77){
		s = "Oh, oh, oh";
	}
	if(time >= 77 && time < 79){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}
	if(time >= 79 && time < 82){
		s = "Oh, oh, oh, oh";
	}
	if(time >= 82 && time < 89){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}
	if(time >= 89 && time < 105){
		s = "Guitar solooooo";
		gSolo = true;
		adArray = [];
	}
	if(time >= 105 && time < 107){
		s = "Yesterday I was a child";
		gSolo = false;
	}
	if(time >= 107 && time < 110){
		s = "Tomorrow an old man";
	}
	if(time >= 110 && time < 113){
		s = "See the mind wring its hands";
	}
	if(time >= 113 && time < 115){
		s = "See the heartstrings start to stir";
	}
	if(time >= 115 && time < 127){
		s = "Last night there were advertisements in my dreams.";
	}
	if(time >= 127 && time < 129){
		s = "Oh, oh, oh";
	}
	if(time >= 129 && time < 132){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}
	if(time >= 132 && time < 135){
		s = "Oh, oh, oh, oh";
	}
	if(time > 135){
		s = "Oh, oh, oh, oh, oh, oh, oh";
	}


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  imgArray = [ad0,ad1,ad2,ad3,ad4,ad5,ad6,ad7,ad8,ad9,ad10,ad11,ad12];
  if(!hasStarted){
  	textAlign(CENTER);
	textSize(36);
	fill(0);
	text("Advertisements In My Dreams - Thunder & Lightning", windowWidth/2, windowHeight/2 -150)
	textSize(28);
	fill(210);
	strokeWeight(1);
	stroke(0);
	text("Click and move your mouse to interact with this piece", windowWidth/2, windowHeight/2 -35)
	text("Click to begin", windowWidth/2, windowHeight/2)
  }
}

