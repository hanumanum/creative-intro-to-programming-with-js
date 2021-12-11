class Bullet {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.l = 5
        this.d = 2
    }

    show() {
        fill(getRandomColor())
        ellipse(this.x, this.y, this.l * 2)
    }

    fire() {
        this.x += this.d
    }
}