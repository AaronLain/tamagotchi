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
  console.error(e.target.id);
  switch (buttonId) {
    case 'kinda-healthy':
      data.subtractFromEat();
      printEvents();
      break;
    case 'super-healthy':
      data.addToEat();
      printEvents();
      break;
    case 'kinda-fun':
    case 'super-fun':
      data.addToPlay();
      printEvents();
      break;
    case 'fight':
      data.subtractFromStrength();
      printEvents();
      break;
    case 'run':
      data.addToStrength();
      printEvents();
      break;
    case 'nap':
    case 'deep-sleep':
      data.addToEnergy();
      printEvents();
      break;
    default:
      printEvents();
      console.error(e.target.id);
  }
  printEvents();
};

const clickEvents = () => {
  $('body').on('click', '#app', mathEvents);
};

export default { clickEvents, printEvents };
