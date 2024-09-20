// first hide home area & open the game field
function startGame(){
// hide the home-page 
    getHideTheElement('home-page');
// show game section
    getShowTheElement('play-ground-page');
// open game
    openGame();
}


// Start Play The Game
function openGame(){
    // genarate random word
        genarateRandomWord();
    
    // make targeted key orange
        const displayByShowWord = document.getElementById('display-by-show-word');
        let kbdValue = displayByShowWord.innerText.toUpperCase();
        kdbBgMakeOrange(kbdValue);
}


function checkWord(value){
    // display word
        const displayByShowWord = document.getElementById('display-by-show-word');
        const result = displayByShowWord.innerText;
    // check the word is correct
        if (result.toUpperCase() === value) {
            console.log('answer is correct');
            // increage Point
            increagePoint();
        }
        else{
            console.log('answer is worng');
            // decreage Life
            discreageLife();
        }
    // remove the bg orange class from the targeted btn
        let kbdValue = displayByShowWord.innerText.toUpperCase();
        kdbBgRemoveOrange(kbdValue);
    // reCall the game function 
        openGame();
}


function theEndGame(){
    // hide the gaming page 
    getHideTheElement('play-ground-page');
    // show end-game page
    getShowTheElement('end-page');
    // display the final result
    const finalResultDisplay = document.getElementById('final-result-display');
    const gamePointIndex = document.getElementById('game-point-index');
    finalResultDisplay.innerText = gamePointIndex.innerText;
}


// play-again the game
function playAgain(){
    // revive the Life
    reviveTheLifeAndPoint();
    // hide end-game page 
    getHideTheElement('end-page');
    // show the gaming page
    getShowTheElement('play-ground-page');
}