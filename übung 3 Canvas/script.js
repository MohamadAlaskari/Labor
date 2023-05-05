const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const start = document.getElementById('start')
const ballNr = document.getElementById('ballNr').value
var nr = 1;


// ToDo: All diese Variablen (+ die Funktionen hierunter) die mit dem Ball zu tun haben, "schreien" danach, in ein Objekt verpackt zu werden...

let ballDia = 20;
let ballColor = "#ff0000";
let ballX = (Math.random() * (canvas.width - ballDia)) + ballDia; //erledigt ToDo: Die Startposition sollte zufällig sein
let ballY = (Math.random() * (canvas.height - ballDia)) + ballDia; //erledigt ToDo: Die Startposition sollte zufällig sein
let ballSpeed = 5;
let ballVx = Math.random() > 0.5 ? 1 : -1; //erledigt ToDo: Der Ball sollte sich mit der Geschwindigkeit ballSpeed in eine zufällige Richtung bewegen, d.h. die Geschwindigkeit in x-Richtung (ballVx)
let ballVy = Math.random() > 0.5 ? 1 : -1; //erledigt und y-Richtung (ballVy) sollten Sie aus ballSpeed und einem zufälligen Richtungswinkel berechnen (--> VL was sie unbedingt über TRIGONOMETRIE WISSEN SOLLTEN)

function moveBall() {
    ballX += ballSpeed * ballVx;
    ballY += ballSpeed * ballVy;

    //erledigt ToDo: Hier testen, ob der Ball das Feld verlässt und dann dafür sorgen, dass er korrekt vom Rand "apprallt", ohne den Rand zu überschreiten
    if (ballX <= ballDia / 2 || ballX >= canvas.width - ballDia / 2) {
        ballVx = -ballVx
    }
    if (ballY < ballDia / 2 || ballY > canvas.height - ballDia / 2) {
        ballVy = -ballVy
    }

}

function clearCanvas(bg = "white") {
    context.fillStyle = bg;
    console.log(context.fillStyle);
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBall(x, y, color) {
    //erledigt ToDo: dies zeichnet einen schwarzen Würfel, damit Sie erstmal was sehen, es sollte aber ein Kreis in der Farbe des Balles sein... und später vielleicht ein Bild von eim Ball...


    context.beginPath();
    context.arc(x, y, ballDia / 2, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.closePath();

}

function gameLoop() {
    start.addEventListener('click', () => {
        nr = ballNr.value
    })
    clearCanvas();
    drawBall(ballX, ballY, ballColor);
    moveBall();

    requestAnimationFrame(gameLoop);



}

gameLoop(); // Start 