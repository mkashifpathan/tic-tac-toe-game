const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-game-btn");
const showWinnerContainer = document.querySelector(".show-winner-container");

let playerOTotalWinning = 0;
let playerXTotalWinning = 0;

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function resetGame() {
    turnO = true;
    showWinnerContainer.classList.add("hide");
    enableBox();
    
    boxes.forEach(box => {
        box.style.boxShadow = "none";
    });
    
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            console.log("clecked");
            box.style.boxShadow = "0 0 10px 3px #00aa00";
            box.style.color = "#00aa00";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.boxShadow = "0 0 10px 3px red";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

function disableBox() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function enableBox() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

function showWinner(winner) {
    showWinnerContainer.classList.remove("hide");
    document.querySelector(".winner-text span").innerText = winner;

    if (winner === "O") {
        playerOTotalWinning += 1;
        playerO.innerText = playerOTotalWinning;
    }
    else {
        playerXTotalWinning += 1;
        playerX.innerText = playerXTotalWinning;
    }
    disableBox();
}

function checkWinner() {
    for (let pattern of winPattern) {
        const position1 = boxes[pattern[0]].innerText;
        const position2 = boxes[pattern[1]].innerText;
        const position3 = boxes[pattern[2]].innerText;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);