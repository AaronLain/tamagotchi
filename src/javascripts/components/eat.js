import util from '../helpers/utils';

const addToEat = () => {
  const full = 100;
  let domString = '';
  domString += '<h2>EAT</div>';
  domString += `<p><em>${full}</em></p>`;
  util.printToDom('eat', domString);
};

export default { addToEat };
