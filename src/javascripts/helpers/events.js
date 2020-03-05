import data from './data/valueData';
import eat from '../components/eat';
import play from '../components/play';


const mathEvents = (e) => {
  const buttonId = e.target.id;
  switch (buttonId) {
    case 'kinda-healthy':
      data.subtractFromEat();
      break;
    case 'super-healthy':
      data.addToEat();
      break;
    case 'kinda-fun':
      data.addTwotoPlay();
      break;
    case 'super-fun':
      data.addFiftytoPlay();
      break;
    default:
      console.error('whoops lol?');
  }
  eat.printToEat();
  play.printToPlay();
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
