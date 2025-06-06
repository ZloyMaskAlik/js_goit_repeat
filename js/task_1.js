// 1. Оголосити змінну з ім’ям name і присвоїти їй своє ім’я.

let name = "Voldemar";
console.log(name);
console.log( typeof name );

let value = null;
console.log(value);
console.log(typeof value);

let number = 23;
console.log(number);
console.log(typeof number);

let value2
console.log(value2);
console.log(typeof value2);

// 2. Оголосити константу PI і присвоїти їй значення 3.14.

const pi = 3.1415926;
console.log(pi);
console.log(typeof pi);

const greeting = "Hello world!";
console.log(greeting);
console.log(typeof greeting);

// 3. Створити функцію greet, яка приймає ім’я і виводить привітання.

function greet(name){console.log(`Hello ${name}`)};

greet('Voldemar');

// 4. Створити змінну age і присвоїти їй ваше нинішнє вік.

let age = 46;
console.log(age);
console.log(typeof age);

// 5. Написати функцію sum, яка приймає два числа і повертає їх суму.

function sum(a, b) { console.log(`result: ${a + b}`) };

sum(1, 2);

function iam(name, age) { console.log (`My name is ${name} and my age is ${age} years`)};

iam(`Voldemar`, 42);

function sumToFixed(a, b) {
    return (a / b).toFixed(1);
};

console.log(sumToFixed(9, 8));

function sumToFixedTwo(a, b, c) { 
    return (a / b * c).toFixed(3);
};

console.log(sumToFixedTwo(2, 9, 5));

// 6. Оголосити змінну isStudent і присвоїти їй значення true або false.

let isStudent = true;

console.log(isStudent);
console.log(typeof isStudent);

// 7. Створити функцію isAdult, яка приймає вік і повертає true, якщо вік ≥ 18.

function isAdult(age) { console.log(age >= 18) };

isAdult(21);


function makeTransaction(quantity, pricePerDroid) {
    return `You ordered ${quantity} droids worth ${pricePerDroid*quantity} credits`
};

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price*deliveryFee} credits`
 };

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

function getElementWidth(content, padding, border) { 
    const contentNun = Number.parseInt(content);
    const paddingNum = Number.parseInt(padding);
    const borderNum = Number.parseInt(border);
    return contentNun + 2 * paddingNum + 2*borderNum;
}; 

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// 8. Визначити змінну car, яка містить об’єкт з властивостями brand, model, year.
let car = {
    brand: ``, model:``, year:``,
};

console.log(car)

// 9. Створити функцію printObject, яка приймає об’єкт і виводить його властивості.

// 10. Оголосити масив numbers із кількома числами.

const numbers = [1, 2, 3, 4];

console.log(numbers);

// 11. Написати функцію getMax, яка приймає масив чисел і повертає найвище.
// 12. Створити функцію isEven, яка приймає число і повертає true, якщо число парне.

function isEven(number) { 
    return Boolean(number/2==(number/2).toFixed(0))
};

console.log(isEven(3));
console.log(isEven(8));
console.log(isEven(16));
console.log(isEven(35));

function isEven2(number) { 
    return number % 2 === 0;
}

console.log(isEven2(3));
console.log(isEven2(8));
console.log(isEven2(2216));
console.log(isEven2(35));

// 13. Оголосити змінну message і присвоїти їй рядкове значення.
const message = `It's my message`;

console.log(typeof message);

// 14. Створити функцію reverseString, яка повертає зворотній рядок.
// 15. Створити функцію calculateArea, яка приймає радіус і повертає площу кола.
 
function calculateArea(r) {
    const pi= 3.1415926
    return (pi * r**2).toFixed(2);
}

console.log(calculateArea(4));
console.log(calculateArea(6));
console.log(calculateArea(10));

// 16. Зробити умову, що якщо age ≥ 65, вивести "Ви пенсіонер", інакше — "Ви ще працюєте".
// 17. Створити функцію fizzBuzz, яка приймає число і виводить "Fizz" або "Buzz" відповідно.
// 18. Оголосити змінну isLoggedIn і встановити її у false, потім написати функцію login.
// 19. Створити функцію calculateBMI, яка приймає вагу і зріст, і повертає ІМТ.
// 20. Оголосити об’єкт user, який має властивості name, age, email.
// 21. Зробити функцію updateUser, яка оновлює властивості об’єкта user.
// 22. Оголосити змінну randomNumber і присвоїти їй випадкове число від 1 до 100.

const randomNumber = () => Math.random().toFixed(2) * 100;
 
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

// 23. Створити функцію isPrime, яка перевіряє, чи число — просте.
// 24. Написати функцію capitalize, яка робить першу літеру рядка великою.
// 25. Створити функцію calculateTip, яка обчислює чайові (процент від суми).

function calculateTip(check, tip) {
    return `Your tips from the restaurant check are ${(check*tip/100).toFixed(2)}$`
};

console.log(calculateTip(120,15));

// 26. Оголосити змінну currentTime і отримати поточний час.
// 27. Написати функцію daysBetween, яка рахує кількість днів між двома датами.
// 28. Створити масив з іменами і записати функцію greetAll, яка привітає всіх.
// 29. Оголосити глобальну функцію sayHello, яка виводить "Привіт".
// 30. Створити клас Person з властивостями name і age, і створити об’єкт.
