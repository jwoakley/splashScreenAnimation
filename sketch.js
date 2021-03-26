
var moody;

function preload() {
  moody = loadAnimation('assets/moody-01.png', 'assets/moody-04.png');
}

// Setup code goes here
function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER);

  moody = createSprite(width/2, height/2);

  var myAnimation = moody.addAnimation('flying', 'assets/moody-01.png', 'assets/moody-04.png');
 }

// Draw code goes here
function draw() {
  drawSprites();
}

function mouseReleased() {
  debugScreen.print("mouseReleased at x: " + mouseX + " y: " + mouseY + " millis = " + millis() );
}
function keyPressed() {
  if( key === ' ') {
    showDebugScreen = !showDebugScreen;
  }
}

