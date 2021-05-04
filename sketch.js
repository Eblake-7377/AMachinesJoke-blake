//building blocks
let Puzz1;
let Puzz2;
let Puzz3;
let puzz4;
let Puzz5;
//corners
let CU1;

let CD1;
////textures
// let w;

//puzzle pieces
let tab = 20;
let core = 35;

//Puzzle Piece cordnites
let p = 0;
let q = 0;
let r = 0

let x = 0;

function preload() {
  // w = loadImage('w.png');

}

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
  Puzz7 = new puzzlePiece(-core * 1.5, core, core * 2, core + x);
  
  //core/center on puzzle
  drop = new Drop(0, -core / 2, core / 2, core);
  drop1 = new Drop(0, -core / 2, core / 2, core / 2);


  //drop
  // WD = new Drop(core/2, core/2, 0, tab);
}

function draw() {
  background(0);

  ////the continuous rotation of puzzle
  p += 0.005;
  r += 0.005;
  rotateX(p);
  // rotateZ(r);
  q += -0.005;
  rotateY(q);





  // check the keyboard
  handleKeyboard();

  // draw the puzzle piece

  //core puzzle
  CU1.display();
  CD1.display();
  //outer layer
  CU2.display();
  Puzz1.display();
  Puzz2.display();
  CD2.display();
  CU3.display();
  Puzz3.display();
  CD3.display();
  CD4.display();
  CU4.display();
  CD5.display();
  CU5.display();
  Puzz7.display();
  drop.display();
  drop1.display();

  //if (CD1.x > 400) {
  // }
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
    noFill();
    stroke('#2e50b8');
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
    noFill();
    // stroke('BlanchedAlmond');
    stroke('#4d804d');
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
    noFill();
    stroke('Peru');
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
    // texture(w);
    noFill();
    stroke(255);
    push();
    translate(this.x, this.y, this.z);
    // texture(w);
    box(this.size);
    pop();
  }
}


//if keycode == ENTER 

//don't know if the move feature should be translate

function handleKeyboard() {

  if (keyIsPressed) {
    p = 5
    p += 2;

    if (key == 'a') {
      CD7.move(0, -10, 0);
      CD5.move(0, 0, 10);
    } else if (key == 'b') {
      CD6.move(0, 0, 10);
      CU4.move(0, 10, 0);

    } else if (key == 'c') {
      Puzz5.move(-10, 0, 10);
      CD4.move(0, 0, 10);

    } else if (key == 'd') {
      Puzz4.move(0, 10, 0);
      CD3.move(-10, 0, 0);

    } else if (key == 'e') {
      CU5.move(0, 10, 0);
    } else if (key == 'f') {
      x = 10;
    } else if (key == 'g') {

    } else if (key == 'h') {

    } else if (key == 'i') {

    } else if (key == 'j') {
      Puzz3.move(-10, 0, -10);
    } else if (key == 'k') {
      CU3.move(0, 10, 0);
    } else if (key == 'l') {
      CD2.move(0, -10, 0);
    } else if (key == 'm') {
      Puzz2.move(0, -10, 0);
    } else if (key == 'n') {
      Puzz1.move(10, 0, 0);
    } else if (key == 'o') {
      CU2.move(10, 10, 0);
    } else if (key == 'p') {
      CD1.move(0, -10, 0);
    } else if (key == 'q') {
      CU1.move(0, 10, 0);
    } else if (key == 'z') {
      WD.move(0, p, 0);
    } else if (key = ENTER === true) {
      drop1.move();
      drop2.move();
    }

  }
}


//reference from https://www.youtube.com/watch?v=IKB1hWWedMk (Terrian Generation with Perlin)