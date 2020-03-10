import util from '../helpers/utils';
import data from '../helpers/data/valueData';
import '../../styles/main.scss';

const printToSleep = () => {
  const valueArray = data.getData();
  const energy = valueArray[3];
  let domString = '';
  domString += '<div class="sleep-container">';
  domString += '<h1>SLEEP</h1>';
  domString += `<h2><em>${energy.value}</em></h2>`;
  domString += `<h3 class="row" id=${energy.id}><progress value=${energy.value} max="100"></h3>`;
  domString += '<button id="nap"><i id="nap" class="fas fa-chair"></i></button>';
  domString += '<button id="deep-sleep"><i id="deep-sleep" class="fas fa-bed"></i></button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};

export default { printToSleep };
