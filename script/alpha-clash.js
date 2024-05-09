

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundById(alphabet);
}


function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();

}