//  Завдання на розгалуження
// 1.Визначити, чи число парне або непарне.
function IsEven(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}
console.log(IsEven(2));
console.log(IsEven(3));
console.log(IsEven(4));
console.log(IsEven(27));
console.log(IsEven(9));

// 2.Знайти максимум число з двох заданих.

function maxNumber(a, b) {
  if (a === b) {
    return 'The numbers are equal';
  } else if (a > b) {
    return `The number ${a} is greater than the number ${b}`;
  } else {
    return `The number ${b} is greater than the number ${a}`;
  }
}

console.log(maxNumber(3, 3));
console.log(maxNumber(1, 3));
console.log(maxNumber(4, 2));

// 3.Визначити, чи є число додатнім, від’ємним або нулем.
function numberSign(number) {
  if (number === 0) {
    return `The number ${number} are zero`;
  } else if (number > 0) {
    return `The number ${number} are positive`;
  }
  return `The number ${number} are negative`;
}

console.log(numberSign(7));
console.log(numberSign(-4));
console.log(numberSign(0));

// 4.Перевірити, чи є рік високосним.

function leapYear(year) {
  if (year === 1700 || year === 1800 || year === 1900) {
    return `The ${year} year are not leap year`;
  } else if (year % 4 === 0 && year % 100 === 0) {
    return `The ${year} year are leap year`;
  }
  return `The ${year} year are not leap year`;
}

console.log(leapYear(1800));
console.log(leapYear(2000));
console.log(leapYear(1997));
console.log(leapYear(1979));

// 5.Визначити день тижня за датою, формат дати(день.місяць.рік).

function weekDay(date) {
  let day = date.slice(0, 2);
  let month = date.slice(3, 5);
  let year = date.slice(6, 10);
  let a = Number.parseInt((14 - month) / 12);
  let y = year - a;
  let m = month + 12 * a - 2;
  let weekDay = Number.parseInt(
    (day + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12) % 7
  );
  console.log(weekDay);
  if (weekDay === 0) {
    return `Your birthday is Monday`;
  } else if (weekDay === 1) {
    return `Your birthday is Theterday`;
  } else if (weekDay === 2) {
    return `Your birthday is Wednesday `;
  } else if (weekDay === 3) {
    return `Your birthday is Thursday`;
  } else if (weekDay === 4) {
    return `Your birthday is Friday`;
  } else if (weekDay === 5) {
    return `Your birthday is Saturday`;
  }
  return `Your birthday is Sunday`;
}
console.log(weekDay(`12.01.1979`));
console.log(weekDay(`05.06.2025`));

// 6.Визначити, чи символ є літерою англійської aбетки.
function englishLetter(letter) {
  return letter.match(/[a-z]i/)
    ? `Your letter ${letter} is letter of english alphabet`
    : `Your letter ${letter} isn't letter of english alphabet`;
}

console.log(englishLetter(`a`));
console.log(englishLetter(`A`));
console.log(englishLetter(`9`));
console.log(englishLetter(`а`));

// 7.Порахувати кількість днів у місяці (залежно від місяця та року).
function monthDays(month) {
  if (
    month.toLowerCase() === `january` ||
    month.toLowerCase() === `march` ||
    month.toLowerCase() === `may` ||
    month.toLowerCase() === `jule` ||
    month.toLowerCase() === `august` ||
    month.toLowerCase() === `octoder` ||
    month.toLowerCase() === `december`
  ) {
    return 'The number of days in a month is 31 days';
  } else if (month.toLowerCase() === `february`) {
    return `The number of day in the month is 28 days`;
  } else {
    return `The number of day in the month is 30 days`;
  }
}

console.log(monthDays(`December`));
console.log(monthDays(`february`));
console.log(monthDays(`june`));

// 8.Вивести повідомлення, якщо число більше за 100.
const numerisUp = numeric =>
  numeric > 100
    ? `Your number is more than a one hundred!!!`
    : `Your number is less than a one hundred!!!`;

console.log(numerisUp(100));
console.log(numerisUp(99));
console.log(numerisUp(101));

