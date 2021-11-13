// P5 math 
// interesting functions random(), map(), dist()

let d = 10
let x
let y

let x1 =200
let y1 = 150
let x2 = 300
let y2 = 250   

function setup() {
    createCanvas(500, 400)
    frameRate(10)
    x = random(100, 400)
    y = random(100, 300)
    //map()
    //constrain()
    //random()
    //dist()
    //mouseX, mouseY
}

function draw(){
    background("green")
    ellipse(mouseX, mouseY, d)
    d++
    d = constrain(d, 20, 100)

    line(0,0, mouseX, mouseY)
    let dis = dist(0,0, mouseX, mouseY)
    text(ceil(dis), mouseX, mouseY)
}