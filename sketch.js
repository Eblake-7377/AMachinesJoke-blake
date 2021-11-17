//terrain
let angle = 0;
let maxD;

//puzzle pieces
let tab = 20;
let core = 35;

let loc = [-core * 1.5, -core, -core / 2, 0, core / 2, core, core * 1.5]


//Puzzle Piece cordnites
let p = 0;
let q = 0;
let r = 0

//falling feature
let ff = false;



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //fisrt layer
  CU1 = new puzzleCUp(-core / 2, 0, 0, core);
  CD1 = new puzzleCDown(-core / 2, -core, core, core);

  //2nd layer
  CU2 = new puzzleCUp(core / 2, core, -core, core);
  Puzz1 = new puzzlePiece(core * 1.5, -core, -core, core);
  Puzz2 = new puzzlePiece(core * 1.5, -core * 2, 0, core);
  CD2 = new puzzleCDown(-core * 1.5, -core * 2, core * 2, core);
  CU3 = new puzzleCUp(-core * 1.5, core, -core, core);
  Puzz3 = new puzzlePiece(-core * 1.5, -core, -core, core);
  CD3 = new puzzleCDown(-core * 1.5, 0, 0, core);
  CD4 = new puzzleCDown(-core * 1.5, -core, core, core);
  CU4 = new puzzleCUp(core / 2, core, core, core);
  CD5 = new puzzleCDown(-core / 2, -core, core * 2, core);
  CU5 = new puzzleCUp(-core * 1.5, core, core, core);
  Puzz4 = new puzzlePiece(-core * 1.5, core, core * 2, core);
  Puzz5 = new puzzlePiece(-core * 1.5, 0, core * 2, core);
  CD6 = new puzzleCDown(core / 2, 0, core * 2, core);
  CD7 = new puzzleCDown(core / 2, -core * 2, core, core);
  Puzz6 = new puzzlePiece(-core * 1.5, 0, 0, core);
  Puzz7 = new puzzlePiece(-core * 1.5, core, core * 2, core);

  //core/center on puzzle
  drop = new Drop(0, -core / 2, core / 2, core);
  drop1 = new Drop(0, -core / 2, core / 2, core / 2);

  //terrain
  maxD = dist(0, 0, 200, 200);

}

function draw() {
  background(0);
  push();
  directionalLight(255, 255, 255, 0, -1, 0);
  translate(0, 200, -300);
  rotateX(-QUARTER_PI);
  let offset = 0;
  for (let z = 0; z < height; z += core) {

    for (let x = 0; x < width; x += core) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 350));
      translate(x - width / 2, 0, z - height / 2);
      ambientMaterial(255);
      // stroke('MidnightBlue');
      // stroke(random(20, 155), random(20, 155), random(20, 155));
      stroke(random(20, 105), random(20, 55), random(20, 155));

      fill(0);
      box(core - 2, h, core - 2);

      // rect(x- width/2 + w/2, 0, w-2, h);
      pop();
    }
    offset += 0.1;

  }
  angle -= 0.075;
  pop();
  //RING
  push();
  translate(0, 80, -200);
  rotateX(-2.26893);
  rotateZ(0.785398);
  rotateZ(-q * 0.5);
