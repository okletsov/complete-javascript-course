/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; //Player 1 by default

 document.querySelector('.dice').style.display = 'none'; // changing css style

 document.querySelector('#score-0').textContent = 0;
 document.querySelector('#score-1').textContent = 0;
 document.getElementById('current-0').textContent = 0;
 document.getElementById('current-1').textContent = 0;

// anonymous functoin as parameter
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice = Math.floor((Math.random() * 6) + 1); // generating random number

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; // to display an element
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was NOT 1
    if(dice !== 1) {
        // add to score
        roundScore += dice; // same as roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        document.getElementById('current-' + activePlayer).textContent = '0'; // set player's round score to 0
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // change active player
        roundScore = 0; 

        document.querySelector('.player-0-panel').classList.toggle('active');  // toggle adds class 'active if it is absent and adds if it is present'
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        diceDOM.style.display = 'none';
    }

});


// Accessing element in DOM and assigning a text value...
// document.querySelector('#current-' + activePlayer).textContent = dice; 
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Accessing element's text...
// var x = document.querySelector('#score-0').textContent;
// console.log(x);