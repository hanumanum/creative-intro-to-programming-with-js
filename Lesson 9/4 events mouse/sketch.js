let w = 1200
let h = 800

let points = []

let el = {
    x: w / 2,
    y: h / 2,
    xP:w / 2,
    yP:h/2,
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


    for(let i=0; i < points.length; i++){
        fill("blue")
        ellipse(points[i].x, points[i].y, 5)
    }
}


function mousePressed() {
    //mouseX, mouseY
    console.log(mouseX, mouseY)
    el.xP = el.x
    el.yP = el.y
    el.x = mouseX
    el.y= mouseY

}

function mouseReleased() {
    el.x = pmouseX 
    el.y = pmouseY 
}

function mouseClicked() {
    
}

function mouseMoved() {

}

function doubleClicked() {

}


function mouseDragged() {
    points.push({
        x:mouseX,
        y:mouseY
    })
}


function mouseWheel() {

}


//mouseX, mouseY, 
//pmouseX, pmouseY
//movedX, movedY

