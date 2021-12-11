class Bullet {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.l = 5
        this.clr = "violet"
        this.d = 2
    }

    show() {
        fill(this.clr)
        ellipse(this.x, this.y, this.l * 2)
    }

    fire() {
        this.x += this.d
    }
}