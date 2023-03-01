const ball = document.querySelector('.js-ball');
const text = document.querySelector('.js-text');

let counter = 0;
const px = 'px';
let div;

function grow() {
  div = 200;
  div = div + counter * 10;
  ball.style.height = div + px;
  ball.style.width = div + px;

  // if (div <= 420) {
  //   console.log('click');
  //   div = div + 10;
  //   ball.style.height = div + px;
  //   ball.style.width = div + px;
  // }
}

function moves() {
  counter++;
  if (
    counter === 1 ||
    counter === 4 ||
    counter === 7 ||
    counter === 10 ||
    counter === 13 ||
    counter === 16 ||
    counter === 19
  ) {
    text.classList.add('hidden');
    ball.classList.remove('hidden');
    grow();
    red();
  } else if (
    counter === 2 ||
    counter === 5 ||
    counter === 8 ||
    counter === 11 ||
    counter === 14 ||
    counter === 17 ||
    counter === 20
  ) {
    ball.innerHTML = '';
    grow();
    green();
  } else if (
    counter === 3 ||
    counter === 6 ||
    counter === 9 ||
    counter === 12 ||
    counter === 15 ||
    counter === 18 ||
    counter === 21
  ) {
    grow();
    blue();
  } else if (counter === 22) {
    div = 200;
    red();
    ball.style.height = div + px;
    ball.style.width = div + px;
    text.classList.remove('hidden');
    ball.classList.add('hidden');
    counter = 0;
  }
}

function red() {
  ball.classList.add('red');
  ball.classList.remove('blue');
  ball.classList.remove('green');
}
function green() {
  ball.classList.add('green');
  ball.classList.remove('red');
  ball.classList.remove('blue');
}

function blue() {
  ball.classList.add('blue');
  ball.classList.remove('red');
  ball.classList.remove('green');
}

function onClick() {
  moves();
}

function onMouseOver() {
  if (div > 200 && ball.classList.contains('red')) {
    div = div - 5;
    ball.style.height = div + px;
    ball.style.width = div + px;
    ball.classList.remove('red');
    ball.classList.add('blue');
  } else if (div > 200 && ball.classList.contains('green')) {
    div = div - 5;
    ball.style.height = div + px;
    ball.style.width = div + px;
    ball.classList.remove('green');
    ball.classList.add('red');
  } else if (div > 200 && ball.classList.contains('blue')) {
    div = div - 5;
    ball.style.height = div + px;
    ball.style.width = div + px;
    ball.classList.remove('blue');
    ball.classList.add('green');
  }
}

ball.addEventListener('click', onClick);
ball.addEventListener('mouseout', onMouseOver);
text.addEventListener('click', onClick);
