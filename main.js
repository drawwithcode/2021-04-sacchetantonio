const urlString = window.location.href;
let url = new URL(urlString);
let username = url.searchParams.get("count");
console.log(username);

//masks
let masks = [];
let maskButton;
console.log(masks);

//record image
let camRec;
let n = 1;

//intro
let intro = "hi, " + username;

//effect
let redness = 150;
let bw = 0;

//logo
let logo;

//song
let track;

function preload() {
  masks[0] = loadImage("./addons/triangle.png");
  masks[1] = loadImage("./addons/circle.png");
  masks[2] = loadImage("./addons/square.png");
  masks[3] = loadImage("addons/Boss.png");
  logo = loadImage("./addons/logo.png");
  track = loadSound("./addons/track.mp3");
}

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
  background("black");

  //record image
  camRec = createCapture(VIDEO);
  camRec.size(640 * n, 480 * n);
  camRec.hide();

  //intro
  introWriter(intro, 0, 400, 150, 80);

  //create Mask Button
  maskButton = createElement("button", "PRESS HERE TO CHANGE YOUR MASK");
  maskButton.position(400, windowHeight - 150);
  maskButton.mousePressed(changeMask);
  maskButton.class("maskButton");
  mask = random(masks);

  push();
  textSize(15);
  text("PRESS HERE TO CHANGE YOUR MASK", 400, windowHeight - 130);
  pop();

  //play song
  track.loop();
}

function draw() {
  //logo image
  push();
  imageMode(CENTER);
  image(logo, windowWidth / 2 + 250, windowHeight - 120, 100, 50);
  pop();

  imageMode(CENTER);

  //record image
  push();
  translate(windowWidth, 0);
  scale(-1, 1);
  tint(redness, bw, bw);
  image(camRec, windowWidth / 2, windowHeight / 2);
  //   filter(GRAY);
  pop();

  //mask image
  image(mask, windowWidth / 2, windowHeight / 2, 440, 400);

  //text change effect
  push();
  textSize(10);
  text("use <-arrows-> to remove the effect", 400, windowHeight - 100);
  pop();

  //text press S
  push();
  textSize(8);
  text("press S to download your image", 400, windowHeight - 85);
  pop();
}

// function to have random mask
function changeMask() {
  mask = random(masks);
}

//function to type on the screen
function introWriter(sentence, n, x, y, speed) {
  if (n < sentence.length) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    textFont("Roboto Mono");
    textStyle(BOLD);
    textSize(50);
    fill("white");
    setTimeout(function () {
      introWriter(sentence, n, x, y, speed);
    }, speed);
  }
}

//function to press S
function keyTyped() {
  if (key === "s" || key === "S") save(username + "'s mask.jpg");
}

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     redness = redness - 20;
//   } else if (keyCode === RIGHT_ARROW) {
//     redness = redness + 20;
//   }
// }

//function to use ARROWS
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    redness = 150;
    bw = 0;
  } else if (keyCode === RIGHT_ARROW) {
    redness = 220;
    bw = 220;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
