let rs = []
let xs = []
let ys = []
let clrs = []

function setup() {
    createCanvas(500, 500)
     frameRate(10)
}

function draw() {

}

function getRandomColor(){
    let r =  int(random(0,255))
    let g = int(random(0,255))
    let b = int(random(0,255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;
}