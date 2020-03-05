import data from './data/valueData';
import eat from '../components/eat';


const mathEvents = (e) => {
  const buttonId = e.target.id;
  console.error(buttonId);
  switch (buttonId) {
    case 'kinda-healthy':
      data.subtractFromEat();
      break;
    case 'super-healthy':
      data.addToEat();
      break;
    default:
      console.error('whoops lol?');
  }
  eat.printToEat();
};

// const subtractEvent = (e) => {
//  const targetId = e.target.id;
//  data.subtractionEvent(targetId);
//  eat.printToEat();
//  console.error(targetId);
// };

const clickEvents = () => {
  $('body').on('click', '#app', mathEvents);
};

export default { clickEvents };
