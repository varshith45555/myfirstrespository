const board = document.getElementById('board');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');
const starsDisplay = document.getElementById('stars');
const restartBtn = document.getElementById('restart');

const icons = ['🍎', '🍕', '🚗', '🐶', '🎩', '⚽', '🎮', '📚'];
let cards = [...icons, ...icons];

let flippedCards = [];
let matched = 0;
let moves = 0;
let timer;
let time = 0;
let isPlaying = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTimer() {
  timer = setInterval(() => {
    time++;
    let min = String(Math.floor(time / 60)).padStart(2, '0');
    let sec = String(time % 60).padStart(2, '0');
    timerDisplay.textContent = `${min}:${sec}`;
  }, 1000);
}

function updateStars() {
  if (moves <= 12) {
    starsDisplay.textContent = '★★★';
  } else if (moves <= 18) {
    starsDisplay.textContent = '★★☆';
  } else {
    starsDisplay.textContent = '★☆☆';
  }
}

function resetGame() {
  clearInterval(timer);
  time = 0;
  isPlaying = false;
  timerDisplay.textContent = '00:00';
  moves = 0;
  matched = 0;
  movesDisplay.textContent = moves;
  starsDisplay.textContent = '★★★';
  flippedCards = [];
  board.innerHTML = '';
  cards = shuffle([...icons, ...icons]);

  cards.forEach(icon => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="inner-card">
        <div class="front">${icon}</div>
        <div class="back">❓</div>
      </div>`;
    board.appendChild(card);

    card.addEventListener('click', () => {
      if (!isPlaying) {
        startTimer();
        isPlaying = true;
      }

      if (
        card.classList.contains('flipped') ||
        flippedCards.length === 2
      ) return;

      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        updateStars();
        checkMatch();
      }
    });
  });
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const icon1 = card1.querySelector('.front').textContent;
  const icon2 = card2.querySelector('.front').textContent;

  if (icon1 === icon2) {
    matched += 2;
    flippedCards = [];

    if (matched === cards.length) {
      clearInterval(timer);
      setTimeout(() => {
        alert(`🎉 You won in ${moves} moves and ${timerDisplay.textContent} time!`);
      }, 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
    }, 800);
  }
}

restartBtn.addEventListener('click', resetGame);

resetGame();
