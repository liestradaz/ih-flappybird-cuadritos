const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = 600
        this.canvas.height = 600
        this.context = this.canvas.getContext("2d")
        document.body.appendChild(this.canvas)
        this.interval = setInterval(updateGameArea,20)
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
}

const updateGameArea = () => {
    myGameArea.clear()
    player.newPos()
    player.update()
}

class Component{ 
    constructor(width,height,color, x,y){
        this.width = width
        this.height = height
        this.color = color
        this.x = x
        this.y = y
        this.speedX = 0
        this.speedY = 0
    }

    update(){
        const ctx = myGameArea.context
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
        
    }

    newPos(){
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.x <= -50){
            this.x = 600
        } else if(this.x >= 600){
            this.x = -50
        } else if(this.y <= -50){
            this.y = 600
        } else if (this.y >= 600){
            this.y = -50
        }

        if (this.x <= -1 || this.x >= 550){
            console.log("crash")
        } else if (this.y <= -1 || this.y >= 551){
            console.log("crash")
        }

    }
}


myGameArea.start()
const player = new Component(50,50, "blue", 250, 250)


document.addEventListener("keydown", (e) => {

    switch(e.key){
        case "ArrowUp":
            player.speedY -= 1
            break
        case "ArrowDown":
            player.speedY += 1
            break 
        case "ArrowLeft":
            player.speedX -= 1
            break
        case "ArrowRight":
            player.speedX += 1
            break
        default:
            break

    }
})

document.addEventListener("keyup",() => {
    player.speedX = 0
    player.speedY = 0
})