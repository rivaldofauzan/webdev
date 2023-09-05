const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus')
let counter = 0;
let jumpCounter = 0;
document.addEventListener('keydown', function () {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
        jumpCounter += 1;
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 300);
};

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER! your score = " + counter + " total jumps = " + jumpCounter);
        counter = -1;
    }

}, 10);

let count = setInterval(function () {
    counter += 1;
    document.querySelector('.counter').innerHTML = "score: " + counter;
}, 2000);
