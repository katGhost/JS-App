// function to log personal details to the console.
function myDetails() {
  const name = "Katlego";
  const institution = "IT Varsity";
  const username = "katGhost";

  // using ES6 template string, cleaner code
  console.log(
    `My Name is ${name}, a dev student at ${institution}, and my Github username is ${username}`
  );
}
myDetails();

/*
   Roll a dice and Predict which category will win 
   the MTN App Awards
*/

// categories in an array
let categories = [
  "Best Hackathon Solution",
  "Best Gaming Solution",
  "Best South African Solution",
  "Best Agricultural Solution",
  "Best Campus Cup Solution",
  "Best African Solution",
  "Best Financial Solution",
  "Most Innovative Solution",
  "Best Educational Solution",
  "Best Enterprise Solution",
  "Best Health Solution",
  "Best Consumer Solution",
];

function pickWinner() {
  // choose or pick a random winner form the list
  let randomChoice = Math.floor(Math.random() * 12);
  return categories[randomChoice];
}
// call the function in the console to find the possible winner
console.log(`The Winner of the 2022 MTN Business academy awards is: ${pickWinner()}`);

/*
// For Practice purposes 
const result = document.querySelector(".result");
const rollDiceButton = document.querySelector(".rollDice");

rollDiceButton.addEventListener("click", () => {
  result.textContent = `The Winner of the 2022 MTN Business academy awards is: ${pickWinner()}`;
}); */

/*
   Create, open and read from a text file with details on the 2021 MTN Business
   Academy App Awards winner
*/

const loadInput = document.querySelector('#input');
const getOutput = document.querySelector('#output');

loadInput.addEventListener('change', () => {
  if (this.files && this.files[0]) {
    let myFile = this.files[0];
    let fileReader = new FileReader();

    fileReader.addEventListener('load', (e) => {
      // now read from a loaded , set its text content
      getOutput.textContent = e.target.result;

    });
    // any file chosen from the files menu will be read a Binary String
    // 
    fileReader.readAsBinaryString(myFile);
  }
});

