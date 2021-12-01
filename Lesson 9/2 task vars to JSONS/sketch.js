//Change this to JSON object

let W = 800
let H = 800
 
let x = 0
let y = 0
let h = 150
let w = 300
let s = 1
let clr = "violet"

let x1 = 10
let y1 = 0
let h1 = 300
let w1 = 100
let s1 = 2 
let clr1 = "red"

let x2 = 13
let y2 = 0
let h2 = 80
let w2 = 160
let s2 = 3
let clr2 = "white"

function setup() {
    createCanvas(W, H)

}

function draw() {
    background("black")

    fill(clr)
    strokeWeight(s)
    rect(x, y, w, h)
    
    fill(clr1)
    strokeWeight(s1)
    rect(x1, y1, w1, h1)

    strokeWeight(s2)
    fill(clr2)
    rect(x2, y2, w2, h2)

    x++
    x1++
    x2++

    y++
    y1+=0.5
    y2+=0.3
}