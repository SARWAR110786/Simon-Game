let gameSeq = [];
let userSeq = [];
let h3 = document.querySelector("h3")
let started = false;
let level = 0;
let btn = ["green", "purple", "yellow", "red"];
let highScore = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
    };
    levelUp();
});


function btnFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250)
}
function levelUp() {
    userSeq = []
    level++;
    h3.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random() * 4);
    let randcolorbtn = btn[randIdx];
    let randBtn = document.querySelector(`.${randcolorbtn}`);
    gameSeq.push(randcolorbtn);
    console.log(gameSeq);

    btnFlash(randBtn);

}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
           setTimeout(levelUp, 1000)
        }
    } else {
        h3.innerHTML = `game over! your score <b>${level}</b> <br> please press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"
            highScore = level
        }, 150);
        high()
        reset()
    } 
}

function btnPress() {
    let btn = this
    userFlash(btn);
    let user = this.getAttribute("id")
    userSeq.push(user)

    checkAns(userSeq.length-1)
    console.log(highScore);
}

let allBtn = document.querySelectorAll(".btn")
for (btns of allBtn) {
    btns.addEventListener("click", btnPress);
}

function reset (){
    started = false
    userSeq = []
    gameSeq = []
    level = 0
}
function high (){
    if(highScore >= level){
        document.querySelector("#score").innerText= `Your High Score is ${level}`
    }
}