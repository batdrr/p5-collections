//draw a spinning teapot
let oldmac;

function preload() {
  // Load model with normalise parameter set to true
  oldmac = loadModel('oldmac2.obj', true);
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(255);
  scale(1); // Scaled to make model fit into canvas
  rotateX(600)
  rotateY(millis() / 500);
  noFill();
  stroke(200,25,200);
  model(oldmac);
}