var img
function preload(){
    img=loadImage("network.svg")
}

function setup(){
    createCanvas(480,240)
}

function draw(){
    image(img,0,0)
}
