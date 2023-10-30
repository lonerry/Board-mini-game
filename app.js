const board = document.querySelector('#board');
const colors = ['#15F4EE', '#39FF14', '#BF00FF', '#FFF01F', '#FE59C2', '#CCCCCC', '#FF1818', '#FF760D', '#3A68E8'];
const SquaresNumbers = 1200;

// Создаем массив квадратов
const squares = [];

for (let i = 0; i < SquaresNumbers; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  squares.push(square);

  square.addEventListener('mouseenter', () => {
    highlightSquare(square);
  });

  square.addEventListener('mouseleave', () => {
    resetSquare(square);
  });

  board.append(square);
}

const mc = new Hammer.Manager(board);

mc.add(new Hammer.Tap());
const pan = new Hammer.Pan({ direction: Hammer.DIRECTION_ALL });
pan.set({ threshold: 5 }); // Установите порог на ваш вкус
mc.add(pan);

let currentSquare = null;

mc.on('tap', (event) => {
  const target = event.target;
  if (target.classList.contains('square')) {
    highlightSquare(target);
  }
});

mc.on('panstart panmove', (event) => {
  const target = document.elementFromPoint(event.center.x, event.center.y);
  if (target.classList.contains('square')) {
    highlightSquare(target);
  } else {
    squares.forEach(resetSquare);
  }
});

mc.on('panend', () => {
  squares.forEach(resetSquare);
});

function highlightSquare(square) {
  const color = getRandomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function resetSquare(square) {
  square.style.backgroundColor = '#1d1d1d';
  square.style.boxShadow = '0 0 2px #1d1d1d';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}