// 9.Визначити, скільки років дитині (від 0 до 17 років), або дорослому.

const peopleAge = age => (age > 17 ? `You are man` : `You are baby`);

console.log(peopleAge(17));
console.log(peopleAge(18));
console.log(peopleAge(14));

function checkAge(age) {
  age = Number(age);
  if (age > 18) {
    return `You are an adult`;
  }
  if (age === 18) {
    return `You are child`;
  }
  return `You aren't an adult`;
}

console.log(checkAge(10));
console.log(checkAge(18));
console.log(checkAge(33));

// 10.Визначити день тижня за номером (1-7).
const weekNumberDay = numberDay => {
  if (numberDay === 1) {
    return `Monday`;
  }
  if (numberDay === 2) {
    return `Tuesday`;
  }
  if (numberDay === 3) {
    return `Wednesday`;
  }
  if (numberDay === 4) {
    return `Thursday`;
  }
  if (numberDay === 5) {
    return `Friday`;
  }
  if (numberDay === 6) {
    return `Saturday`;
  }
  if (numberDay === 7) {
    return `Sunday`;
  }
  return `The number ${numberDay} is wrong number day of week`;
};

console.log(weekNumberDay(3));
console.log(weekNumberDay(8));
console.log(weekNumberDay(1));
console.log(weekNumberDay(5));

// 11.Визначити, чи є число дільником числа 100.
const divisorNumber = divisor =>
  100 % divisor === 0
    ? `This number is the divisor of 100`
    : `This number isn't the divisor of 100`;
console.log(divisorNumber(50));
console.log(divisorNumber(33));
console.log(divisorNumber(1));
console.log(divisorNumber(25));
console.log(divisorNumber(13));

const divisorNumber2 = divisor => Boolean(100 % divisor === 0);

console.log(divisorNumber2(50));
console.log(divisorNumber2(33));
console.log(divisorNumber2(1));
console.log(divisorNumber2(25));
console.log(divisorNumber2(13));

// 12.Повторити кілька
// 13.Вивести повідомлення, якщо введене число є простим.
// 14.Визначити, яка порода тварини вказана (собака, кіт, інше).
// 15.Визначити, чи може людина отримати знижку (залежно від віку).
const discontAge = age => {
  if (age <= 18) {
    return `Your age is ${age} - your don't have any diskont`;
  }
  if (age > 18 && age <= 35) {
    return `Your age is ${age} - your diskont is 10%`;
  }
  return `Your age is ${age} - your diskont is 20%`;
};

console.log(discontAge(10));
console.log(discontAge(30));
console.log(discontAge(40));
console.log(discontAge(33));

// 16.Визначити, чи можна побудувати квадрат зі сторонами, що дорівнюють заданому числу.

const figure = (height, width) =>
  height === width ? `Figure is square` : `Figure isn't square`;

console.log(figure(2, 4));
console.log(figure(2, 2));
console.log(figure(3, 4));
console.log(figure(4, 4));
//
//Завдання для практики з оператором switch у JavaScript:
// 1.Класова оцінка
// Напишіть програму, яка приймає оцінку від 1 до 5 і виводить відповідний коментар:
// 1: "Незадовільно"
// 2: "Порада"
// 3: "Задовільно"
// 4: "Добре"
// 5: "Відмінно"

const classRating = rating => {
  switch (rating) {
    case 1:
      rating = `Незадовільно`;
      break;
    case 2:
      rating = `Порада`;
      break;
    case 3:
      rating = `Задовільно`;
      break;
    case 4:
      rating = `Добре`;
      break;
    case 5:
      rating = `Відмінно`;
      break;
    default:
      rating = `Занадто високий рейтинг`;
  }
  return rating;
};

console.log(classRating(2));
console.log(classRating(5));
console.log(classRating(6));

//2. Визначення пори року
// Змінна month містить назву місяця (наприклад, "січень"). Використайте switch, щоб визначити пору року:
// "грудень", "січень", "лютий" — зима
// "березень", "квітень", "травень" — весна
// "червень", "липень", "серпень" — літо
// "вересень", "жовтень", "листопад" — осінь

