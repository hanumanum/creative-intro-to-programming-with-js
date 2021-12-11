let w = 500
let h = 400
let enemyNumber = 10
let enemies = []
let player = new Player(50, h / 2, 100, "red")
let enemy = new Enemy(400, h / 3, 20, "blue")

function setup() {
    createCanvas(w, h)
    background("black")
    for (let i = 0; i < enemyNumber; i++) {
        let e = new Enemy(random(w / 2, w)
                                      , random(0, h)
                                      , random(2, 6)
                                      , getRandomColor()
                                      , random(1, 2))
                                      
        enemies.push(e)
    }
}

function draw() {
    background("black")
    player.show()
    player.fire()

    
    if(isAnyEnemyPassed(enemies)){
        background("black")
        textSize(50)
        text("GAME OVER", 50, 220)
        noLoop()
    }
    

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].attack()
        enemies[i].show()
    }

}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        player.moveUp()
    }

    if (keyCode == DOWN_ARROW) {
        player.moveDown()
    }

    if(keyCode == 32){    //Backspace
        player.addBullet()
    }
}


function isAnyEnemyPassed(enemies){
    for(let i=0; i<enemies.length; i++){
        if(enemies[i].x<=0){
            return true
        }
    }
    return false
}