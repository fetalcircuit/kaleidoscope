var n = 29; //change for number of pics
var imgMask = [n];
var img = [n];
var imgR1, imgR2, imgR3, imgR4, imgR5;
var angle = 0;
var r1, r2, r3, r4, r5;

function preload() {
  for (var i = 0; i <= n; i++) {
    img[i] = loadImage("imgs/" + i + ".png");
  }
  for (var j = 0; j <= n; j++) {
    imgMask[j] = loadImage("imgs/" + j + ".png");
  }
}

function setup() {
  //createCanvas(1024, 648);
  createCanvas(windowWidth, windowHeight);

  imgR1 = int(random(n));
  imgR2 = int(random(n));
  imgR3 = int(random(n));
  imgR4 = int(random(n));
  imgR5 = int(random(n));

  img[imgR1].mask(imgMask[int(random(n))]);
  img[imgR2].mask(imgMask[int(random(n))]);
  img[imgR3].mask(imgMask[int(random(n))]);
  img[imgR4].mask(imgMask[int(random(n))]);
  img[imgR5].mask(imgMask[int(random(n))]);

  imageMode(CENTER);

  r1 = random(-1.2, 1.2);
  r2 = random(-1.2, 1.2);
  r3 = random(-1.2, 1.2);
  r4 = random(-1.2, 1.2);
  r5 = random(-1.2, 1.2);
}

function draw() {
  //background(100, 100);
  translate(width / 2, height / 2);

  var w = (width * 1.5);
  var h = (width * 1.5);

  rotate(radians(angle*r1));
  image(img[imgR1], 0, 0, w, h);

  rotate(radians(angle*r2));
  image(img[imgR2], 0, 0, w, h);

  rotate(radians(angle*r3));
  image(img[imgR3], 0, 0, w, h);

  rotate(radians(angle*r4));
  image(img[imgR4], 0, 0, w, h);

  //rotate(radians(angle*r5));
  //image(img[imgR5], 0, 0, w, h);

  angle++;
}

function mousePressed() {
  setup();
}
