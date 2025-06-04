//  Завдання на розгалуження
// 1.Визначити, чи число парне або непарне.
function IsEven(number) { 
    return number % 2 === 0 ? "even" : "odd"; 
} 
console.log(IsEven(2));
console.log(IsEven(3));
console.log(IsEven(4));
console.log(IsEven(27));
console.log(IsEven(9));

// 2.Знайти максимум число з двох заданих.

function maxNumber(a, b) {
    if (a === b) { return "The numbers are equal" }
    else if (a > b) { return `The number ${a} is greater than the number ${b}` }
    else { return `The number ${b} is greater than the number ${a}` };
};

console.log(maxNumber( 3, 3));
console.log(maxNumber(1, 3));
console.log(maxNumber(4, 2));

// 3.Визначити, чи є число додатнім, від’ємним або нулем.
function numberSign(number) {
    if (number === 0) { return `The number ${number} are zero` }
    else if (number > 0) { return `The number ${number} are positive` }
    return `The number ${number} are negative`
};

console.log(numberSign(7));
console.log(numberSign(-4));
console.log(numberSign(0));

// 4.Перевірити, чи є рік високосним.

function leapYear(year) {
    if (year === 1700 || year === 1800 || year === 1900) {
        return `The ${year} year are not leap year`
    } else if (year % 4 === 0 && year % 100 === 0) {
        return `The ${year} year are leap year`
    } return `The ${year} year are not leap year` 
    }

console.log(leapYear(1800));
console.log(leapYear(2000));
console.log(leapYear(1997))

// 6.Визначити, чи символ є літерою англійської abетки.
// 7.Порахувати кількість днів у місяці (залежно від місяця та року).
// 8.Вивести повідомлення, якщо число більше за 100.
// 9.Визначити, скільки років дитині (від 0 до 17 років), або дорослому.
// 10.Визначити день тижня за номером (1-7).
// 11.Визначити, чи є число дільником числа 100.
// 12.Повторити кілька
// 13.Вивести повідомлення, якщо введене число є простим.
// 14.Визначити, яка порода тварини вказана (собака, кіт, інше).
// 15.Визначити, чи може людина отримати знижку (залежно від віку).
// 16.Визначити, чи можна побудувати квадрат зі сторонами, що дорівнюють заданому числу.
// Завдання на цикли
// 1.Вивести всі числа від 1 до 100.
// 2.Вивести всі парні числа в діапазоні від 1 до 50.
// 3.Обчислити суму чисел від 1 до 100.
// 4.Обчислити факторіал числа.
// 5.Вивести таблицю множення для числа 7.
// 6.Знайти суму всіх парних чисел від 1 до 100.
// 7.Вивести всі числа, кратні 3, у діапазоні від 1 до 30.
// 8.Обрізати з рядка все, що довше ніж 10 символів.
// 9.Порахувати кількість цифр у числі.
// 10.Вивести всі числа від 10 до 1 в зворотному порядку.
// 11.Обчислити суму цифр у числі.
// 12.Вивести цілі числа до заданого числа, що є простими.
// 13.Створити цикл, що генерує випадкові числа до 1 до 100, поки не з’явиться число 50.
// 14.Вивести всі числа від 1 до 100, пропускаючи числа, що кратні 4.
// 15.Реалізувати фібоначчі до n-ого числа.

