import _ from 'lodash';
import './style/app.css';
import Logo from './images/logo.png';
import DataXml from './xml/data.xml';
import DataCsv from './csv/data.csv';

function component() {
  const element = document.createElement('div');

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');

  const myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  console.log(DataXml);
  console.log(DataCsv);

  return element;
}

document.body.appendChild(component());