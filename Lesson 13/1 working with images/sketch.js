const w = 1000
const h = 800
let img
let initSize = 200
//loadImage(), resize(), image(), imageMode(CENTER)

function preload(){
    img = loadImage("snowflake 1.png")
}

function setup(){
    createCanvas(w, h)
    imageMode(CENTER)
}

function draw(){
    background('black')
    img.resize(initSize, 0)
    image(img, 100, 200) 
    //initSize+=4
}