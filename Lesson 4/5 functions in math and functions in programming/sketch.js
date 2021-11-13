//Math.sin()֊ի օրինակի վրա բացատրել https://duckduckgo.com/?q=sin+in+radians+table&t=canonical&iax=images&ia=images&iai=https%3A%2F%2Fmathvox.com%2Fwp-content%2Fuploads%2F2018%2F11%2Ftrigonometry_basic-72.png
//Վերադարձի (return) գաղափարը դրսից
//Ստեղծում եմ ֆունկցիան, random int-երով ապա վերադարձնում եմ տող return `rgb(${r}, ${g}, ${b})`; 

let h

function setup() {
    createCanvas(500, 500)
    let c =  getRandomColor()
    background(c)
    noStroke()
    frameRate(10)

    h = random(100,200)
    getRandomColor()
}

function draw() {
    let c =  getRandomColor()
    fill(c)
    rect(100,200,50,174)     

}

function getRandomColor(){
    let r =  int(random(0,255))
    let g = int(random(0,255))
    let b = int(random(0,255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;

}