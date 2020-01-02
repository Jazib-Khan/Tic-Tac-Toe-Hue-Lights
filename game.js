function startGame() {

            for (var i = 1; i <= 9; i = i + 1 ) {
                clearBox(i);
            }

            document.turn = "X";
            if (Math.random() < 0.5) {
                document.turn = "O";
            }
            document.winner = null;
            setMessage(document.turn + " gets to start.");

        }

        function setMessage(msg){
            document.getElementById("message").innerText = msg;
        }

        function nextMove(square){
            if (document.winner != null) {
                setMessage(document.winner + " already won the game.");
            } else if (square.innerText == ""){
                square.innerText = document.turn;
                switchTurn();
            } else {
                setMessage("That square is already used.");
            }
        }

        function switchTurn() {

            if (checkForWinner(document.turn)) {
                setMessage("Congratulations, " + document.turn + "! You win!");
                document.winner = document.turn;
            } else if (document.turn == "X") {
                document.turn = "O";
                setMessage("It's " + document.turn + "'s turn!");
                color(apiURL4, 20, [0.7,0.3])
                color(apiURL5, 20, [0.7,0.3])
                color(apiURL6, 20, [0.7,0.3])
                color(apiURL, 140, [0.1,0.1])
                color(apiURL2, 140, [0.1,0.1])
                color(apiURL3, 140, [0.1,0.1])

            } else {
                document.turn = "X";
                setMessage("It's " + document.turn + "'s turn!");
                color(apiURL, 20, [0.1,0.1])
                color(apiURL2, 20, [0.1,0.1])
                color(apiURL3, 20, [0.1,0.1])
                color(apiURL4, 140, [0.4,0.5])
                color(apiURL5, 140, [0.4,0.5])
                color(apiURL6, 140, [0.4,0.5])
            }
        }

        function checkForWinner(move){
            var result = false;
            if (checkRow(1, 2, 3, move) || 
                checkRow(4, 5, 6, move) ||
                checkRow(7, 8, 9, move) ||
                checkRow(1, 4, 7, move) ||
                checkRow(2, 5, 8, move) ||
                checkRow(3, 6, 9, move) ||
                checkRow(1, 5, 9, move) ||
                checkRow(3, 5, 7, move)) {

                result = true;
            }
            return result;
        }

        function checkRow(a, b, c, move) {
            var result = false;
            if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
                result = true;
            }
            return result;
        }

        function getBox(number) {
            return document.getElementById("s" + number).innerText;
        }

        function clearBox(number) {
            document.getElementById("s" + number).innerText = "";
        }