let x1 = 100, y1 = 150
let x2 = 200, y2 = 750
let cx1 = 100, cy1 = 100
let cx2 = 500, cy2 = 50

function setup() {
    createCanvas(800, 800)
    background("black")

}

function draw() {
    cx1 = mouseX
    cy1 = mouseY

    background("black")
    noFill()
    stroke("white")
    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);


    noStroke()
    fill("red")
    ellipse(x1, y1, 8)
    ellipse(x2, y2, 8)

    //Control Points
    fill("blue")
    ellipse(cx1, cy1, 8)
    ellipse(cx2, cy2, 8)

    //Curve Start and End Points
    stroke("green")
    line(x1, y1, cx1, cy1)
    line(x2, y2, cx2, cy2)

}