const season = monthSeason => {
  let month = monthSeason.toLowerCase();
  switch (month) {
    case `december`:
    case `january`:
    case `february`:
      month = `Winter`;
      break;
    case `march`:
    case `april`:
    case `may`:
      month = `Spring`;
      break;
    case 'june':
    case 'jule':
    case 'august':
      month = `Summer`;
      break;
    case 'september':
    case 'oktober':
    case 'november':
      month = `Autumn`;
      break;
    default:
      month = `There is no such month`;
  }
  return month;
};

console.log(season(`december`));
console.log(season(`DECEMBER`));
console.log(season(`April`));
console.log(season(`Грудень`));
console.log(season(`JUNE`));

// 3.Календар робочих днів
// Змінна day містить день тижня ("понеділок", "субота" тощо). За допомогою switch визначте, чи є цей день робочим (понеділок-п’ятниця) або вихідним (субота-неділя).
// Виведіть відповідне повідомлення.
const dayOfWeek = day => {
  day = day.toLowerCase();
  switch (day) {
    case `monday`:
    case `tuesday`:
    case `wednesday`:
    case `thursday`:
    case `friday`:
      day = `This day is workly`;
      break;
    case `saturday`:
    case `sunday`:
      day = `This day is weekend`;
      break;
  }
  return day;
};

console.log(dayOfWeek(`Friday`));
console.log(dayOfWeek(`monday`));
console.log(dayOfWeek(`SUNDAY`));
console.log(dayOfWeek(`Saturday`));

// 4. Обчислення дня тижня за номером
// Змінна num містить число від 1 до 7. Використайте switch, щоб вивести назву дня тижня: 1 — "Понеділок", 2 — "Вівторок", і так далі.
// Якщо число не в діапазоні 1-7 — виведіть "Некоректний номер дня".
const numberDayOfWeek = number => {
  number = Number(number);
  switch (number) {
    case 1:
      number = `Moonday`;
      break;
    case 2:
      number = -`Tuesday`;
      break;
    case 3:
      number = ` Wednesday`;
      break;
    case 4:
      number = `Thursday`;
      break;
    case 5:
      number = `Friday`;
      break;
    case 6:
      number = `Saturday`;
      break;
    case 7:
      number = `Sunday`;
      break;
    default:
      number = `Your number must be in diapason at 1 to 7`;
  }
  return number;
};

console.log(numberDayOfWeek(1));
console.log(numberDayOfWeek(9));
console.log(numberDayOfWeek(4));
console.log(numberDayOfWeek(7));
console.log(numberDayOfWeek(10));
// 5.Обробка команд меню
// Створіть змінну command з одним із значень: "start", "stop", "pause". За допомогою switch виведіть відповідне повідомлення:
// "start" — "Запуск..."
// "stop" — "Зупинка..."
// "pause" — "Паузу..."
// Якщо команда не розпізнана — "Некоректна команда".

const commandWord = command => {
  command = command.toLowerCase();
  switch (command) {
    case `start`:
      command = `Start the engine`;
      break;
    case `stop`:
      command = `Stop the engine`;
      break;
    case `pause`:
      command = `Pause the engine`;
      break;
    default:
      command = `Command is incorrect`;
  }
  return command;
};

console.log(commandWord(`start`));
console.log(commandWord(`Start`));
console.log(commandWord(`STOP`));
console.log(commandWord(`Go on`));

// Завдання для практики з методами рядків у JavaScript:

// 1.Напиши функцію, яка приймає рядок і повертає його у верхньому регістрі, використовуючи метод toUpperCase().
const upperCase = string => string.toUpperCase();

console.log(
  upperCase(`Given how Often quicksand deaths and near-deaths Occur in film.`)
);

// 2.Створи функцію, яка видаляє пробіли з початку і кінця рядка за допомогою trim().
const trimString = string => string.trim();