stroke('#d74267');
  fill(0);
  torus(width * 2, width, 24, 4);
  pop();

  push();
  translate(0, -100, 0);
  ////the continuous rotation of puzzle
  // p += 0.005;
  // rotateX(p);
  rotateX(-QUARTER_PI);

  q += -0.005;
  rotateY(q);

  // check the keyboard
  handleKeyboard();


  // draw the puzzle piece
  fill(0);
  stroke('#4d804d');
  CU1.display();
  CU2.display();
  CU3.display();
  CU4.display();
  CU5.display();

  fill(0);
  stroke('Peru');
  CD1.display();
  CD2.display();
  CD3.display();
  CD4.display();
  CD5.display();

  fill(0);
  stroke('#2e50b8');
  Puzz1.display();
  Puzz2.display();
  Puzz3.display();
  Puzz4.display();
  Puzz5.display();
  Puzz6.display();
  Puzz7.display();

  noFill();
  stroke(255);
  drop.display();
  drop1.display();

  if (ff == true) {
    background(0);

    drop.move(0, 3, 0);
    drop1.move(0, 3, 0);
    fill('SpringGreen');
    stroke('LimeGreen');
    CU1.display();
    CU2.display();
    CU3.display();
    CU4.display();
    CU5.display();

    fill('GoldenRod');
    stroke('Peru');
    CD1.display();
    CD2.display();
    CD3.display();
    CD4.display();
    CD5.display();

    fill('DodgerBlue');
    stroke('RoyalBlue');
    Puzz1.display();
    Puzz2.display();
    Puzz3.display();
    Puzz4.display();
    Puzz5.display();
    Puzz6.display();
    Puzz7.display();


    fill('magenta');

    stroke(0);
    drop1.display();
    fill(255, 51, 153, 150);

    drop.display();
    pop();

    push();
    directionalLight(255, 255, 255, 0, -1, 0);
    translate(0, 200, -300);
    rotateX(-QUARTER_PI);

    let offset = 0;
    for (let z = 0; z < height; z += core) {

      for (let x = 0; x < width; x += core) {
        push();
        let d = dist(x, z, width / 2, height / 2);
        let offset = map(d, 0, maxD, -PI, PI);
        let a = angle + offset;
        let h = floor(map(sin(a), -1, 1, 100, 355));
        translate(x - width / 2, 0, z - height / 2);
        fill(random(20, 155), random(20, 155), random(20, 155));
        stroke(random(20, 155), random(20, 155), random(20, 155));
        box(core, h, core);

        // rect(x- width/2 + w/2, 0, w-2, h);
        pop();
      }
      offset += 0.1;

    }
    angle -= 0.075;
    pop();

    push();
    translate(0, 80, -200);
    rotateX(-2.26893);
    rotateZ(0.785398);
    rotateZ(-q * 0.5);
    // stroke('#1e1122');
stroke('#d74267');
    // fill('BlueViolet');
    fill(29, 23, 53);
    torus(width * 2, width + 10, 24, 4);
    pop();

    if (drop.y > 600) {
      ff = false;
      //core/center on puzzle
      drop = new Drop(0, -core / 2, core / 2, core);
      drop1 = new Drop(0, -core / 2, core / 2, core / 2);
      CU1 = new puzzleCUp(random(loc), random(loc), random(loc), core);
      CD1 = new puzzleCDown(random(loc), random(loc), random(loc), core);
      CU2 = new puzzleCUp(random(loc), random(loc), random(loc), core);
      Puzz1 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      Puzz2 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      CD2 = new puzzleCDown(random(loc), random(loc), random(loc), core);
      Puzz3 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      CU3 = new puzzleCUp(random(loc), random(loc), random(loc), core);
      CD2 = new puzzleCDown(random(loc), random(loc), random(loc), core);
      CD3 = new puzzleCDown(random(loc), random(loc), random(loc), core);
      Puzz4 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      Puzz5 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      CD5 = new puzzleCDown(random(loc), random(loc), random(loc), core);
      CU5 = new puzzleCUp(random(loc), random(loc), random(loc), core);
      Puzz4 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      Puzz5 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      CD6 = new puzzleCDown(random(loc), random(loc), random(loc), core);
      CD7 = new puzzleCDown(random(loc), random(loc), random(loc), core);
      Puzz6 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      Puzz7 = new puzzlePiece(random(loc), random(loc), random(loc), core);
      CU4 = new puzzleCUp(random(loc), random(loc), random(loc), core);
    }
  }
}

class puzzlePiece {

  constructor(x, y, z, size) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;

  }

  move(amountx, amounty, amountz) {
    this.x += amountx;
    this.y += amounty;
    this.z += amountz;
  }

  display() {
    // noFill();
    // fill(0);
    // stroke('#2e50b8');
    push();
    translate(this.x, this.y, this.z);
    box(this.size);
    pop();
  }
}


class puzzleCUp {

  constructor(x, y, z, size, rotateX, rotateY, rotateZ) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.rotateX = rotateX;
    this.rotateY = rotateY;
    this.rotateZ = rotateZ;
  }

  move(amountx, amounty, amountz) {
    this.x += amountx;
    this.y += amounty;
    this.z += amountz;
  }

  display() {
    // texture(w);
    // noFill();
    // stroke('BlanchedAlmond');
    // fill(0);
    // stroke('#4d804d');
    push();
    //corner left edge form voewers perspective
    translate(this.x, this.y, this.z);
    box(this.size);
    push();
    pop();
    //true corner
    push();
    translate(this.size, 0, 0);
    box(this.size);
    pop();
    //top box
    push();
    translate(this.size, -(this.size), 0);
    box(this.size);
    pop();
    //corner right edge facing viewer
    push();
    translate(this.size, 0, this.size);
    box(this.size)
    pop();
    pop();

  }
}

