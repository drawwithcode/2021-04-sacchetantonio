const urlString = window.location.href;
let url = new URL(urlString);
console.log(url);

//netflix buttom
let netflixButton;

//enter button
let enterButton;

//instruction string
let instructions = "WRI YOUR NAME";
let textBar;

//enter string
let enter = "PRESS ENTER";

//card
let cardImage;

//username
let username;

function preload() {
  cardImage = loadImage("./addons/card.png");
}

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
  background("black");

  //create Netflix Button
  netflixButton = createElement("button", "WATCH NOW");
  // netflixButton.align(CENTER);
  netflixButton.position(150, 180);
  netflixButton.mousePressed(enterNetflix);
  netflixButton.class("netflixButton");

  //create Enter button
  enterButton = createElement("button", "enter");

  //instructions
  typeWriter(
    instructions,
    0,
    windowWidth / 3.5,
    windowHeight - windowHeight / 3.7,
    80
  );

  //input text name
  textBar = createInput("");
  // textBar.input(myInputEvent);
  textBar.position(windowWidth / 3.5, windowHeight - windowHeight / 3.9);
  textBar.class("textBar");

  // press enter
  typeWriter(enter, 0, windowWidth / 3.5, windowHeight - windowHeight / 5, 80);
}
function draw() {
  //card image
  image(cardImage, windowWidth / 3.5, windowHeight / 3, 500);

  //heading
  push();
  textFont("Roboto Mono");
  textStyle(BOLD);
  textSize(50);
  fill("white");
  text("SQUID GAME.what's your mask", 150, 150);
  pop();
}

//function to open netflix
function enterNetflix() {
  window.open("https://www.netflix.com/title/81040344", "_new");
}

//function to write on the screen
function typeWriter(sentence, n, x, y, speed) {
  if (n < sentence.length) {
    text(sentence.substring(0, n + 1), x, y);
    n++;

    textFont("Roboto Mono");
    textSize(12);
    fill("white");

    setTimeout(function () {
      typeWriter(sentence, n, x, y, speed);
    }, speed);
  }
}

// function press entrer
function keyPressed(myInputEvent) {
  if (keyCode == ENTER) {
    let username = textBar.value();
    window.open(url + "main.html?count=" + username, "_self");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
