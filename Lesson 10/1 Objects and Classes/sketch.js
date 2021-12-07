let w = 800
let h = 800

//Change this to CLASS object 

class Circle{
    constructor(x, y, r, clr){
        this.x = x
        this.y = y
        this.r = r
        this.clr = clr
    }

    moveX(step){
        this.x+=step
    }

    decreseRadius(){
        this.r--
    }
    
    draw(){
        fill(this.clr)
        ellipse(this.x, this.y, this.r*2)
    }

}

let c1 = new Circle(100,200,150,"red")

function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {
    background("black")
    c1.moveX(-1)
    c1.decreseRadius()
    c1.draw()
}