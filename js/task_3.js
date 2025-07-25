const courses = [`HNML`, `CSS`, `JavaScript`, `React`, `Node.js`];

console.log(courses[2]);

courses[1] = `Angulyar`;

console.log(courses);

courses[1] = `Angular`;

console.log(courses);

// courses = [1,2,3]

const firstElement = courses[0];

console.log(firstElement);

courses[0] = `Angular`;

console.log(firstElement);

console.log(courses);

const lastElement = courses[courses.length - 1];

console.log(lastElement);

let a = 10;

const b = a;
console.log(a, b);

a = 12;
console.log(a, b);

const arr1 = [1, 2, 3, 4];

const arr2 = arr1;

console.log(arr1, arr2);

arr1[0] = 5;

console.log(arr1, arr2);

const arr3 = [`Nataliya Svyata`, `Evgen Krasyviy`, `Voldemar Bajaniy`];

console.log(arr3);

const newArr3 = arr3.join();
console.log(newArr3);
const new2Arr3 = arr3.join(`, `);
console.log(new2Arr3);

const numberString = `1; 25; 35; 45; 5`;

console.log(numberString);

const numberArr = numberString.split(`;`);
console.log(numberArr);

const arr3Copy = arr3.slice();

console.log(arr3Copy, arr3);

arr3[0] = `Lucifer Morningstar`;
console.log(arr3Copy, arr3);

arr3Copy[arr3Copy.length] = `Lucifer Morningstar`;
console.log(arr3Copy, arr3);

const arr4 = arr3.concat(arr3Copy);

console.log(arr4);

arr4.push(`Veronichka Gutt`);

console.log(arr4);

arr4.unshift(`Ludmyla Velyka`);
console.log(arr4);

arr4.pop();
console.log(arr4);

arr4.shift();
console.log(arr4);

// const arr4Copy = arr4.slice(1, arr4.length - 1);
// console.log(arr4Copy);

// arr4.splice(2,1);
// console.log(arr4);
const arr5 = arr4.concat(`Sergiy Roga`, `Panas Nemyrniy`, arr3);

// console.log(arr5);

// console.log(arr5.indexOf(`Evgen Krasyviy`));
// console.log(arr5.lastIndexOf(`Evgen Krasyviy`));
// console.log(arr5.includes(`Evgen Krasyviy`));
// console.log(arr5.includes(`Evgen Nekrasyviy`));

// for (let i = 0; i < arr5.length; i++) {
//   console.log(arr5[i]);
// }

// for (const el of arr5) {
//   console.log(el);
// }
const arrObj = [
  { id: 1, name: `Lucifer Morningstar` },
  { id: 2, name: `Evgen Krasyviy` },
  { id: 3, name: `Voldemar Bajaniy` },
  { id: 4, name: `Nataliya Svyata` },
  { id: 5, name: `Sergiy Roga` },
  { id: 6, name: `Panas Nemyrniy` },
  { id: 7, name: `Evgen Krasyviy` },
];

// console.log(arrObj);

// for (const el of arrObj) {
//     console.log(el);
// };

for (let i = 0; i < arrObj.length; i = i + 2) {
  console.log(arrObj[i]);
}

for (const el of arrObj) {
  console.log(el);
}

// const sum = function (numA, numB) {
//     console.log(numA+numB)
// }

// sum (4, 5)

const fn = function () {
  total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total / arguments.length;
};

console.log(fn(2, 4, 6, 8));

// const arrObjFind = arrObj.find()

// ==================== 20 ЗАДАЧ ДЛЯ САМОСТОЯТЕЛЬНОГО РЕШЕНИЯ ====================

console.log('\n=== ЗАДАЧИ ДЛЯ САМОСТОЯТЕЛЬНОГО РЕШЕНИЯ ===\n');

// Задача 1: Найти все нечетные числа в массиве [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Ожидаемый результат: [1, 3, 5, 7, 9]

// function evenNumbers(numbers) {
//   const even = [];
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//       console.log(numbers[i]);
//       even.push(numbers[i]);
//     }
//   }
//   return even;
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// const evenNumbers2 = numbers => {
//   const even = [];
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//       console.log(numbers[i]);
//       even.push(numbers[i]);
//     }
//   }
//   return even;
// };

// console.log(evenNumbers2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Задача 2: Возвести в квадрат все элементы массива [2, 4, 6, 8, 10]
// Ожидаемый результат: [4, 16, 36, 64, 100]

// Задача 3: Найти произведение всех элементов массива [1, 2, 3, 4, 5]
// Ожидаемый результат: 120

// Задача 4: Проверить, все ли элементы массива [2, 4, 6, 8, 10] четные
// Ожидаемый результат: true

// const even = numbers => {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(even([2, 4, 6, 8, 10]));
// console.log(even([2, 4, 5, 6, 8, 10]));

