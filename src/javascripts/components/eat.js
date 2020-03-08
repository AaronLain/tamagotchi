import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';
import '../../../styles/main.scss';

const printToEat = () => {
  const valueArray = data.getData();
  const full = valueArray[0].value;
  let domString = '';
  domString += '<div class="eat-container">';
  domString += '<h1>EAT</h1>';
  domString += `<h2><em>${full}</em></h2>`;
  domString += '<button id="kinda-healthy"><i class="fas fa-hotdog"></i></button>'; // hot dog
  domString += '<button id="super-healthy"><i class="fas fa-apple-alt"></i></button>'; // apple
  domString += '</div>';
  util.printToDom('eat', domString);
};

export default { printToEat };
