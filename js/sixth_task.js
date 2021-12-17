const { testData4 } = require('../testData');
// 6 (1бал)
// Сделать функцию для получения данных с массивов по указанному пути (аминь).

// Синтаксис: array_get(arr: array, path:string): any

const array_get = (arr, path) => {
  const arrayOfPaths = path
    .split('.')
    .join('')
    .split('[')
    .join('')
    .split(']')
    .filter(el => el !== '');

  let startIndex = 0;
  let lastIndex = arrayOfPaths.length - 1;
  let internalData;
  const found = arr => {
    if (startIndex > lastIndex) {
      return internalData;
    }
    internalData = arr[arrayOfPaths[startIndex]];
    ++startIndex;
    return found(internalData);
  };
  return found(arr);
};

// Пример:
let result = array_get(testData4, '[5].name'); // "Rafshan"
let result2 = array_get(testData4, '[17][0][0][0][11][0]'); // {name: "Rafshan", email: "rafshan@example.com", age: 11}
let result3 = array_get(testData4, '[17][0][0][0][11][0][name]'); // "Rafshan"

console.log(result);
console.log(result2);
console.log(result3);
