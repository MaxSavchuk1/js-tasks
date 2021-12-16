const { testData, testData2, testData3, testData4 } = require('./testData');

// 2 (1бал)
// Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений

// Синтаксис: array_avg(arr: array[, skipNaN: bool = false]): number

const array_avg = (arr, skipNaN = false) => {
  let result = 0;
  let countNumbers = 0;
  for (const el of arr) {
    if (typeof el === 'number') {
      result += el;
      countNumbers++;
    }
  }
  if (skipNaN) {
    return result / arr.length;
  }
  return result / countNumbers;
};

// Пример:
let result = array_avg(testData2); // ~265
let result2 = array_avg(testData); // ~420
let result3 = array_avg(testData, true); // ~191
console.log(`result`, result);
console.log(`result`, result2);
console.log(`result`, result3);