const trimStartTrim = string => string.trimStart();
console.log(
  trimStartTrim(
    `   Given how Often quicksand deaths and near-deaths Occur in film.         `
  )
);

console.log(
  trimStartTrim(
    `   Given how Often quicksand deaths and near-deaths Occur in film.         `
  )
);

// 3.Створи функцію, яка перевіряє, чи рядок починається з певної підстроки, використовуючи startsWith().
const stringStartWith = string => string.trim().startsWith(`Given`);

console.log(
  stringStartWith(
    `   Given how Often quicksand deaths and near-deaths Occur in film.         `
  )
);
console.log(
  stringStartWith(
    `  But an Internet search for deaths by quicksand won’t turn up much.     .`
  )
);

// 4.Напиши функцію, яка перевіряє, чи рядок закінчується на певну підстроку, використовуючи endsWith().
const stringEndsWith = string => string.endsWith(`much.`);

console.log(
  stringEndsWith(
    `  But an Internet search for deaths by quicksand won’t turn up much.     `
  )
);

const stringEndsWithTrim = string => string.trim().endsWith(`much.`);

console.log(
  stringEndsWithTrim(
    `  But an Internet search for deaths by quicksand won’t turn up much.     `
  )
);

// 5.Створи функцію, яка ділить рядок на масив слів за допомогою split().
const stringSplit = string => string.trim().split(` `);

console.log(
  stringSplit(
    `  But an Internet search for deaths by quicksand won't turn up much`
  )
);

// 6.Напиши функцію, яка об’єднує масив слів у один рядок через пробіл, використовуючи join().
const massiveJoin = massive => massive.join(` `);

console.log(
  massiveJoin([
    'But',
    'an',
    'Internet',
    'search',
    'for',
    'deaths',
    'by',
    'quicksand',
    "won't",
    'turn',
    'up',
    'much',
  ])
);

const massiveJoin2 = massive => massive.join(`,`);

console.log(
  massiveJoin2([
    'But',
    'an',
    'Internet',
    'search',
    'for',
    'deaths',
    'by',
    'quicksand',
    "won't",
    'turn',
    'up',
    'much',
  ])
);
// 7.Створи функцію, яка знаходить позицію першого входження підрядка у рядок через indexOf().

const stringIndexOf = string => string.toLowerCase().indexOf(`b`);

console.log(
  stringIndexOf(
    `But an Internet search for deaths by quicksand won't turn up much`
  )
);

// 8.Напиши функцію, яка змінює першу літеру рядка на велику, використовуючи charAt() і slice().

const stringCharAt = string => string.charAt(0) + string.toLowerCase().slice(1);

console.log(
  stringCharAt(
    `But an Internet search for deaths by quicksand won't turn up much`
  )
);
console.log(
  stringCharAt(
    `BUT AN Internet search for deaths by quicksand won't TURN up much`
  )
);
// 9.Створи функцію, яка видаляє всі входження певного символу з рядка за допомогою replaceAll().
const stringReplaceAll = string => string.replaceAll(`e`, ` `);

console.log(
  stringReplaceAll(
    `But an Internet search for deaths by quicksand won't turn up much`
  )
);
// 10.Напиши функцію, яка перевіряє, чи містить рядок певний підрядок, використовуючи includes().
const stringInclides = string => string.toLowerCase().includes(`but`);

console.log(
  stringInclides(
    `But an Internet search for deaths by quicksand won't turn up much`
  )
);

// Завдання з поєднанням кількох методів рядків у JavaScript:
// 1.Напиши функцію, яка отримує рядок, видаляє пробіли з початку і кінця, перетворює його в нижній регістр і повертає перші 10 символів.
const stringTrimLowerSlice = string => string.trim().toLowerCase().slice(0, 9);

console.log(
  stringTrimLowerSlice(
    `    But an Internet search for deaths by quicksand won't turn up much    `
  )
);

// 2.Створи функцію, яка знаходить позицію другого входження підрядка у рядок та повертає цю позицію.

