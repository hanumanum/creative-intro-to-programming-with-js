let xC = 500
let yC = 250
let d = 150
let d1 = 250
let d2 = 170

function setup() {
    createCanvas(1000, 500)
    background("black")
    noStroke()
}


function draw() {
    

    let x = xC + d1 * cos(frameCount/100)
    let y = yC + d2 * sin(frameCount/100)

    let r = map(x, xC - d / 2, xC + d / 2, 0, 255)
    let b = map(y, yC - d / 2, yC + d / 2, 0, 255)
    fill(r, 0, b)


    ellipse(x, y, d / 4)

    //stroke("white")
    //line(xC, yC, x, y)
}