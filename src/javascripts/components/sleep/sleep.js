import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';

const printToSleep = () => {
  const valueArray = data.getData();
  const energy = valueArray[3].value;
  let domString = '';
  domString += '<h2>SLEEP</div>';
  domString += `<p><em>${energy}</em></p>`;
  domString += '<button id="nap"></button>';
  domString += '<button id="deep-sleep"></button>';
  util.printToDom('sleep', domString);
};

export default { printToSleep };