class puzzleCDown {

  constructor(x, y, z, size, rotateX, rotateY, rotateZ) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.rotateX = rotateX;
    this.rotateY = rotateY;
    this.rotateZ = rotateZ;
  }

  move(amountx, amounty, amountz) {
    this.x += amountx;
    this.y += amounty;
    this.z += amountz;
  }

  display() {
    // texture(w);
    // stroke('Peru');
    // fill(0);
    // stroke('MediumSlateBlue');
    push();
    //corner left edge form voewers perspective
    translate(this.x, this.y, this.z);
    box(this.size);
    push();
    translate(this.size, 0, 0);
    box(this.size);
    pop();
    push();
    translate(0, 0, -this.size);
    box(this.size);
    pop();
    push();
    translate(0, this.size, 0);
    box(this.size);
    pop();
    pop();

  }
}

class Drop {

  constructor(x, y, z, size) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;

  }

  move(amountx, amounty, amountz) {
    this.x += amountx;
    this.y += amounty;
    this.z += amountz;
  }

  display() {
    // noFill();
    // stroke(255);
    push();
    translate(this.x, this.y, this.z);
    // texture(w);
    box(this.size);
    pop();
  }
}

function Again() {

}

function handleKeyboard() {

  if (keyIsPressed) {

    let trigger = [ENTER, BACKSPACE, SHIFT, ALT, DELETE, TAB];

    if (key == 'a') {
      CD7.move(0, -10, 0);
      CD5.move(0, 0, 10);
    } else if (key == 'b') {
      CD6.move(0, 0, 10);
      CU4.move(0, -10, 0);
    } else if (key == 'c') {
      Puzz5.move(-10, 0, 10);
      CD4.move(0, 0, 10);
    } else if (key == 'd') {
      Puzz4.move(0, -10, 0);
      CD3.move(-10, 0, 0);
    } else if (key == 'e') {
      CU5.move(0, -10, 0);
      Puzz7.move(0, 10, 0);
    } else if (key == 'f') {
      Puzz3.move(-10, 0, -10);
      CU3.move(0, -10, 0);
    } else if (key == 'g') {
      CD3.move(10, 0, 0);
      Puzz2.move(10, 10, 0);
    } else if (key == 'g') {
      CD2.move(0, -10, 0);
    } else if (key == 'h') {
      Puzz2.move(-10, -10, 0);
    } else if (key == 'i') {
      Puzz1.move(10, 0, 0);
      CU2.move(-10, 10, 0)
    } else if (key == 'j') {
      CU2.move(10, -10, 0);
    } else if (key == 'k') {
      CD1.move(0, -10, 0);
    } else if (key == 'l') {
      CU1.move(0, -10, 0);
    } else if (key == 'm') {
      CD5.move(0, 10, 0);
    } else if (key == 'n') {
      Puzz1.move(-10, 0, 0)
    } else if (key == 'o') {
      CU4.move(0, 10, 0);
      Puzz3.move(10, 0, 10);
    } else if (key == 'p') {
      Puzz4.move(0, 10, 0);
    } else if (key == 'r') {
      Puzz5.move(10, 0, 110);
    } else if (key == 's') {
      CD2.move(0, 10, 0);
    } else if (key == 't') {
      Puzz6.move(0, -10, 0);
    } else if (key == 'u') {
      CD4.move(0, 0, -10);
    } else if (key == 'v') {
      CD5.move(0, -10, 0);
    } else if (key == 'w') {
      Puzz6.move(0, 10, 0);
    } else if (key == 'x') {
      CU3.move(0, 10, 0);
    } else if (key == 'y') {
      CD1.move(0, 10, 0);
    } else if (key == 'z') {
      CU1.move(0, 10, 0);
    } else if (keyCode == random(trigger)) {
      ff = true;
    }
  }
}






//reference from https://www.youtube.com/watch?v=H81Tdrmz2LA (Terrian Generation - Coding Challenge )


