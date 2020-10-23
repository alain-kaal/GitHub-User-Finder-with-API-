
function getOneElement(cssSelector) {
  let element = document.querySelector(cssSelector);
  return element;
}

function getManyElements(cssSelector) {
  let elements = document.querySelectorAll(cssSelector);
  return elements;
}

/* let liClass = '.collection-item';
let taskInputMsg = 'form input#task';
let styleBorder = '3px black solid';
let linkDelete = '.delete-item';
const formulaire = document.querySelector('form');
const formInputTask = document.querySelector(taskInputMsg);
const taskListUl = document.querySelector('ul.collection');
const linkDeleteItemA = document.querySelector(linkDelete);
const taskItemLi = document.querySelectorAll(liClass); */

//taskItemLi.style.border = styleBorder; 
//console.log(taskItemLi);