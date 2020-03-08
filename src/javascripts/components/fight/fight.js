import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';
import '../../../styles/main.scss';

const printToFight = () => {
  const valueArray = data.getData();
  const strength = valueArray[2].value;
  let domString = '';
  domString += '<div class="fight-container">';
  domString += '<h2>FIGHT</h2>';
  domString += `<h3><em>${strength}</em></h3>`;
  domString += '<button id="fight"><i class="fas fa-fighter-jet"></i></button>'; // hot dog
  domString += '<button id="run"><i class="fas fa-running"></i></button>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

export default { printToFight };
