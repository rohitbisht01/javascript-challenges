/* 
Write a function called diceGameSimulation that simulates this dice game. The function should take one argument:

numSimulations: The number of times to simulate the dice game.
The game rules are if a 7 or 11 are rolled, the player wins and they get a result of win. If a 2, 3 or 12 are rolled they lose and get a result of lose. Anything else and they get a result of roll again.

The function should return an array of objects, where each object represents a simulation result. Each object should contain the following properties:

dice1: The value of the first dice (a random number between 1 and 6).
dice2: The value of the second dice (a random number between 1 and 6).
sum: The sum of the two dice values.
result: The result of the roll, which can be "win", "lose", or "roll again".
*/

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
  const results = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let result = "";
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    results.push({ dice1, dice2, sum, result });
  }

  return results;
}

console.log(diceGameSimulation(3));
/*
  { dice1: 1, dice2: 5, sum: 6, result: 'roll again' },
  { dice1: 5, dice2: 6, sum: 11, result: 'win' },
  { dice1: 1, dice2: 1, sum: 2, result: 'lose' }
*/
