function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(39, 50, 72);

  beginShape();
  vertex(500, 350);
  vertex(500, 400);
  vertex(450, 400);
  vertex(450, 450);
  vertex(500, 450);
  vertex(500, 500);
  vertex(550, 500);
  vertex(550, 450);
  vertex(600, 450);
  vertex(600, 400);
  vertex(550, 400);
  vertex(550, 350);
  endShape(CLOSE);
  fill(255);
}
