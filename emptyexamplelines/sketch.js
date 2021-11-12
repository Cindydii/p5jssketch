

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(200)
  for(var y=200;y>50;y=y-4){
    line(y,mouseX,y+80,mouseY)
  }
  for(var x=40;x<600;x=x+5){
    line(x,mouseX,x-10,9+mouseY)
  }
}
