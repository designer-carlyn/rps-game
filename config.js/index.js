function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const chipElement = ["rock", "paper", "scissors", "lizard", "spock"];

export { getRandomInt, chipElement };
