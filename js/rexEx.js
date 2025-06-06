// 1.Перевірка електронної пошти
// Напишіть регулярний вираз, який перевіряє, чи є рядок валідною email-адресою.
function emailRules(email) {
  return /^[\w\d][\w\9\.\_\+\-]{1,48}[^\.$]@[\w\9\_\+\-]{1,48}\.{1}\w{1,4}/.test(
    email
  );
}

console.log(emailRules(`simple@example.com`));
console.log(emailRules(`simple98@example.com`));
console.log(emailRules(`simpl.98e@example.com`));
console.log(emailRules(`very.common@example.com`));
console.log(emailRules(`@simple@example.com`));
console.log(emailRules(` simple@example.com`));

// 2.Знайти всі цифри у рядку
// Напишіть регулярний вираз, який знаходить усі цифри в заданому рядку.
function allDigits(string) {
  return string.match(/[0-9]{2,}/g);
}

console.log(
  allDigits(
    `в цьому 1999 році було використано близько 30 штук фаллоімітаторів 2-ма співробітницями`
  )
);

// 3.Перевірка пароля
// Створіть регулярний вираз, який підтверджує, що пароль містить щонайменше 8 символів, одну велику літеру, одну малу літеру та одну цифру.
function passwordCheck(password) {
  return /(?=.+[a-z])(?=.+[A-Z])(?=.+\d).{8,}/.test(password)
    ? 'Yous password is correct'
    : 'Your password isn`t difficult';
}

console.log(passwordCheck(`asfee`));
console.log(passwordCheck(`asfe3wAAAe`));
console.log(passwordCheck(`asfe3wwwwwe`));

// 4.Знайти всі слова, що починаються з великою літери
// Напишіть регулярний вираз для пошуку слів, що починаються з великої літери у тексті.

function upperLetter(word) {
  return /^[A-Z][\w]+/.test(word)
    ? `The word beggin to upper letter`
    : `The word isn-t beggin to upper leter`;
}

console.log(upperLetter(`word`));
console.log(upperLetter(`Word`));
// 5.Перевірка формату дати (РРРР-ММ-ДД)
// Створіть регулярний вираз для перевірки правильного формату дати у вигляді "2025-06-06".

function dataFormat(data) {
  return /\d{4}[-| ]\d{2}[ |-]\d{2}/.test(data);
}

console.log(dataFormat(`1978-12-11`));
console.log(dataFormat(`1979 12-12`));
console.log(dataFormat(`1979 12 12`));
console.log(dataFormat(`1979 1212`));

// 6.Знайти всі номери телефонів українського формату (+380 ХХ ХХ ХХ ХХ)
// Напишіть регулярний вираз для пошуку українських номерів телефонів у форматі +380 (XX) XXX-XX-XX.

function phoneNumber(number) {
  return /^\+380[ -]?\(?\d{2}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}[ \,\.\n]?$/.test(
    number
  );
}

console.log(phoneNumber(`+380 (67) 555 55 55,`));
console.log(phoneNumber(`+380 67 555 55 55.`));
console.log(phoneNumber(`+380-(67)-555-55-55`));
console.log(phoneNumber(`+380-(67) 555 55 55 `));
console.log(phoneNumber(`+380675555555`));
console.log(phoneNumber(`+380675555555334`));

// 7.Перевірка URL
// Створіть регулярний вираз, який перевіряє валідність URL-адреси.

// 8.Знайти всі слова, що містять лише літери
// Напишіть регулярний вираз, який знаходить слова, що складаються тільки з маленьких літер.

function wordUpperLetter(text) {
  return text.match(/\b[a-z]+\b/g);
}

console.log(
  wordUpperLetter(
    `It used to be a standard trope in action Movies`)
);

// 9.Перевірка коду постачання (IP-адреса IPv4)
// Створіть регулярний вираз для перевірки правильності запису IP-адреси IPv4.

function writeIP(ip) {
    return /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(ip);
}

console.log(writeIP(`255.255.255.255`));
console.log(writeIP(`255.1.55.5`));
console.log(writeIP(`5.55.5.255`));
console.log(writeIP(`255.1255.255.255`));
console.log(writeIP(`255.255.255`));


// 10.Знайти всі відкриваючі та закриваючі дужки
// Напишіть регулярний вираз для пошуку всіх відкриваючих ( та закриваючих ) дужок у тексті та заміни на лапки.

function parentheses(text) {
    return text.replace(/[\(\)]/g, `"`)
};
console.log(parentheses(`It used to be a (standard) trope in action (Movies)`));