// Задача 5: Проверить, есть ли в массиве ['apple', 'banana', 'cherry'] слово длиннее 5 символов
// Ожидаемый результат: true

// Задача 6: Найти первое слово в массиве ['cat', 'elephant', 'dog', 'butterfly'], которое содержит букву 'e'
// Ожидаемый результат: 'elephant'

// Задача 7: Найти индекс первого числа больше 15 в массиве [5, 10, 12, 18, 25, 7]
// Ожидаемый результат: 3

// Задача 8: Отсортировать массив строк ['banana', 'apple', 'cherry', 'date'] по алфавиту
// Ожидаемый результат: ['apple', 'banana', 'cherry', 'date']

// Задача 9: Получить последние 3 элемента массива [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Ожидаемый результат: [8, 9, 10]

// Задача 10: Создать массив из чисел от 1 до 10, где каждое число умножено на 3
// Ожидаемый результат: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// Задача 11: Удалить дубликаты из массива [1, 2, 2, 3, 3, 3, 4, 4, 5]
// Ожидаемый результат: [1, 2, 3, 4, 5]

// const delDublucates = numbers => {
//   const newArr = [numbers[0]];
//   for (let i = 1; i < numbers.length; i++) {
//     if (!newArr.includes(numbers[i])) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
// };
// console.log(
//   delDublucates([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8])
// );

// Задача 12: Найти второй по величине элемент в массиве [45, 67, 23, 89, 12, 156, 34]
// Ожидаемый результат: 89
// const secondNumber = numbers => {
//   const arrNumbers = [numbers[0], numbers[0]];
//   for (let i = 1; i < numbers.length; i++) {
//     if (arrNumbers[1] < numbers[i]) {
//       arrNumbers[0] = arrNumbers[1];
//       arrNumbers[1] = numbers[i];
//     }
//   }
//   return arrNumbers[0];
// };

// console.log(secondNumber([45, 67, 23, 89, 12, 156, 22, 34, 189]));

// Задача 13: Разделить массив чисел [1, 2, 3, 4, 5, 6, 7, 8, 9] на положительные числа меньше 5 и больше или равные 5
// Ожидаемый результат: {less: [1, 2, 3, 4], greater: [5, 6, 7, 8, 9]}

// Задача 14: Подсчитать количество гласных букв в каждом слове массива ['hello', 'world', 'javascript']
// Ожидаемый результат: [2, 1, 3] (гласные: a, e, i, o, u)

// Задача 15: Оставить только строки, которые начинаются с заглавной буквы в массиве ['Hello', 'world', 'JavaScript', 'array']
// Ожидаемый результат: ['Hello', 'JavaScript']

// Задача 16: Преобразовать массив температур по Цельсию [0, 20, 30, 40] в температуры по Фаренгейту
// Формула: F = C * 9/5 + 32
// Ожидаемый результат: [32, 68, 86, 104]

// Задача 17: Найти все палиндромы в массиве ['level', 'hello', 'radar', 'world', 'madam']
// Ожидаемый результат: ['level', 'radar', 'madam']

// Задача 18: Создать массив объектов из массива имен ['Anna', 'Bob', 'Charlie'], где каждый объект содержит имя и его длину
// Ожидаемый результат: [{name: 'Anna', length: 4}, {name: 'Bob', length: 3}, {name: 'Charlie', length: 7}]

// Задача 19: Разбить массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] на группы по 4 элемента
// Ожидаемый результат: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

const arrFour = numbers => {
  const result = [];
  for (let i = 0; i < numbers.length; i += 4) {
    result.push(numbers.slice(i, i + 4));
    console.log(result);
  }
  return result;
};

// Тестируем функцию
console.log('Задача 19:');
console.log(arrFour([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

// Задача 20: Найти сумму квадратов всех четных чисел в массиве [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Ожидаемый результат: 220 (2² + 4² + 6² + 8² + 10² = 4 + 16 + 36 + 64 + 100)

console.log('\n=== РЕШИТЕ ЭТИ ЗАДАЧИ САМОСТОЯТЕЛЬНО! ===');
console.log(
  'Используйте методы: filter(), map(), reduce(), some(), every(), find(), findIndex(), sort(), slice(), и др.'
);

// Место для ваших решений:

// Решение задачи 1:

// Решение задачи 2:

// Решение задачи 3:

// Решение задачи 4:

// Решение задачи 5:

// Решение задачи 6:

// Решение задачи 7:

// Решение задачи 8:

// Решение задачи 9:

// Решение задачи 10:

// Решение задачи 11:

// Решение задачи 12:

// Решение задачи 13:

// Решение задачи 14:

// Решение задачи 15:

// Решение задачи 16:

// Решение задачи 17:

// Решение задачи 18:

// Решение задачи 19:

// Решение задачи 20:
