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
console.log(leapYear(1997));
console.log(leapYear(1979))

// 5.Визначити день тижня за датою, формат дати(день.місяць.рік).

function weekDay(date) {
    let day = date.slice(0, 2);
    let month = date.slice(3, 5);
    let year = date.slice(6, 10);
    let a =Number.parseInt((14 - month) / 12);
    let y = (year - a);
    let m = month + (12 * a) - 2;
    let weekDay = Number.parseInt((day + y + (y / 4) - (y / 100) + (y / 400) + (31 * m) / 12) % 7);
    console.log(weekDay);
    if (weekDay === 0) {
        return `Your birthday is Monday`
    } else if ( weekDay === 1) {
        return `Your birthday is Theterday`
    } else if ( weekDay === 2) {
        return `Your birthday is Wednesday `
    } else if ( weekDay === 3) {
        return `Your birthday is Thursday`
    } else if ( weekDay === 4) {
        return `Your birthday is Friday`
    } else if ( weekDay === 5) {
        return `Your birthday is Saturday`
    }
    return `Your birthday is Sunday`
}
console.log(weekDay(`12.01.1979`));
console.log(weekDay(`05.06.2025`));

// 6.Визначити, чи символ є літерою англійської aбетки.
function englishLetter(letter) {
return letter.match(/[a-z]i/) ? `Your letter ${letter} is letter of english alphabet`: `Your letter ${letter} isn't letter of english alphabet`
}
 
console.log(englishLetter(`a`));
console.log(englishLetter(`A`));
console.log(englishLetter(`9`));
console.log(englishLetter(`а`));

// 7.Порахувати кількість днів у місяці (залежно від місяця та року).
function monthDays(month) {
    if (month.toLowerCase() === `january`||
        month.toLowerCase() === `march` ||
        month.toLowerCase() === `may` ||
        month.toLowerCase() === `jule` ||
        month.toLowerCase() === `august` ||
        month.toLowerCase() === `octoder` ||
        month.toLowerCase() === `december`) { return 'The number of days in a month is 31 days'}
    else if (month.toLowerCase() === `february`) { return `The number of day in the month is 28 days` } else {
        return `The number of day in the month is 30 days`;
    };
};

console.log(monthDays(`December`));
console.log(monthDays(`february`));
console.log(monthDays(`june`));

// 8.Вивести повідомлення, якщо число більше за 100.
const numerisUp = numeric => numeric > 100 ? `Your number is more than a one hundred!!!` : `Your number is less than a one hundred!!!`;

console.log(numerisUp(100));
console.log(numerisUp(99));
console.log(numerisUp(101));

// 9.Визначити, скільки років дитині (від 0 до 17 років), або дорослому.

const peopleAge = age => age > 17 ? `You are man` : `You are baby`;

console.log(peopleAge(17));
console.log(peopleAge(18));
console.log(peopleAge(14));

function checkAge(age) {
    age = Number(age);
    if (age > 18)
    {
        return `You are an adult`;
    } if (age === 18)
    {
        return `You are child`;
            };
        return `You aren't an adult`;
    };

console.log(checkAge(10));
console.log(checkAge(18));
console.log(checkAge(33));
    


// 10.Визначити день тижня за номером (1-7).
// 11.Визначити, чи є число дільником числа 100.
// 12.Повторити кілька
// 13.Вивести повідомлення, якщо введене число є простим.
// 14.Визначити, яка порода тварини вказана (собака, кіт, інше).
// 15.Визначити, чи може людина отримати знижку (залежно від віку).
// 16.Визначити, чи можна побудувати квадрат зі сторонами, що дорівнюють заданому числу.
//
//  5 завдань для практики з оператором switch у JavaScript:
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
        rating =`Занадто високий рейтинг`;
    };
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
        case `december` || `january` || `february`:
            month = `Winter`;
            break;
        case `march` || `april` || `may`:
            month = `Spring`;
            break;
        case "june" || "jule" || "august":
            month = `summer`
            break;
        case "september" || "oktober" || "november":
            month = `autumn`
            break;
        default:
            month = `There is no such month`;                      
    }
    return month;
};

console.log(season(`грудень`));
console.log(season(`ГРУДЕНЬ`));
console.log(season(`april`));
console.log(season(`Грудень`));


// 3.Календар робочих днів
// Змінна day містить день тижня ("понеділок", "субота" тощо). За допомогою switch визначте, чи є цей день робочим (понеділок-п’ятниця) або вихідним (субота-неділя). Виведіть відповідне повідомлення.
// 4. Обчислення дня тижня за номером
// Змінна num містить число від 1 до 7. Використайте switch, щоб вивести назву дня тижня: 1 — "Понеділок", 2 — "Вівторок", і так далі. Якщо число не в діапазоні 1-7 — виведіть "Некоректний номер дня".
// 5.Обробка команд меню
// Створіть змінну command з одним із значень: "start", "stop", "pause". За допомогою switch виведіть відповідне повідомлення:
// "start" — "Запуск..."
// "stop" — "Зупинка..."
// "pause" — "Паузу..."
// Якщо команда не розпізнана — "Некоректна команда".

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

