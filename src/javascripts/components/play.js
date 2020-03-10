import util from '../helpers/utils';
import data from '../helpers/data/valueData';
import '../../styles/main.scss';

const printToPlay = () => {
  const valueArray = data.getData();
  const play = valueArray[1];
  let domString = '';
  domString += '<div class="play-container">';
  domString += '<h1>PLAY</h1>';
  domString += `<h2><em>${play.value}</em></h2>`;
  domString += `<h3 class="row" id=${play.id}><progress value=${play.value} max="100"></h3>`;
  domString += '<button id="kinda-fun"><i id="kinda-fun" class="fas fa-table-tennis"></i></button>'; // hot dog
  domString += '<button id="super-fun"><i id="super-fun" class="fas fa-glass-cheers"></i></button>'; // apple
  domString += '</div>';
  util.printToDom('play', domString);
};

export default { printToPlay };
