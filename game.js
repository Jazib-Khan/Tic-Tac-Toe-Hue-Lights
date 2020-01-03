// function tells us who's turn it is
function startGame() {

            for (var i = 1; i <= 9; i = i + 1 ) {
                clearBox(i);
            }

            //sets who's turn it is by a 50/50 chance between X and O
            document.turn = "X";
            if (Math.random() < 0.5) {
                document.turn = "O";
            }
            document.winner = null;
            //display's who's turn it is
            DisplayMessage(document.turn + " gets to start.");

        }

        //function that requires the parameter msg to allow displaying a custom message
        function DisplayMessage(msg){
            document.getElementById("message").innerText = msg;
        }

        //function to allow interactivity within the square and checking if there is already a winner or square already used
        function nextTurn(square){
            if (document.winner != null) {
                DisplayMessage(document.winner + " already won the game.");
            } else if (square.innerText == ""){
                square.innerText = document.turn;
                switchTurn();
            } else {
                DisplayMessage("That square is already used.");
            }
        }

        //changes the curruent users turn and displays that information
        function switchTurn() {

            if (checkWinner(document.turn)) {
                DisplayMessage("Congratulations, " + document.turn + "! You win!");
                document.winner = document.turn;
            } else if (document.turn == "X") {
                document.turn = "O";
                DisplayMessage("It's " + document.turn + "'s turn!");
                //takes the parameter of coulrs to change the hue lights as the game is being played
                color(apiURL4, 20, [0.7,0.3])
                color(apiURL5, 20, [0.7,0.3])
                color(apiURL6, 20, [0.7,0.3])
                color(apiURL, 140, [0.1,0.1])
                color(apiURL2, 140, [0.1,0.1])
                color(apiURL3, 140, [0.1,0.1])

            } else {
                document.turn = "X";
                DisplayMessage("It's " + document.turn + "'s turn!");
                //takes the parameter of coulrs to change the hue lights as the game is being played
                color(apiURL, 20, [0.1,0.1])
                color(apiURL2, 20, [0.1,0.1])
                color(apiURL3, 20, [0.1,0.1])
                color(apiURL4, 140, [0.4,0.5])
                color(apiURL5, 140, [0.4,0.5])
                color(apiURL6, 140, [0.4,0.5])
            }
        }

        //function that checks for any winners by looking at all possible patterns that qualifies as a win
        //then returns that result
        function checkWinner(move){
            var result = false;
            //all possible results for an outcome of a win
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

        //function that returns a result to know if there is a 3 in a row which allows us to know
        // if there is a winner
        function checkRow(a, b, c, move) {
            var result = false;
            if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
                result = true;
            }
            return result;
        }

        //function that retrieves boxes based on a number
        function getBox(number) {
            return document.getElementById("s" + number).innerText;
        }

        //empties the values in the box so that when the game starts or is restarted the grid is empty
        function clearBox(number) {
            document.getElementById("s" + number).innerText = "";
        }