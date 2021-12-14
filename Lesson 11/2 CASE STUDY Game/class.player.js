class Player {
    constructor(x, y, l, clr) {
        this.x = x
        this.y = y
        this.l = l
        this.clr = clr
        this.d = 50
        this.bullets = []
        this.movingDir = -2
    }

    show() {
        this.y += this.movingDir
        this.y = constrain(this.y, 0, 400)
        fill(this.clr)
        triangle(this.x, this.y, this.x - this.l, this.y - this.l / 2, this.x - this.l, this.y + this.l / 2)
    }

    moveUp() {
        this.movingDir = -2
    }

    moveDown() {
        this.movingDir = 2
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