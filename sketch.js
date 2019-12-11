// for red, green, and blue color values
let r, g, b;

function setup() {
  createCanvas(500, 500);
  // Pick colors randomly
  r = random(155);
  g = random(155);
  b = random(155);
}

function draw() {
  background(20, 19, 9, 8);
  // Draw a rectangle
  strokeWeight(8.5);
  stroke(r, g, b);
  fill(r, g, b, 127);
  rect(155, 150, 150, 150);
}


// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
