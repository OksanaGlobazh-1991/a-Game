let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
// isNumber(userNum);

const getRandomNumber = function (n, m) {
  const min = Math.ceil(Math.min(n, m));
  const max = Math.floor(Math.max(n, m));

  return Math.floor(Math.random() * (max - min)) + min;
}
// console.log(getRandomNumber(6, 12));


function gameBot() {
  const randomNum = getRandomNumber(1, 100);
  console.log(randomNum);

  function checkNum() {
    const userNum = prompt('Угадай число от 0 до 100');

    if (userNum === null) return alert('Игра окончена');

    if (userNum > randomNum) {
      alert('Загаданное число меньше');
      return checkNum();
    }

    if (userNum < randomNum) {
      alert('Загаданное число больше');
      return checkNum();
    }

    if (!isNumber(userNum)) {
      alert('Введи число!');
      return checkNum();
    }

    if (userNum == randomNum) {
      alert('Поздравляю, Вы угадали!!!');
    }
  }
  
  checkNum();
}
  gameBot();
 