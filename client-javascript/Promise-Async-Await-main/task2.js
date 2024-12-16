// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt('Enter a number from 1 to 6'));
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (isNaN(userNumber)) {
      reject(new Error('Please enter a number'));
    }

    if (userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber,
      });
    } else if (userNumber === randomNumber + 1 || userNumber === randomNumber - 1) {
      resolve({
        points: 1,
        randomNumber,
      });
    } else {
      resolve({
        points: 0,
        randomNumber,
      });
    }
  });
};

const continueGame = () => {
  return new Promise ((resolve) => {
    if (window.confirm('Do you want to play again?')) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const handleGuess = async () => {
  try {
    const result = await enterNumber();
    alert(`Computer says: ${result.randomNumber}, Points: ${result.points}`);

    const isContinuing = await continueGame();

    if (isContinuing) {
      handleGuess();
    } else {
      alert('Thanks for playing!');
    }
  } catch (error) {
    alert(error.message);
  }
};
handleGuess();
