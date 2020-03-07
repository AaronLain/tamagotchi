import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';

const printToFight = () => {
  const valueArray = data.getData();
  const strength = valueArray[2].value;
  let domString = '';
  domString += '<h2>FIGHT</div>';
  domString += `<p><em>${strength}</em></p>`;
  domString += '<button id="fight"></button>'; // hot dog
  domString += '<button id="run"></button>';
  util.printToDom('fight', domString);
};

export default { printToFight };
