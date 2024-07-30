let turn = 'X';
let gameOver = false;
const boxes = document.querySelectorAll('.box');
const winner = document.getElementById('winner');
const restart = document.getElementById('restart-btn');
const winBorder = document.getElementById('win-border');
const turnFor = document.querySelector('.turn-for');

restart.addEventListener('click', () => {
  window.location.reload();
});

function game() {
  if (gameOver) return;
  const boxContent = document.querySelectorAll('.text-box');
  const winScenes = [
    [0, 1, 2, 19, 49, 0],
    [0, 4, 8, 19, 161, 225],
    [0, 3, 6, -93, 160, 90],
    [1, 4, 7, 20, 160, 90],
    [2, 5, 8, 131, 160, 90],
    [3, 4, 5, 19, 160, 0],
    [6, 7, 8, 19, 272, 0],
    [2, 4, 6, 19, 159, 135],
];

  winScenes.forEach((scene) => {
    if (boxContent[scene[0]].innerHTML === boxContent[scene[1]].innerHTML &&
      boxContent[scene[1]].innerHTML === boxContent[scene[2]].innerHTML &&
      boxContent[scene[0]].innerHTML !== '') {
      winBorder.style.transform = `translate(${scene[3]}px, ${scene[4]}px) rotate(${scene[5]}deg)`;
      winBorder.style.opacity = "1";
      turnFor.style.animation = 'anim 1s linear infinite';
      boxContent[scene[0]].style.fontSize = '60px';
      boxContent[scene[1]].style.fontSize = '60px';
      boxContent[scene[2]].style.fontSize = '60px';
      turnFor.style.display = 'none';
      winner.innerText = boxContent[scene[0]].innerHTML + ' has won the game';
      gameOver = true;
    }
  });

  const isDraw = Array.from(boxContent).every(box => box.innerHTML !== '');
  if (isDraw && !gameOver) {
    winner.innerText = 'It\'s a draw!';
    restart.style.display = 'block';
    gameOver = true;
  }
}

 Array.from(boxes).forEach((box, i) => {
  box.addEventListener('click', (e) => {
    const boxContent = e.target.querySelector('.text-box');
    if (boxContent.innerHTML === '') {
      boxContent.innerHTML = turn;
      turn = turn === 'X' ? 'O' : 'X';
      game();
      turnFor.innerHTML = `Turn for ${turn}`;
    }
  });
});
;
