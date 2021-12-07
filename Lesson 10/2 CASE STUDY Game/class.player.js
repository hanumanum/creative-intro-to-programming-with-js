class Player {
    constructor(x, y, l, clr) {
        this.x = x
        this.y = y
        this.l = l
        this.clr = clr
        this.d = 50
        this.bullets = []
    }

    show() {
        fill(this.clr)
        triangle(this.x, this.y, this.x - this.l, this.y - this.l / 2, this.x - this.l, this.y + this.l / 2)
    }

    moveUp() {
        this.y -= this.d
        this.y = constrain(this.y, 0, 400)
    }

    moveDown() {
        this.y += this.d
        this.y = constrain(this.y, 0, 400)
    }

    fire() {
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].fire()
            this.bullets[i].show()
        }
    }

    addBullet() {
        let bullet = new Bullet(this.x, this.y)
        this.bullets.push(bullet)
    }

}