const stringSecondPosision = (string, word) => {
  let firstIndex = string.toLowerCase().indexOf(word);
  return string.toLowerCase().indexOf(word, firstIndex + 1);
};

console.log(
  stringSecondPosision(
    `But an Internet search for but deaths by quicksand won't turn up much`,
    `but`
  )
);

// 3.Напиши функцію, яка перевіряє, чи починається рядок з великої літери і закінчується на знак питання, використовуючи startsWith(), endsWith(), toUpperCase().

const stringUpperCaseEndStartsWith = string => {
  let firstLetter = string.charAt(0);
  return (
    string.startsWith(firstLetter) ===
      string.toUpperCase().startsWith(firstLetter) && string.endsWith(`?`)
  );
};

console.log(
  stringUpperCaseEndStartsWith(
    `But an Internet search for but deaths by quicksand won't turn up much?`
  )
);
const stringUpperCaseEndStartsWith2 = string =>
  string.startsWith(string[0].toUpperCase()) && string.endsWith(`?`);

console.log(
  stringUpperCaseEndStartsWith2(
    `But an Internet search for but deaths by quicksand won't turn up much?`
  )
);
console.log(
  stringUpperCaseEndStartsWith2(
    `but an Internet search for but deaths by quicksand won't turn up much?`
  )
);
console.log(
  stringUpperCaseEndStartsWith2(
    `But an Internet search for but deaths by quicksand won't turn up much`
  )
);

// 4.Створи функцію, яка змінює всі входження певного слова на інше та робить першу літеру рядка великою.
const stringReplaceToUpperCase = (string, word, newWord) =>
  string.toLowerCase().replaceAll(word, newWord).toUpperCase().charAt(0) +
  string.toLowerCase().replaceAll(word, newWord).slice(1);

console.log(
  stringReplaceToUpperCase(
    `But an Internet search for but deaths by quicksand won't turn but up much`,
    `but`,
    `more`
  )
);

// 5.Напиши функцію, яка отримує рядок, розділяє його на слова, і повертає кількість слів, що починаються з голосної.
// 6.Створи функцію, яка об’єднує кілька рядків у один, але перед цим видаляє всі коми і перетворює їх у тире.
// 7.Напиши функцію, яка find першу позицію символу 'a', та повертає підрядок, починаючи з цієї пози до кінця.
const stringFindLetter = (string, letter) => {
  if (string.indexOf(letter) === -1) {
    return `The letter ${letter} not found in this string`;
  }
  return string.slice(string.indexOf(letter));
};

console.log(
  stringFindLetter(
    `But an Internet search for deaths by quicksand won't turn up much`,
    `s`
  )
);

console.log(
  stringFindLetter(
    `But an Internet search for deaths by quicksand won't turn up much`,
    `z`
  )
);

// 8.Створи функцію, яка приймає рядок і повертає його з усією маленькою літерою, окрім першої літери слова, яке починається з великої.
const stringLowerCase = string =>
  string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);

console.log(
  stringLowerCase(
    `But an Internet Search For Deaths by quicksand won't turn up much`
  )
);
// 9.Створи функцію, яка видаляє всі зайві пробіли і повертає довжину отриманого рядка.
const stringTrimLength = string => string.replaceAll(` `, ``).length;

console.log(
  stringTrimLength(
    `     But an Internet Search For Deaths by quicksand won't turn up much`
  )
);
// 10.Напиши функцію, яка у рядку замінює всі входження певної підрядка на зворотній порядок і повертає новий рядок.

// Завдання на цикли
// 1.Вивести всі числа від 1 до 10.

const counterWhile = number => {
  let count = 1;
  while (count <= number) {
    console.log(count);
    count += 1;
  }
};

counterWhile(10);

const counterWhileDo = number => {
  let i = 1;
  do {
    console.log(i);
    i += 1;
  } while (i <= number);
};

counterWhileDo(10);

const counterFor = number => {
  for (let i = 1; i <= number; i += 1) {
    console.log(i);
  }
};

counterFor(10);

function calculateTotal(number) {
  let total = 0;
  let i = 0;
  while (i < number) {
    i += 1;
    total += i;
  }
  return total;
}
console.log(calculateTotal(3));

// 2.Вивести всі парні числа в діапазоні від 1 до 50.
const countWhileEven = number => {
  let i = 1;
  while (i < number) {
    i += 1;
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

countWhileEven(15);

const counterDoWhileOdd = number => {
  let i = 1;
  do {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i += 1;
  } while (i <= number);
};

counterDoWhileOdd(15);

const counterForOdd = number => {
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

counterForOdd(15);
// 3.Обчислити суму чисел від 1 до 100.
const sumWhile = number => {
  let i = 1;
  sum = 0;
  while (i <= number) {
    sum += i;
    i += 1;
  }
  return sum;
};

console.log(sumWhile(100));

const sumDoWhile = num => {
  let i = 1;
  let sum = 0;
  do {
    sum += i;
    i += 1;
  } while (i <= num);
  return sum;
};

console.log(sumDoWhile(100));

const sumFor = num => {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    sum += i;
  }
  return sum;
};

console.log(sumFor(100));
// 4.Обчислити факторіал числа.
const factorialWhile = num => {
  fact = 1;
  i = 1;
  while (i <= num) {
    fact = fact * i;
    i += 1;
  }
  return fact;
};

console.log(factorialWhile(6));

const factorialDoWhile = num => {
  fact = 1;
  i = 1;
  do {
    fact = fact * i;
    i += 1;
  } while (i <= num);
  return fact;
};

console.log(factorialDoWhile(6));

const factorialFor = num => {
  let fact = 1;
  for (let i = 1; i <= num; i += 1) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorialFor(6));

// 5.Вивести таблицю множення для числа 7.
const multiplicatorTable = num => {
  let i = 1;
  let multi = 1;
  while (i <= 9) {
    multi = i * num;
    console.log(i, multi);
    i += 1;
  }
};

multiplicatorTable(2);
multiplicatorTable(7);
multiplicatorTable(9);

const multiDoWhile = num => {
  let i = 1;
  let multi = 1;
  do {
    multi = i * num;
    console.log(`${i}x${num}`, multi);
    i += 1;
  } while (i <= 9);
};

multiDoWhile(2);
multiDoWhile(5);

const multiFor = num => {
  multi = 1;
  for (let i = 1; i <= 9; i += 1) {
    multi = i * num;
    console.log(`${i}x${num}`, multi);
  }
};

multiFor(6);

// 6.Знайти суму всіх парних чисел від 1 до 100.
const sumOdd = num => {
  let sum = 0;
  let i = 1;
  while (i <= num) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
    i += 1;
  }
  return sum;
};

console.log(sumOdd(6));
console.log(sumOdd(20));

// 7.Вивести всі числа, кратні 3, у діапазоні від 1 до 30.
// 8.Обрізати з рядка все, що довше ніж 10 символів.
// 9.Порахувати кількість цифр у числі.
const sunDig = num => Math.abs(num).toString().length;

console.log(sunDig(-2442222));
console.log(sunDig(2222));

// 10.Вивести всі числа від 10 до 1 в зворотному порядку.
const digitReversWhile = num => {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
};

digitReversWhile(4);

const digitReversDoWhile = num => {
  do {
    console.log(num);
    num = num - 1;
  } while (num >= 1);
};

digitReversDoWhile(4);

const digitReversFor = num => {
  for (num; num >= 1; num -= 1) {
    console.log(num);
  }
};

digitReversFor(10);

// 11.Обчислити суму цифр у числі.
const digSum = num => {
  let str = Math.abs(num).toString();
    let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
      sum += Number(str[i]);
    }
    return sum
};

console.log(digSum(5674));

// 12.Вивести цілі числа до заданого числа, що є простими.
// 13.Створити цикл, що генерує випадкові числа до 1 до 100, поки не з’явиться число 50.
// 14.Вивести всі числа від 1 до 100, пропускаючи числа, що кратні 4.
// 15.Реалізувати фібоначчі до n-ого числа.
