function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(39, 50, 72);

  push();
  translate(width / 2, height / 2);
  beginShape();
  vertex(-25, -75);
  vertex(-25, -25);
  vertex(-75, -25);
  vertex(-75, 25);
  vertex(-25, 25);
  vertex(-25, 75);
  vertex(25, 75);
  vertex(25, 25);
  vertex(75, 25);
  vertex(75, -25);
  vertex(25, -25);
  vertex(25, -75);
  endShape(CLOSE);
  pop();

  fill(255);
}
