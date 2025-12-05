// IIFE for javascript
(function(){
    'use strict';
    console.log('reading JS');

    // Our variables ---

    const startButton = document.querySelector('#startGame'); // start button
    const gameDisplay = document.querySelector('#gameDisplay'); // game display with chocies

    const roundResult = document.querySelector('#roundResult'); // says who wins in individual rounds

    const choices = ['rock', 'paper', 'scissors']; // chocies for the game
    const player = document.querySelector('#user'); // Display for player Action 
    const computer = document.querySelector('#computer'); // Display for computer Action

    let playerScore = 0; // Player score
    let computerScore = 0; // Computer score
    const scoreCount = document.querySelector('#scoreCount'); // The score count 0:0

    const restartGame = document.querySelector('#restartButton'); // The button that restarts the game

    const winningSound = new Audio('audio/win.mp3'); // 'yay' sound effect when player wins
    const losingSound = new Audio('audio/lose.mp3'); // 'womp' sound effect when player loses
    const startingSound = new Audio('audio/start.mp3'); // 'meow' sound to indicate game is starting

    // When start button gets pressed this function runs..
    startButton.addEventListener('click', function(){
        startingSound.play(); // plays the start sound effect

        startButton.className = 'hidden'; // hides the start button once game starts
        gameDisplay.className = 'showing'; // shows the game options (rock,paper,scissors)
        roundResult.className = 'showing'; // shows the round results (if player loses during a round)
        scoreCount.className = 'showing'; // shows the score count
    });

    // function that runs once the player chooses an option from Rock Paper or Scissors
    window.startGame = function startGame(playerChoice){
        const computerChoice = choices[Math.floor(Math.random() * 3)]; // Randomally choses option from the possible chocies

        // If both player & computer chooses the same option it will display tie
        if(playerChoice === computerChoice){ 
            roundResult.innerHTML = '<h2>TIE!</h2>'; 
        }
        else{ 
            switch(playerChoice){ // Switch cases when there isn't a tie
                case 'rock':
                    roundResult.innerHTML = (computerChoice === 'scissors') ? '<h2>Point For You!</h2>' : '<h2>Point For E-Cat!</h2>';
                    break;
                case 'paper':
                    roundResult.innerHTML = (computerChoice === 'rock') ? '<h2>Point For You!</h2>' : '<h2>Point For E-Cat!</h2>';
                    break;
                case 'scissors':
                    roundResult.innerHTML = (computerChoice === 'paper') ? '<h2>Point For You!</h2>' : '<h2>Point For E-Cat!</h2>';
                    break;

            }
        }

        player.innerHTML = `<h3>YOU: ${playerChoice} </h3>`; // Updates player action display according to what they chose
        computer.innerHTML = `<h3>EVIL E-CAT: ${computerChoice}</h3>`; // Updates computer action display according to what they chose

        // Updates the scores according to who won in the individual round
        switch(roundResult.innerHTML){
            case '<h2>Point For You!</h2>': // executes if player gets a point
                playerScore++;
                scoreCount.textContent = `${playerScore}:${computerScore}`; // updates score
                break;
            case '<h2>Point For E-Cat!</h2>': // executes if computer gets a point
                computerScore++;
                scoreCount.textContent = `${playerScore}:${computerScore}`; // updates score
                break;
        }

        // Makes sure that the game announces a winner once someone scores 3 points
        if(playerScore == 3){ // if player wins
            roundResult.innerHTML = '<h2>YOU WIN!</h2>';
            winningSound.play();

            roundResult.className = 'greenText';
            gameDisplay.className = 'hidden';
            restartGame.className = 'showing';

            // Updates images according to the winner outcome
            document.querySelector('#evilCatIMG').src = 'images/loser_Cat.png'
            document.querySelector('#playerIMG').src = 'images/winner_Cat.png'
        }
        else if(computerScore == 3){ // if computer wins
            roundResult.innerHTML = '<h2>YOU LOSE!</h2>';
            losingSound.play();

            roundResult.className = 'redText';
            gameDisplay.className = 'hidden';
            restartGame.className = 'showing';

            // Updates images according to the winner outcome
            document.querySelector('#evilCatIMG').src = 'images/evilWin_Cat.png'
            document.querySelector('#playerIMG').src = 'images/loser_Player.png'
        }

        // reloads the page if player wants to play again
		document
			restartGame.addEventListener('click', function (){
				location.reload(); //reloads page
			});

    };


})();