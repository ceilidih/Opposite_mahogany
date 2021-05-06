let w = 500;
let h = 500;

let palette = ["#FF6666", "#5D2E8C", "#2EC4B6"];
let colours = [];


function setup() {
  createCanvas(w, h);
  for (let i = 0; i < 16; i++) {
    colours.push([random(palette), random(palette), random(palette), random(palette)]);
  }
  //noLoop();
  frameRate(4);
}

function draw() {
  background("#F1E8B8");


  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      let i = x + y * 4;
      resetMatrix();
      translate(x * 100 + 100, y * 100 + 100);

      let r1 = random();
      let r2 = random();
      let r3 = random();


      strokeWeight(1);
      stroke(colours[i][0]);
      noFill();
      if (r1 < 0.5) {
        ellipse(0, 0, 90, 70);
        ellipse(0, 0, 70, 90);
      } else {
        rotate(PI / 4);
        ellipse(0, 0, 90, 70);
        ellipse(0, 0, 70, 90);
      }


      stroke(colours[i][1]);
      if (r2 < 0.4) {
        ellipse(0, 0, 50, 30);
        ellipse(0, 0, 30, 50);
      } else if (r2 < 0.8) {
        rotate(PI / 4);
        ellipse(0, 0, 50, 30);
        ellipse(0, 0, 30, 50);
      } else {

      }

      stroke(colours[i][2]);
      if (r3 < 0.35) {
        ellipse(0, 0, 20, 10);
        ellipse(0, 0, 10, 20);
      } else if (r3 < 0.7) {
        rotate(PI / 4);
        ellipse(0, 0, 20, 10);
        ellipse(0, 0, 10, 20);
      } else {

      }
    }
  }
}

function mousePressed() {
  colours = [];
  for (let i = 0; i < 16; i++) {
    colours.push([random(palette), random(palette), random(palette), random(palette)]);
  }
  redraw();
}