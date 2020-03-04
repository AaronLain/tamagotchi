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

// const addEvent = (num) => {
//
// };

const subtractionEvent = (objectId) => {
  const targetId = tamagotchiArray.findIndex((x) => x.id === objectId);
  let targetValue = tamagotchiArray[targetId].value;
  switch (objectId) {
    case 'eat':
      targetValue -= 3;
      tamagotchiArray[targetId] = targetValue;
      break;
    case 'fight':
      targetValue -= 10;
      tamagotchiArray[targetId] = targetValue;
      break;
    default:
      console.error('something went wrong lol ');
  }
  return targetValue;
};

const getData = () => tamagotchiArray;

export default { getData, subtractionEvent };
