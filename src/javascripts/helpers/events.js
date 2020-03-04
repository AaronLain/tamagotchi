import data from './data/valueData';
import eat from '../components/eat';


const subtractEvent = (e) => {
  const targetId = e.target.id;
  data.subtractionEvent(targetId);
  eat.printToEat();
  console.error(targetId);
};

const clickEvents = () => {
  $('body').on('click', '.kinda-healthy', subtractEvent);
};

export default { clickEvents, subtractEvent };
