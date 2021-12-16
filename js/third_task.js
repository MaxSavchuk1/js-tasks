const { testData2 } = require('../testData');

// 3 (1бал)
// Сделать функцию которая разбивает массив на подмассивы указанной длинны.

// Синтаксис: array_chunk(arr: array, count: number): any[]

const array_chunk = (arr, count) => {
  const resultArray = [];
  for (let i = 0; i < arr.length; i + count) {
    const chunk = arr.splice(i, count);
    resultArray.push(chunk);
  }
  return resultArray;
};

// Пример:
let result = array_chunk(testData2, 2); // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]
console.log(`result`, result);
