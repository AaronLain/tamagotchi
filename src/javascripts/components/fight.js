import util from '../helpers/utils';
import data from '../helpers/data/valueData';
import '../../styles/main.scss';

const printToFight = () => {
  const valueArray = data.getData();
  const strength = valueArray[2];
  let domString = '';
  domString += '<div class="fight-container">';
  domString += '<h1>FIGHT</h1>';
  domString += `<h2><em>${strength.value}</em></h2>`;
  domString += `<h3 class="row" id=${strength.id}><progress value=${strength.value} max="100"></h3>`;
  domString += '<button id="fight"><i id="fight" class="fas fa-fighter-jet"></i></button>'; // hot dog
  domString += '<button id="run"><i id="run" class="fas fa-running"></i></button>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

export default { printToFight };
