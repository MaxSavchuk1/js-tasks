const { testData, testData2, testData3, testData4 } = require('./testData');

// 1 (1бал)
// Сделать функцию поиска значений в массиве.

// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
const array_find = (arr, search) => {
  if (!(arr instanceof Array)) {
    throw new Error('first argument must be an array');
  }

  if (!(search instanceof RegExp || typeof search === 'string')) {
    throw new Error('second argument must be string or RegExp');
  }

  let index;

  for (const [i, el] of arr.entries()) {
    if (search instanceof RegExp) {
      if (search.test(el)) {
        index = i;
        break;
      }
    }
    if (el === search) {
      index = i;
      break;
    }
  }

  return arr.slice(index, index + 1);
};
// Пример:
let result = array_find(testData, /^raf.*/i); // ["Rafshan"]
let result2 = array_find(testData, 'Rafshan'); // ["Rafshan"]
console.log(`result`, result);
console.log(`result`, result2);
