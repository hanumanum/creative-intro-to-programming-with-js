let w = 1200
let h = 800

let el = {
    x: w / 2,
    y: h / 2,
    d1: 150,
    d2: 80,
    color: "red",
    stroke: true,
    strokeWeight:2,
    strokeColor:"white"
}

function setup() {
    createCanvas(w, h)
    background("black")

}

function draw() {
    background("black")
    
    if(el.stroke){
        stroke(el.strokeColor)
        strokeWeight(el.strokeWeight)
    }
    else{
        noStroke()
    }

    fill(el.color)
    ellipse(el.x, el.y, el.d1, el.d2)
}


function mousePressed() {
    //mouseX, mouseY
}

function mouseReleased() {

}

function mouseClicked() {

}


function mouseMoved() {

}

function doubleClicked() {

}


function mouseDragged() {

}


function mouseWheel() {

}


//mouseX, mouseY, 
//pmouseX, pmouseY
//movedX, movedY

