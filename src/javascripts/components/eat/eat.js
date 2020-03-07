import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';
import './eat.scss';

const printToEat = () => {
  const valueArray = data.getData();
  const full = valueArray[0].value;
  let domString = '';
  domString += '<h2>EAT</div>';
  domString += `<p><em>${full}</em></p>`;
  domString += '<button id="kinda-healthy"></button>'; // hot dog
  domString += '<button id="super-healthy"></button>'; // apple
  util.printToDom('eat', domString);
};

export default { printToEat };
