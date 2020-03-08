import util from '../../helpers/utils';
import data from '../../helpers/data/valueData';
import '../../../styles/main.scss';

const printToPlay = () => {
  const valueArray = data.getData();
  const play = valueArray[1].value;
  let domString = '';
  domString += '<div class="play-container">';
  domString += '<h2>PLAY</h2>';
  domString += `<h3><em>${play}</em></h3>`;
  domString += '<button id="kinda-fun"><i class="fas fa-table-tennis"></i></button>'; // hot dog
  domString += '<button id="super-fun"><i class="fas fa-glass-cheers"></i></button>'; // apple
  domString += '</div>';
  util.printToDom('play', domString);
};

export default { printToPlay };
