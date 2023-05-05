const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const BallNr = document.getElementById('ballNr')
const add = document.getElementById('add')
const remove = document.getElementById('remove')
var ballsnum = 1

let balls = []

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//teil erlediht  ToDo: All diese Variablen (+ die Funktionen hierunter) die mit dem Ball zu tun haben, "schreien" danach, in ein Objekt verpackt zu werden...
class Ball {
    constructor() {
        this.diameter = 20
        this.color = getRandomColor()
        this.x = Math.random() * (canvas.width - this.diameter)
        this.y = Math.random() * (canvas.height - this.diameter)
        this.speed = 5
        this.vx = Math.random() > 0.5 ? 1 : -1
        this.vy = Math.random() > 0.5 ? 1 : -1
    }




    moveBall() {
        this.x += this.speed * this.vx;
        this.y += this.speed * this.vy;
        //erledigt ToDo: Hier testen, ob der Ball das Feld verlässt und dann dafür sorgen, dass er korrekt vom Rand "apprallt", ohne den Rand zu überschreiten
        if (this.x <= this.diameter / 2 || this.x >= canvas.width - this.diameter / 2) {
            this.vx = -this.vx
        }
        if (this.y < this.diameter / 2 || this.y > canvas.height - this.diameter / 2) {
            this.vy = -this.vy
        }
    }
    drawBall() {
        //erledigt ToDo: dies zeichnet einen schwarzen Würfel, damit Sie erstmal was sehen, es sollte aber ein Kreis in der Farbe des Balles sein... und später vielleicht ein Bild von eim Ball...
        context.beginPath();
        context.arc(this.x, this.y, this.diameter / 2, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }
}
function clearCanvas(bg = "white") {
    context.fillStyle = bg;
    console.log(context.fillStyle);
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function creatball() {
    balls.push(new Ball())
    console.log(balls)
}

const addlistiner = () => {
    add.addEventListener('click', () => {
        ballsnum += 1
        BallNr.innerHTML = ballsnum;
        creatball();
    })


}
function removelistiner() {
    remove.addEventListener('click', () => {
        if (ballsnum !== 0) {
            ballsnum -= 1
            BallNr.innerHTML = ballsnum;
            balls.pop()
        }


    })

}




function gameLoop() {
    clearCanvas();
    balls.forEach(ball => {
        ball.drawBall();
        ball.moveBall();
    })
    requestAnimationFrame(gameLoop);
}

function app() {
    addlistiner();
    removelistiner();
    BallNr.innerHTML = ballsnum;
    creatball(ballsnum)
    gameLoop()

}
app()

