/**********
 * DATA *
 **********/
// These arrays will be used below to store the rolls and then be used to create the Mean Median and Mode
const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/


// This fucntion will be used to ge the random numbers from each roll. 
// within the function just use the number of sides of the dice. 
const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}


/******************
 ****Add Images****/


// ADD IMAGE OF 6 SIDED DIE.
// the imagmes are all ready stored in the file. 
// "./images/start/picturefile"

const sixSideDice = document.querySelector("#d6-roll");
sixSideDice.src = "./images/start/d6.png";

const sixSidedMean = document.querySelector("#d6-rolls-mean");
 sixSidedMean.innerText = "--";
 
 const sixSidedMedian = document.querySelector("#d6-rolls-median");
 sixSidedMedian.innerText = "--";
 
 const sixSidedMode = document.querySelector("#d6-rolls-mode");
 sixSidedMode.innerText = "--";
 
// two 6-sided dice images
// Make sure you create a image for dice 1 and dice two

const rollTwoNormalDice1 = document.querySelector("#double-d6-roll-1");
rollTwoNormalDice1.src = "./images/start/d6.png";

const rollTwoNormalDice2 = document.querySelector("#double-d6-roll-2");
rollTwoNormalDice2.src = "./images/start/d6.png";

const meanOfDoubleDice = document.querySelector("#double-d6-rolls-mean");
meanOfDoubleDice.innerText = "--";

const medianOfDoubleDice = document.querySelector("#double-d6-rolls-median");
medianOfDoubleDice.innerText = "--";

const modeOfDoubleDice = document.querySelector("#double-d6-rolls-mode");
modeOfDoubleDice.innerText = "--";

// 12-sided dice image
const twelveSidedDice = document.querySelector("#d12-roll");
twelveSidedDice.src = "./images/start/d12.jpeg";

const twelveSidedMean = document.querySelector("#d12-rolls-mean");
twelveSidedMean.innerText = "--";

const twelveSidedMedian = document.querySelector("#d12-rolls-median");
twelveSidedMedian.innerText = "--";

const twelveSidedMode = document.querySelector("#d12-rolls-mode");
twelveSidedMode.innerText = "--";

//! Single 20-sided dice image
const twentySidedDice = document.querySelector("#d20-roll");
twentySidedDice.src = "./images/start/d20.jpg";

const twentySidedDiceMean = document.querySelector("#d20-rolls-mean");
twentySidedDiceMean.innerText = "--";

const twentySidedDiceMedian = document.querySelector("#d20-rolls-median");
twentySidedDiceMedian.innerText = "--";

const twentySidedDiceMode = document.querySelector("#d20-rolls-mode");
twentySidedDiceMode.innerText = "--";








/*******************
 * YOUR CODE BELOW *
 *******************/



/************************************
 * EVENT LISTENERS 1 Six Sided Dice *
 ************************************/
 sixSideDice.style.cursor = 'wait';
 sixSideDice.addEventListener('click', function(){
   let roll = getRandomNumber(6);
   sixSideDice.src = "./images/d6/" + roll + ".png";
   // use the sixes array from the data section above
   // The location of the dices where already created. Below just reference the name.
   // use the sixSidedMean. meanOfDoubleDice . twelveSidedMean . twentySidedDiceMean
   // use the sixSidedMedian. medianOfDoubleDice . twelveSidedMedian . twentySidedDiceMedian
   // use the sixSidedMode. modeOfDoubleDice . twelveSidedMode . twentySidedDiceMode

   sixes.push(roll);
   console.log(sixes);

   let sixDiceMean = mean(sixes).toFixed(2);
   sixSidedMean.innerText = sixDiceMean;

   let sixDiceMedian = median (sixes).toFixed(2);
   sixSidedMedian.innerText = sixDiceMedian;

   let sixDiceMode = mode(sixes);
   sixSidedMode.innerText = sixDiceMode;

 });

 /************************************
 * EVENT LISTENERS 2 Six Sided Dice *
 ************************************/
  rollTwoNormalDice1.style.cursor = 'wait';
  rollTwoNormalDice2.style.cursor = 'wait';
  rollTwoNormalDice1.addEventListener('click', function(){
    let die1 = getRandomNumber(6);
    let die2 = getRandomNumber(6);

    rollTwoNormalDice1.src = "./images/d6/" + die1 + ".png"
    rollTwoNormalDice2.src = "./images/d6/" + die2 + ".png"

    // push the result into the doubeSixes array

  doubleSixes.push(die1 + die2);

  let doublediceMean = mean(doubleSixes).toFixed(2);
  meanOfDoubleDice.innerText = doublediceMean

  let doublediceMedian = median(doubleSixes).toFixed(2);
  medianOfDoubleDice.innerText = doublediceMedian

  let doublediceMode = mode(doubleSixes)
  modeOfDoubleDice.innerText = doublediceMode

  })
  rollTwoNormalDice2.addEventListener('click', function(){
    let die1 = getRandomNumber(6);
    let die2 = getRandomNumber(6);

    rollTwoNormalDice1.src = "./images/d6/" + die1 + ".png"
    rollTwoNormalDice2.src = "./images/d6/" + die2 + ".png"

    // push the result into the doubeSixes array

  doubleSixes.push(die1 + die2);

  let doublediceMean = mean(doubleSixes).toFixed(2);
  meanOfDoubleDice.innerText = doublediceMean

  let doublediceMedian = median(doubleSixes).toFixed(2);
  medianOfDoubleDice.innerText = doublediceMedian

  let doublediceMode = mode(doubleSixes)
  modeOfDoubleDice.innerText = doublediceMode

  });


   /************************************
 * EVENT LISTENERS 12 Sided Dice *
 ************************************/
