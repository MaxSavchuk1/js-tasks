const { testData } = require('../testData');

// 4 (1бал)
// Сделать функцию которая обрезает массив до указанного значения.

// Синтаксис: array_skip_until(arr: array, value: any): any[]

const array_skip_until = (arr, value) => {
  const newArr = [...arr];
  let index = newArr.indexOf(value);
  if (index === -1) {
    index = Infinity;
  }
  newArr.splice(0, index);
  return newArr;
};

// Пример:
let result = array_skip_until(testData, 2); // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, 'Rafshan'); // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, 'asd'); // []
console.log(`result`, result);
console.log(`result2`, result2);
console.log(`result3`, result3);
