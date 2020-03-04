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

// const addEvent = (num) => {
//
// };

const subtractionEvent = (objectId) => {
  tamagotchiArray.forEach((thing) => {
    if (thing.id === objectId) {
      if (objectId === 'eat') {
        // eslint-disable-next-line no-param-reassign
        thing.value -= 3;
      } else if (objectId === 'fight') {
        thing.value -= 10;
      }
    } else {
      return objectId;
    }
    return objectId;
  });
};


const getData = () => tamagotchiArray;

export default { getData, subtractionEvent };
