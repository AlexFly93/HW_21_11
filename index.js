// написати скрипт (можна функцію можна без), який виводить індекс максимального елемента в масиві. Якщо максимальних елементів декілька(значення однакові) - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

const nums = [2, 3, 6, 4, 6, 78, 4, 78, 57, 4, 3];

function checkKeysInRow(array) {
  let checkI = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[checkI]) {
      checkI = i;
    }
  }
  return checkI;
}

console.log(checkKeysInRow(nums));
