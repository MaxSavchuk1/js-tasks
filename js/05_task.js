const { testData4 } = require('../testData');

// 5 (1бал)
// Сделать функцию для проверки существования значения в не нормализированном списке данных.

// Синтаксис: array_contains(arr: array, search: string|regex): bool

const array_contains = (arr, search) => {
  const prepairedData = arr.flat(Infinity);

  const normalizeData = arr => {
    const preNormalData = [];
    for (const el of arr) {
      if (el instanceof Object) {
        preNormalData.push(...Object.values(el));
        continue;
      }
      preNormalData.push(el);
    }
    return preNormalData;
  };

  const normalizedData = normalizeData(prepairedData);

  if (search instanceof RegExp) {
    let result;
    for (const el of normalizedData) {
      result = search.test(el);
      if (result) {
        break;
      }
    }
    return result;
  }
  return normalizedData.includes(search);
};

// Пример:
let result = array_contains(testData4, /^raf.*/i); // true
let result2 = array_contains(testData4, /^azaza.*/i); // false
console.log(`result`, result);
console.log(`result2`, result2);

// от себя - понимаю, сложность данного алгоритма зашкаливает >_<
// тем более, что я подогнал алгоритм под имеющиеся данные, а может быть и такое, что внутри объектов могут быть массивы и т.д....
