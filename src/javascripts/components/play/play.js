import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';

const printToPlay = () => {
  const valueArray = data.getData();
  const play = valueArray[1].value;
  let domString = '';
  domString += '<h2>PLAY</div>';
  domString += `<p><em>${play}</em></p>`;
  domString += '<button id="kinda-fun"></button>'; // hot dog
  domString += '<button id="super-fun"></button>'; // apple
  util.printToDom('play', domString);
};

export default { printToPlay };
