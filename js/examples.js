// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
        
//     }

//     result += + '\n' + '*';

// }

// console.log(result);

// Место для первой задачи
// function firstTask() {
    
//     for (let i = 5; i <= 10; i++) {
//         console.log(i)
//     }
// }


// function secondTask() { 
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//         console.log(i);
//     }
// }


// function thirdTask() {
//     for (let i = 1; i <= 10; i++) {
//         if (i%2 === 0) {
//             console.log(i);
//         }
//     }
    
    
// }


// function fourthTask() {
//     for (let i = 2; i <= 16; i++) {
//      if (i % 2 !== 0) {
//         console.log(i);
//      }
//  }
// }


// function fifthTask() {
//     const arrayOfNumbers = [];
//     for(let i = 5; i < 11; i++) {
//         arrayOfNumbers[i] = i;
//     }
    
//     console.log(arrayOfNumbers);
// }

// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
    
//     console.log(result);
//     // Не трогаем
//     return result;
// }

// firstTask();

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for(let i = 0; i < data.length; i++) {
//         if(typeof (data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if(typeof (data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
    
//     console.log(data);
//     // Не трогаем
//     return data;
// }

// secondTask();

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//         console.log(data[data.length - i]);
//     }
    
//     console.log(result);
//     // Не трогаем
//     return result;
// }

// thirdTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// function copy (mainObject) {
//     const copyObject = {};

//     for (let key in mainObject) {
//         copyObject[key] = mainObject[key];
//     }

//     return copyObject;
// }

// const startObject = {
//     a: 1,
//     b: 2,
//     c: {
//         x: 1,
//         y: 2
//     }
// }

// const finishObject = copy(startObject);

// finishObject.a = 10;
// finishObject.c.x = 20;

// const addObject = {
//     v: 30,
//     i: 45
// }

// const thirdObject = Object.assign({}, addObject);

// console.log(thirdObject);

// console.log(finishObject);
// console.log(startObject);

// const arr = [1, 2, 3, 4];

// const newArr = arr.slice();

// arr[0] = 100;

// console.log(arr);
// console.log(newArr);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(personalPlanPeter) {
//         const { age } = personalPlanPeter;
//         const { languages } = personalPlanPeter.skills;
//         let str = `Мне ${age} и я владею языками: ${languages.toUpperCase()}`;


//         return str;
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     console.log(exp);
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for(let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     console.log(str);
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if(arr.length == 0) {
//         console.log('Семья пуста');
//     } else {
//         const familyInText = arr.slice(',').join(' ');
//         console.log(`Семья состоит из: ${familyInText}`);
//     }
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     console.log(arr.join('\n').toLowerCase());
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof str != 'string') {
//         console.log('Ошибка!');
//     } else {
//         const reverseString = str.split('').reverse().join('');
//         console.log(reverseString);
//     }
// }

// reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length == 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    arr.forEach(element => {
        if(element !== missingCurr) {
            str += `${element}\n`;
        }
    });
    console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');