import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
// import fight from './components/fight';
// import sleep from './components/sleep';
import event from './helpers/events';

const init = () => {
  eat.printToEat();
  event.clickEvents();
  play.printToPlay();
};

init();
