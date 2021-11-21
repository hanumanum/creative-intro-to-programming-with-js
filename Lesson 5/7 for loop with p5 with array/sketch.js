let xS = [50, 20, 30, 100, 120, 300, 450, 600, 500, 650, 730, 830]
let yS = [60, 100, 300, 150, 380, 150, 400, 100, 50, 300, 500, 50]
let d = 50


function setup() {
    createCanvas(1000, 800)
    background("black")

    for(let i=0; i<xS.length; i++){
        fill(getRandomColor())
        ellipse(xS[i], yS[i], d)
        fill("black")
        text(i, xS[i], yS[i])
    }

}

function draw() {

}

function getRandomColor() {
    let r = int(random(0, 255))
    let g = int(random(0, 255))
    let b = int(random(0, 255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;

}