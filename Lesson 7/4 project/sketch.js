let number = 3

function setup() {
    createCanvas(800, 800)
    noFill()
    stroke("white")
    frameRate(5)
}

function draw() {
    background("black")
    drawMandala(400, 400, 200, number)
    number++
}



function drawMandala(x, y, r, number){
    
    let step = 2*PI / number
    for(let t=0; t<2*PI; t+=step){
        let  xc = x + (r/2)*cos(t)
        let  yc = y + (r/2)*sin(t)
        ellipse(xc, yc, r)
    }
      
}