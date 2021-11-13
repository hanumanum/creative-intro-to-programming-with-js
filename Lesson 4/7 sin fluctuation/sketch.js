let x = 200
let y = 300
let d1 
let d2 
let r

function setup(){
    createCanvas(500,500)
    frameRate(30)
}

function draw(){
    d1 = map(sin(frameCount/10),  -1, 1 ,0, 500)
    d2 = map(cos(frameCount/10),  -1, 1 ,0, 500)
    r = map(sin(frameCount/10),  -1, 1 ,0, 255)
    g = map(cos(frameCount/10),  -1, 1 ,0, 255)
    b = map(sin(frameCount/15),  -1, 1 ,0, 255)

    background("green")
    fill(r, g, 0)
    ellipse(x, y,d1, d2 )
}