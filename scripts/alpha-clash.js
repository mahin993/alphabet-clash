// function play(){
//   // step-1: hide the home screen. To hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add("hidden");
//   console.log(homeSection); 

//   // show the playground
//   const playgroundSection = document.getElementById('playground-section');
//   playgroundSection.classList.remove("hidden");
//   console.log(playgroundSection.classList)
// }

function handleKeyboardButtonPress(){
  console.log('button pressed')
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
  // step-1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  
  // set randomly generated alphabet to the screen(show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}