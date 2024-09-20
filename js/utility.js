

function getHideTheElement(elementById){
    const hidePage = document.getElementById(elementById);
    hidePage.classList.add('hidden');
}


function getShowTheElement(elementById){
    const showPage = document.getElementById(elementById);
    showPage.classList.remove('hidden');
}


function genarateRandomWord(){
// genarate random word
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
// set this random word in display
    const displayByShowWord = document.getElementById('display-by-show-word');
    displayByShowWord.innerText = randomLetter;
}


function kdbBgMakeOrange(value){
    const kbd = document.getElementById(value);
    kbd.classList.remove('bg-gray-700');
    kbd.classList.add('bg-orange-400');
}


function kdbBgRemoveOrange(value){
    const kbd = document.getElementById(value);
    kbd.classList.remove('bg-orange-400');
    kbd.classList.add('bg-gray-700');
}


function increagePoint(){
    const gamePointIndex = document.getElementById('game-point-index');
    let currentPoint = parseInt(gamePointIndex.innerText);
    currentPoint += 1;
    gamePointIndex.innerText = currentPoint;
}


function discreageLife(){
    const gamelifeIndex = document.getElementById('game-life-index');
    let currentLife = parseInt(gamelifeIndex.innerText);
    if(currentLife > 1) {
        currentLife -= 1;
        gamelifeIndex.innerText = currentLife;
    } else {
        // complete the game The-End & show the result...
        theEndGame();
    }
}


function reviveTheLifeAndPoint(){
    const reviveLife = document.getElementById('game-life-index');
    reviveLife.innerText = 10;
    const revivePoint = document.getElementById('game-point-index');
    revivePoint.innerText = 0;
}