let x = 500
let y = 400
let d = 10

function setup() {
    createCanvas(1000, 800)
    background("black")
    stroke("white")
    noFill()
    /*
    ellipse(x, y, d)
    ellipse(x, y, d+ 10)
    ellipse(x, y, d+ 20)
    ellipse(x, y, d+ 30)
    ellipse(x, y, d+ 40)
    ellipse(x, y, d+ 50)
    */

    /* i-ով կազմակերպված է իտերացիաների քանակը
    for(let i=0; i<10; i++){
        ellipse(x, y, d)
        d+=10
    }
    */
    for (let i = 10; i < 250; i += 20) {
        ellipse(x, y, i)
    }
}


function draw() {

}

