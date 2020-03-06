import data from './data/valueData';
import eat from '../components/eat';
import play from '../components/play';
import fight from '../components/fight';


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
      data.addTwoToPlay();
      break;
    case 'super-fun':
      data.addFiftyToPlay();
      break;
    case 'fight':
      data.subtractFromEnergy();
      break;
    case 'run':
      data.addToEnergy();
      break;
    default:
      console.error('whoops lol?');
  }
  eat.printToEat();
  play.printToPlay();
  fight.printToFight();
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
