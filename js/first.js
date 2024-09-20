


// start the game
document.getElementById('start-btn').addEventListener('click' , function(){
    // hide the 1st page
    const homePage = document.getElementById('home-page');
    homePage.classList.add("hidden");
    // show game field section
    const playGroundPage = document.getElementById('play-ground-page');
    playGroundPage.classList.remove("hidden");


    // check life & act according for this
    const gameLifeIndex = document.getElementById('game-life-index');
    // console.log(gameLifeIndex.innerText);
    if (gameLifeIndex.innerText === '0') {
        // hide the game page
        const playGroundPage = document.getElementById('play-ground-page');
        playGroundPage.classList.add("hidden");
        // show End Page section
        const endPage = document.getElementById('end-page');
        endPage.classList.remove("hidden");
    }



})



// keybord work function
function checkWord(word){
    // console.log(word);
    const displayByShowWord = document.getElementById('display-by-show-word');
    const displayWord = displayByShowWord.innerText;
    // console.log(displayByShowWord.innerText);
    if (word === displayWord) {
        console.log('good word is correct');
        // const gamePointIndex = document.getElementById('game-point-index');
        // const valuePoint = parseFloat(gamePointIndex.innerText);
        // valuePoint += 1; 
        // console.log(valuePoint);
        // console.log(typeof valuePoint);
    }
    else{
        console.log("bad the word is worng");
        const gameLifeIndex = document.getElementById('game-life-index');
        const valueLife = gameLifeIndex.innerText;
        const number = parseInt(valueLife);
        // i = i + 1;
        number = 1 ;
        console.log(number);
        console.log(typeof number);
    }
}










// start the game again from end-game page
document.getElementById('play-again').addEventListener('click' , function(){
    // hidden the end-page section
    const endPage = document.getElementById('end-page');
    endPage.classList.add('hidden');
    // open the game section
    const playGroundPage = document.getElementById('play-ground-page');
    playGroundPage.classList.remove("hidden");
})