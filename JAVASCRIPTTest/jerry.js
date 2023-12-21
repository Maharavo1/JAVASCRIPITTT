const tom = document.getElementById("tom");
const jerry = document.getElementById("jerry");
const trap = document.getElementById("trap");
const scoreDisplay = document.querySelector("#score span");

let score = 0;
let isJumping = false;

document.addEventListener("keydown", jump);

function jump(event) {
    if (event.keyCode === 13 && !isJumping) {
        isJumping = true;
        jerry.classList.add("jump");
        setTimeout(() => {
            jerry.classList.remove("jump");
            isJumping = false;
        }, 500); // Ajustez la durée du saut selon vos besoins
    }
}

function checkCollision() {
    const tomTop = parseInt(window.getComputedStyle(tom).getPropertyValue("top"));
    const jerryLeft = parseInt(window.getComputedStyle(jerry).getPropertyValue("left"));
    const trapLeft = parseInt(window.getComputedStyle(trap).getPropertyValue("left"));

    if (jerryLeft >= trapLeft && jerryLeft <= trapLeft + 50 && tomTop >= 150) {
        // Jerry attrapé, vous pouvez ajuster la logique ici
        score += 1;
        scoreDisplay.textContent = score;
    }

    requestAnimationFrame(checkCollision);
}

checkCollision();
