import data from './data/valueData';
import eat from '../components/eat';
import play from '../components/play';
import fight from '../components/fight';
import sleep from '../components/sleep';

const printEvents = () => {
  eat.printToEat();
  play.printToPlay();
  fight.printToFight();
  sleep.printToSleep();
};

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
      data.subtractFromStrength();
      break;
    case 'run':
      data.addToStrength();
      break;
    case 'nap':
      data.addFiftyToEnergy();
      break;
    case 'deep-sleep':
      data.addSixtyToEnergy();
      break;
    default:
      console.error('');
  }
  printEvents();
};

const clickEvents = () => {
  $('body').on('click', '#app', mathEvents);
};

export default { clickEvents, printEvents };
