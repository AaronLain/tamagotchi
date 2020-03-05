import util from '../helpers/utils';

const addToStrength = () => {
  const strength = 100;
  let domString = '';
  domString += '<h2>FIGHT</div>';
  domString += `<p><em>${strength}</em></p>`;
  util.printToDom('fight', domString);
};

export default { addToStrength };
