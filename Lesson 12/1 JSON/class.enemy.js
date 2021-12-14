class Enemy {
    constructor(x, y, l, clr, d) {
        this.x = x
        this.y = y
        this.l = l
        this.clr = clr
        this.d = d
    }

    show() {
        fill(this.clr)
        ellipse(this.x, this.y, this.l*2 + sin(frameCount/100)*15)
    }

    attack(){
        this.x -= this.d
    }

}