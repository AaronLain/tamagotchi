import util from '../helpers/utils';

const addToPlay = () => {
  const play = 50;
  let domString = '';
  domString += '<h2>PLAY</div>';
  domString += `<p><em>${play}</em></p>`;
  util.printToDom('play', domString);
};

export default { addToPlay };
