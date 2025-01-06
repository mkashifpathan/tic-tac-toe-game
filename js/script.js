const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-game-btn");

let turnO = true;

const winPattern = [
    [0, 1, 3],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            console.log("clecked");
            box.style.color = "green";
            disableBox(box);
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            disableBox(box);
            turnO = true;
        }
    })
})

function disableBox(box) {
    box.disabled = true;
}

function enableBox(box) {
    box.disabled = false;
}

function showWinner() {
    
}