import util from '../helpers/utils';

const addToEnergy = () => {
  const energy = 50;
  let domString = '';
  domString += '<h2>SLEEP</div>';
  domString += `<p><em>${energy}</em></p>`;
  util.printToDom('sleep', domString);
};

export default { addToEnergy };
