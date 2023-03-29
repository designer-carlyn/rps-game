function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const originalChipElement = ["rock", "paper", "scissors"];

export { getRandomInt, originalChipElement };
