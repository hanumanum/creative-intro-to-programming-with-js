let x = 500
let y = 400
let rs = [150, 250, 125, 170, 200, 351]

function setup() {
    createCanvas(1000, 800)
    background("black")
    noFill()
    stroke("white")
    for (let i = 0; i < rs.length; i++) {
        ellipse(x, y, rs[i]) 
    }

}


function draw() {

}

