// import eat from "../../components/eat";

/* eslint-disable no-param-reassign */
const tamagotchiArray = [
  {
    id: 'eat',
    value: 100,
  },
  {
    id: 'play',
    value: 50,
  },
  {
    id: 'fight',
    value: 100,
  },
  {
    id: 'sleep',
    value: 50,
  },
];

const subtractFromEat = () => {
  const eatValue = tamagotchiArray[0].value;
  const newValue = eatValue - 3;
  if (eatValue > 0) {
    tamagotchiArray[0].value = newValue;
  } else {
    return eatValue;
  }
  return newValue;
};

const addToEat = () => {
  const eatValue = tamagotchiArray[0].value;
  const newValue = eatValue + 10;
  if (eatValue < 90) {
    tamagotchiArray[0].value = newValue;
  } else if (eatValue > 90 && eatValue <= 100) {
    tamagotchiArray[0].value = 100;
  }
  return newValue;
};

const addTwoToPlay = () => {
  const playValue = tamagotchiArray[1].value;
  const newValue = playValue + 2;
  if (playValue < 98) {
    tamagotchiArray[1].value = newValue;
  } else if (playValue > 97 && playValue <= 100) {
    tamagotchiArray[1].value = 100;
  }
  return newValue;
};

const addFiftyToPlay = () => {
  const eatValue = tamagotchiArray[1].value;
  const newValue = eatValue + 50;
  if (eatValue <= 50) {
    tamagotchiArray[1].value = newValue;
  } else if (eatValue > 50 && eatValue <= 100) {
    tamagotchiArray[1].value = 100;
  }
  return newValue;
};

const subtractFromStrength = () => {
  const energyValue = tamagotchiArray[2].value;
  const newValue = energyValue - 10;
  if (energyValue > 0) {
    tamagotchiArray[2].value = newValue;
  } else if (energyValue < 0) {
    tamagotchiArray[2].value = 0;
  }
  return newValue;
};

const addToStrength = () => {
  const energyValue = tamagotchiArray[2].value;
  const newValue = energyValue + 1;
  if (energyValue < 100) {
    tamagotchiArray[2].value = newValue;
  }
  return newValue;
};

const addFiftyToEnergy = () => {
  const playValue = tamagotchiArray[3].value;
  const newValue = playValue + 50;
  if (playValue < 50) {
    tamagotchiArray[3].value = newValue;
  } else if (playValue >= 50 && playValue <= 100) {
    tamagotchiArray[3].value = 100;
  }
  return newValue;
};

const addSixtyToEnergy = () => {
  const eatValue = tamagotchiArray[3].value;
  const newValue = eatValue + 60;
  if (eatValue < 40) {
    tamagotchiArray[3].value = newValue;
  } else if (eatValue >= 40 && eatValue <= 100) {
    tamagotchiArray[3].value = 100;
  }
  return newValue;
};

const getData = () => tamagotchiArray;

export default {
  getData, subtractFromEat, addToEat, addTwoToPlay, addFiftyToPlay, subtractFromStrength, addToStrength, addFiftyToEnergy, addSixtyToEnergy,
};
