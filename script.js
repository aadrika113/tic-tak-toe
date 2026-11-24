let cells = document.querySelectorAll(".cell");
let player = "X";
let gameOver = false;

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function play(index) {

    if (cells[index].innerText == "" && gameOver == false) {

        cells[index].innerText = player;

        let win = false;

        for (let i = 0; i < winningPatterns.length; i++) {

            let a = winningPatterns[i][0];
            let b = winningPatterns[i][1];
            let c = winningPatterns[i][2];

            if (
                cells[a].innerText == player &&
                cells[b].innerText == player &&
                cells[c].innerText == player
            ) {
                win = true;
                break;
            }
        }

        if (win == true) {

            document.getElementById("message").innerText =
                "Player " + player + " Wins!";

            gameOver = true;
        }

        else {

            let count = 0;

            for (let i = 0; i < 9; i++) {
                if (cells[i].innerText != "") {
                    count++;
                }
            }

            if (count == 9) {
                document.getElementById("message").innerText = "Match Draw!";
                gameOver = true;
            }

            else {

                if (player == "X") {
                    player = "O";
                }
                else {
                    player = "X";
                }

                document.getElementById("message").innerText =
                    "Player " + player + "'s Turn";
            }
        }
    }
}

function restart() {

    for (let i = 0; i < 9; i++) {
        cells[i].innerText = "";
    }

    player = "X";
    gameOver = false;

    document.getElementById("message").innerText = "Player X's Turn";
}
