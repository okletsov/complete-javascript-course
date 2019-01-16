/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, prevDice, prevDice2;

init();

// anonymous functoin as parameter
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor((Math.random() * 6) + 1); // generating random number
        var dice2 = Math.floor((Math.random() * 6) + 1); // generating random number

        if((dice === prevDice && dice === 6) || (dice2 === prevDice2 && dice2 === 6)) {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
            nextPlayer();

        } else {
            prevDice = dice;
            prevDice2 = dice2;
            // 2. Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block'; // to display an element
            diceDOM.src = 'dice-' + dice + '.png';

            document.querySelector('.dice2').style.display = 'block';
            document.querySelector('.dice2').src = 'dice-' + dice2 + '.png';

            // 3. Update the round score IF the rolled number was NOT 1
            if(dice !== 1 && dice2 !== 1) {
                // add to score
                roundScore += dice + dice2; // same as roundScore = roundScore + dice
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                document.getElementById('current-' + activePlayer).textContent = '0'; // set player's round score to 0
            
                // next player
                nextPlayer();
            }
        }

        
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        document.getElementById('current-' + activePlayer).textContent = 0;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Get points to win
        var pointsToWin;
        document.getElementById('input-0').value === "" ? pointsToWin = 100 : pointsToWin = document.getElementById('input-0').value;
        console.log(pointsToWin);

        // Check if player won the game
        if(scores[activePlayer] >= pointsToWin) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
    
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // change active player
    roundScore = 0; 
    prevDice = 0;
    prevDice2 = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');  // toggle adds class 'active if it is absent and adds if it is present'
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
} 

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    prevDice = 0;
    prevDice2 = 0;

    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; // changing css style
    document.querySelector('.dice2').style.display = 'none'; // changing css style
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


// Accessing element in DOM and assigning a text value...
// document.querySelector('#current-' + activePlayer).textContent = dice; 
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Accessing element's text...
// var x = document.querySelector('#score-0').textContent;
// console.log(x);