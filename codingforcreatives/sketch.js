

var balloonLoc = 265;
var eyeHeight = 90;
var mic = new p5.AudioIn();

mic.start();


function setup() {

	// createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	createCanvas(1000, 1000);
	// background(0);

}

// function draw() {

// 	// ellipse takes 4 arguments (center from left, center from top, width, height):

// 	ellipse(220, 200, 100, 100);
// 	ellipse(350, 200, 100, 100); // eyes
// 	ellipse(220, 200, 50, 50);
// 	ellipse(350, 200, 50, 50); // eyes

// 	ellipse(300, 300, 300, 10); // mouth

// 	// rect - from top left corner instead of from center
  	
//   	rect(230, 375, 100, 200);
//   	rect(255, 375, 50, 100);
// }


function draw () {

	var vol = mic.getLevel();
	eyeHeight = map(vol, 0, 1, 90, 200);


	// balloonLoc = 265;

	background('#7ec0ee')

	//head:
	fill('#bab3e7');
	ellipse(balloonLoc, 250, 250, 300);
	// console.log(width/2);


	// while (balloonLoc < 300) {
	// 	balloonLoc++
	// }
	// while (balloonLoc > 200) {
	// 	balloonLoc--
	// }

	// eyes: 
	fill('#fff');
	ellipse(200, 277, 40, eyeHeight);
	ellipse(275, 277, 40, eyeHeight);

	fill(0);
	ellipse(200, 300, 30, 40);
	ellipse(275, 300, 30, 40);

	//mouth:
	fill ('#c783af');
	ellipse(250, 350, 100, 20);

    // (x, y, x, y, x, y)
    fill('#bab3e7');
	triangle(265, 400, 250, 430, 275, 430);


	noFill();	
	stroke("#000");
	curve(5, 26, 5, 550, 265, 430, 73, 61);

	
}











