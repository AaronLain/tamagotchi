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
  const randValue = Math.ceil(Math.random() * 10);
  const newValue = eatValue - randValue;
  if (eatValue > 0) {
    tamagotchiArray[0].value = newValue;
  } else {
    return eatValue;
  }
  return newValue;
};

const addToEat = () => {
  const eatValue = tamagotchiArray[0].value;
  const randValue = Math.ceil(Math.random() * 10);
  const newValue = eatValue + randValue;
  if (eatValue < 90) {
    tamagotchiArray[0].value = newValue;
  } else if (eatValue > 90 && eatValue <= 100) {
    tamagotchiArray[0].value = 100;
  }
  return newValue;
};

const addToPlay = () => {
  const playValue = tamagotchiArray[1].value;
  const randValue = Math.ceil(Math.random() * 12);
  const newValue = playValue + randValue;
  if (playValue < 88) {
    tamagotchiArray[1].value = newValue;
  } else if (playValue > 87 && playValue <= 100) {
    tamagotchiArray[1].value = 100;
  }
  return newValue;
};

const subtractFromStrength = () => {
  const energyValue = tamagotchiArray[2].value;
  const randValue = Math.ceil(Math.random() * 11);
  const newValue = energyValue - randValue;
  if (energyValue > 0) {
    tamagotchiArray[2].value = newValue;
  } else if (energyValue < 0) {
    tamagotchiArray[2].value = 0;
  }
  return newValue;
};

const addToStrength = () => {
  const energyValue = tamagotchiArray[2].value;
  const randValue = Math.ceil(Math.random() * 3);
  const newValue = energyValue + randValue;
  if (energyValue < 97) {
    tamagotchiArray[2].value = newValue;
  } else if (energyValue > 98 && energyValue < 100) {
    tamagotchiArray[2].value = 100;
  }
  return newValue;
};

const addToEnergy = () => {
  const playValue = tamagotchiArray[3].value;
  const randValue = Math.ceil(Math.random() * 25);
  const newValue = playValue + randValue;
  if (playValue < 75) {
    tamagotchiArray[3].value = newValue;
  } else if (playValue >= 75 && playValue <= 100) {
    tamagotchiArray[3].value = 100;
  }
  return newValue;
};

const getData = () => tamagotchiArray;

export default {
  getData, subtractFromEat, addToEat, addToPlay, subtractFromStrength, addToStrength, addToEnergy,
};
