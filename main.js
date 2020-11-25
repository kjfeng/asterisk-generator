var img;
var x = 0;
var imgArr = [];
var NUM_OF_ASTS = 11;
var canvas;


function preload() {
  for (let i = 0; i < NUM_OF_ASTS; i++) {
    let file = "img/s" + i + ".svg";
    imgArr.push(loadImage(file));
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = ((windowHeight - height) / 2) * 0.5;
  canvas.position(x, y, 'relative');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-div');
  centerCanvas();
  noLoop();
}

function place() {
  translate(width/2, height/2);
  for (let i = 0; i < 8; i++) {
    rotate(PI / 180 * (i*45));
    let ind = Math.floor(Math.random() * NUM_OF_ASTS);
    let spoke = imgArr[ind];
    image(spoke, -spoke.width/2, -spoke.height);
  }
}

function draw() {
  place();
  // x+= PI / 180 * (10)
  // translate (width/2, height/2);
  // rotate(x);
  // image(img, 0, 0, 150, 150);
}

function windowResized() {
  centerCanvas();
}

function downloadImg() {
  saveCanvas('asterisk', 'png');
}

function showLoader() {
  setTimeout(togglePage, 500);
}

function togglePage() {
  document.getElementById("loader-container").style.display = "none";
  document.getElementById("bod").style.display = "block";
}
