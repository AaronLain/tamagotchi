import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';
import '../../../styles/main.scss';

const printToSleep = () => {
  const valueArray = data.getData();
  const energy = valueArray[3].value;
  let domString = '';
  domString += '<div class="sleep-container">';
  domString += '<h2>SLEEP</h2>';
  domString += `<h3><em>${energy}</em></h3>`;
  domString += '<button id="nap"><i class="fas fa-chair"></i></button>';
  domString += '<button id="deep-sleep"><i class="fas fa-bed"></i></button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};

export default { printToSleep };
