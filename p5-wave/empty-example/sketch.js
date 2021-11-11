function setup() {
  // createCanvas (windowWidth, windowHeight, WEBGL)
  createCanvas (400, 800, WEBGL)
  angleMode(DEGREES)
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
  background(1)

  rotateX(70)

  noFill()
  stroke(255)

  for (var i = 0; i < 50; i++) {
    
    var r = map(sin(frameCount / 2), -1, 1, 50, 250)
    var g = map(i, 0, 20, 100, 150)
    var b = map(cos(frameCount), -1, 1, 250, 100)
    
    stroke(r, g, b)
    
    rotate(frameCount / 40)

    beginShape()
    for (var j =0; j < 360; j += 60) {
      var rad = i * 25
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 10) * 120

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}