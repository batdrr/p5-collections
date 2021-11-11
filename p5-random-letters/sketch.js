const letters = ["*" ,"[", "]", "#", "|"]

function setup() {
  createCanvas(600, 1000);
  frameRate(10);
}

function draw() {
  background(255);
  for (let y = 0; y <= height; y += 40) {
    for (let x = 0; x <= width; x += 40) {
      push();
      translate(x, y);
      fill(random(), random(255), random(), random(180));
      text(random(letters), 0, 0);
      pop();
    }
  }
}
