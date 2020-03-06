import '../styles/main.scss';
import event from './helpers/events';

const init = () => {
  event.clickEvents();
  event.printEvents();
};

init();
