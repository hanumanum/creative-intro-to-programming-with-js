let w = 800
let h = 800

//Change this to JSON object 

let x = 400
let y = 400
let r = 150
let clr = "violet"

let x1 = 400
let y1 = 400
let r1 = 80
let clr1 = "red"

let x2 = 200
let y2 = 560
let r2 = 80
let clr2 = "white"

function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {
    background("black")

    fill(clr)
    ellipse(x, y, r)
    
    fill(clr1)
    ellipse(x1, y1, r1)

    fill(clr2)
    ellipse(x2, y2, r2)

    x++
    x1++
    x2++
}