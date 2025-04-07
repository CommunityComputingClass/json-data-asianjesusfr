let data;
let m = 0
let y = 100

function preload() {
  data = loadJSON("flower.json");
}

function setup() {
  createCanvas(400, 400);
  background(200);
  
  let flowers = data.flowers;
 
  for(let m=0; m<4; m++){
  fill(flowers[m].r,flowers[m].g,flowers[m].b);
  ellipse(150,y,150,150);
  stroke(0);
  textSize(22);
  text(flowers[m].name, 100, y);
  y=y+75
  }
}