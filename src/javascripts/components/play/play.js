import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';
import '../../../styles/main.scss';

const printToPlay = () => {
  const valueArray = data.getData();
  const play = valueArray[1].value;
  let domString = '';
  domString += '<div class="play-container">';
  domString += '<h1>PLAY</h1>';
  domString += `<h2><em>${play}</em></h2>`;
  domString += '<button id="kinda-fun"><i class="fas fa-table-tennis"></i></button>'; // hot dog
  domString += '<button id="super-fun"><i class="fas fa-glass-cheers"></i></button>'; // apple
  domString += '</div>';
  util.printToDom('play', domString);
};

export default { printToPlay };
