const { testData, testData2, testData3, testData4 } = require('./testData');

// 2 (1бал)
// Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений

// Синтаксис: array_avg(arr: array[, skipNaN: bool = false]): number

// Пример:
let result = array_avg(testData2); // ~265
let result2 = array_avg(testData); // ~420
let result3 = array_avg(testData, true); // ~191
