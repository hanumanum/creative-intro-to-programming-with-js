let w = 800
let h = 400
let enemyNumber = 10
let enemies = []
let score = 0
let player = new Player(50, h / 2, 100, "red")

function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {
    if(enemies.length == 0){
        creatNewEnemiesSet()
    }


    background("black")
    
    textSize(10)
    text(score, 50, 50)

    player.show()
    player.fire()


    if (isAnyEnemyPassed(enemies)) {
        background("black")
        textSize(50)
        text("GAME OVER", 50, 220)
        noLoop()
    }

    if (score > 10) {
        background("black")
        textSize(50)
        text("YOU ARE WINNER", 50, 220)
        noLoop()
    }

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].attack()
        enemies[i].show()
    }

    checkCollisions(enemies, player.bullets, 10)
    removeOutsiderBullets(player.bullets)
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        player.moveUp()
    }

    if (keyCode == DOWN_ARROW) {
        player.moveDown()
    }

    if (keyCode == 32) {    //Backspace
        player.addBullet()
    }
}


function isAnyEnemyPassed(enemies) {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].x <= 0) {
            return true
        }
    }
    return false
}

function checkCollisions(enemies, bullets, sensitivity) {
    for (let i = 0; i < enemies.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            let enemy = enemies[i]
            let bullet = bullets[j]

            if(enemy!=undefined &&  bullet!=undefined){
 
                if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < sensitivity) {
                    score++
                    enemies.splice(i, 1)
                    bullets.splice(j, 1)
                }
 
            }
 
        }
    }
}

function removeOutsiderBullets(bullets){
    for(let i=0; i<bullets.length; i++){
        if(bullets[i].x > w){
            bullets.splice(i, 1)
        }
    }
}

function creatNewEnemiesSet(){
    for (let i = 0; i < enemyNumber; i++) {
        let e = new Enemy(random(w-20, w)
            , random(0, h)
            , random(5, 10)
            , getRandomColor()
            , random(1,2))

        enemies.push(e)
    }
}