// make sure you push roll into 12 arrays

    twelveSidedDice.style.cursor = 'wait'
    twelveSidedDice.addEventListener('click', function(){

      let roll =getRandomNumber(12);
      twelveSidedDice.src="./images/numbers/" + roll + ".png";

      twelves.push(roll)
      
      let twelvesSidedMean = mean(twelves).toFixed(2);
      twelveSidedMean.innerText = twelvesSidedMean;

      let twelvesSidedMedian = mean(twelves).toFixed(2);
      twelveSidedMedian.innerText = twelvesSidedMedian;

      let twelvesSidedMode = mean(twelves);
      twelveSidedMode.innerText = twelvesSidedMode;

    })
     /************************************
 * EVENT LISTENERS 20 Sided Dice *
 ************************************/
      twentySidedDice.style.cursor ='wait'
      twentySidedDice.addEventListener('click', function(){
        let roll = getRandomNumber(20);
        twentySidedDice.src = "./images/numbers/" + roll + ".png";
        // the image is being called because its looking for the 
        // image location, taking roll number, and combing that into the location
        // of the image example a roll of 20 will return .images 20.png
        
        twenties.push(roll);

      let twentyMean = mean(twenties).toFixed(2);
      twentySidedDiceMean.innerText = twentyMean;

      let twentyMedian = mean(twenties).toFixed(2);
      twentySidedDiceMedian.innerText = twentyMedian;

      let twentyMode = mean(twenties);
      twentySidedDiceMode.innerText = twentyMode;

      })


/******************
 * RESET FUNCTION *
 ******************/

// This function should return all pictires to the beging and replace all values with --

 let reset = document.querySelector("#reset-button");
 

 reset.style.cursor = "wait";
 reset.addEventListener("click", function() {
// ADD IMAGE OF 6 SIDED DIE.
// the imagmes are all ready stored in the file. 
// "./images/start/picturefile"

const sixSideDice = document.querySelector("#d6-roll");
sixSideDice.src = "./images/start/d6.png";

const sixSidedMean = document.querySelector("#d6-rolls-mean");
 sixSidedMean.innerText = "--";
 
 const sixSidedMedian = document.querySelector("#d6-rolls-median");
 sixSidedMedian.innerText = "--";
 
 const sixSidedMode = document.querySelector("#d6-rolls-mode");
 sixSidedMode.innerText = "--";
 
// two 6-sided dice images
// Make sure you create a image for dice 1 and dice two

const rollTwoNormalDice1 = document.querySelector("#double-d6-roll-1");
rollTwoNormalDice1.src = "./images/start/d6.png";

const rollTwoNormalDice2 = document.querySelector("#double-d6-roll-2");
rollTwoNormalDice2.src = "./images/start/d6.png";

const meanOfDoubleDice = document.querySelector("#double-d6-rolls-mean");
meanOfDoubleDice.innerText = "--";

const medianOfDoubleDice = document.querySelector("#double-d6-rolls-median");
medianOfDoubleDice.innerText = "--";

const modeOfDoubleDice = document.querySelector("#double-d6-rolls-mode");
modeOfDoubleDice.innerText = "--";

// 12-sided dice image
const twelveSidedDice = document.querySelector("#d12-roll");
twelveSidedDice.src = "./images/start/d12.jpeg";

const twelveSidedMean = document.querySelector("#d12-rolls-mean");
twelveSidedMean.innerText = "--";

const twelveSidedMedian = document.querySelector("#d12-rolls-median");
twelveSidedMedian.innerText = "--";

const twelveSidedMode = document.querySelector("#d12-rolls-mode");
twelveSidedMode.innerText = "--";

//! Single 20-sided dice image
const twentySidedDice = document.querySelector("#d20-roll");
twentySidedDice.src = "./images/start/d20.jpg";

const twentySidedDiceMean = document.querySelector("#d20-rolls-mean");
twentySidedDiceMean.innerText = "--";

const twentySidedDiceMedian = document.querySelector("#d20-rolls-median");
twentySidedDiceMedian.innerText = "--";

const twentySidedDiceMode = document.querySelector("#d20-rolls-mode");
twentySidedDiceMode.innerText = "--";
    
 });

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

/**
 * The "mean" is the "average" you're used to, where you add up all the numbers
 * and then divide by the number of numbers.
 *
 * For example, the "mean" of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875.
 *
 *  An array of numbers.
 * The calculated average (or mean) value from the specified
 *     numbers.
 */

 function mean(numArr) {
  let sum = 0,
      i;
  for (i = 0; i < numArr.length; i += 1) {
      sum += numArr[i];
  }
  return sum / numArr.length;
}

/**
 * The "median" is the "middle" value in the list of numbers.
 *
 * An array of numbers.
 * The calculated median value from the specified numbers.
 */


function median(numArr) {
  let median = 0;
  let numLen = numArr.length;
  numArr.sort();

  if (numLen % 2 === 0) {// this first if statement is ensuring that the number is even
      median = (numArr[numLen / 2 - 1] + numArr[numLen / 2]) / 2;
  } else {
      median = numArr[(numLen - 1) / 2];
  }

  return median;
}

function mode(numArr) {
  let mode = [];
  let count = [];
  let countValue = 0;
 

  for (let i = 0; i < numArr.length; i++) {
      count[numArr[i]] = (count[numArr[i]] || 0) + 1;

      console.log("This is count:", count);
      if (count[numArr[i]] > countValue) {
          countValue = count[numArr[i]];
      }
  }

  for (i in count)
      if (count.hasOwnProperty(i)) {
          if (count[i] === countValue) {
              mode.push(Number(i));
          }
      }

  return mode;
}
