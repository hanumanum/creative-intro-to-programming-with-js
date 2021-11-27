let step =  (2*Math.PI)/10 //Math.PI/3
let x0 = 400
let y0 = 400
let r = 200

function setup() {
    createCanvas(800, 800)
    background("black")
    /*
    beginShape()
    vertex(100,20)
    vertex(50,150)
    vertex(200,250)
    vertex(300,400)
    endShape(CLOSE)
    */

}

function draw() {

    background("black")
    noFill()
    stroke("white")
    beginShape()
    for (let t = 0; t < 4 * PI; t += 2*step) {
        let x = x0 + r * cos(t)
        let y = y0 + r * sin(t)
        vertex(x, y)
    }
    endShape(CLOSE)

    noLoop()
}


function sauron() {
    background("black")
    noFill()
    stroke("white")
    beginShape()
    for (let t = 0; t < 2 * PI; t += step) {
        let x = x0 + r * cos(t) + random(-10, 10)
        let y = y0 + r * sin(t) + random(-2, 2)
        vertex(x, y)
    }
    endShape()

    noLoop()
}