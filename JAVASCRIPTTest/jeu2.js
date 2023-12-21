const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height; 
const boardBackground = "white";
const snakeColor = "lightgreen";
const foodColor = "red";
const unitSize = 25;
let running = false; 
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame); 

gameStart();

function gameStart() {
    running = true;
    scoreText.textContent = score;
    createFood(); 
    drawFood();
    nextTick();
}

function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard(); // Fixed the function name
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75);
    } else {
        displayGameOver();
    }
}

function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() { // Fixed the function name
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameHeight - unitSize);
}

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    };
    snake.unshift(head);
    if (snake[0].x === foodX && snake[0].y === foodY) { // Changed to comparison (===)
        score += 1;
    } else {
        snake.pop();
    }
}

function drawSnake() {
    ctx.fillStyle = snakeColor;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
}

function changeDirection() {
    const keyPressed = event.keyCode; // Changed to keyPressed
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = yVelocity === -unitSize; // Changed to comparison (===)
    const goingDown = yVelocity === unitSize; // Changed to comparison (===)
    const goingRight = xVelocity === unitSize; // Changed to comparison (===)
    const goingLeft = xVelocity === -unitSize; // Changed to comparison (===)

    switch (true) {
        case keyPressed === LEFT && !goingRight: // Fixed the condition
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        // Add cases for UP, RIGHT, and DOWN as needed.
    }
}

function checkGameOver() {

}

function displayGameOver() {
    
}

function resetGame() {
    
}
