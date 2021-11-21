let count = 500 
let xS = []
let yS = []
let clr = []
let vel = []
let d = 25

function setup() {
    createCanvas(1000, 800)
    background("black")
    
    for(let i=0; i<count; i++){
        xS.push(random(10,990))
        yS.push(random(10,100))
        clr.push(getRandomColor())
        vel.push(random(1,4))
    }
}

function draw() {
    background("black")
    yS = incimentArray(yS, vel)

    for (let i = 0; i < xS.length; i++) {
        fill(clr[i])
        ellipse(xS[i], yS[i], d)
    }
}

function incimentArray(arr, vel){
    for(let i=0; i<arr.length; i++){
        arr[i]+=vel[i]
    }
    return arr;
}

function getRandomColor() {
    let r = int(random(0, 255))
    let g = int(random(0, 255))
    let b = int(random(0, 255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;

}
