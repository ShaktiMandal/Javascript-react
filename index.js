// Import stylesheets
import './style.css';

// Write Javascript code
(Window.load = () => {
  const parent = document.getElementById('parent');
  const child = document.getElementsByClassName('child');
  const grandChild = document.getElementsByClassName('grandChild');
  const button = document.getElementById('button-grandchild');
  const countDetails = document.getElementsByClassName('click-count-label');

  const clickHandler = (event) => {
    let value = Math.random();
    countDetails[0].textContent = value.toFixed();
    alert('child');
  };

  const clickHandler1 = (event) => {
    let value = Math.random();
    countDetails[0].textContent = value.toFixed();
    alert('Parent');
  };
  //true - capturing , false - bubbling
  button.addEventListener('click', clickHandler);
  parent.addEventListener('click', clickHandler1);
})();
