
// დავალება 1:

let array2 = [14, 150, 'css', null, 'javascript', 25];

let newArray = array2.map(element => {
    if (typeof element === 'number') {
        return element ** 2;
    } else if (typeof element === 'string') {
        return element.toUpperCase();
    } else {
        return element;
    }
});

console.log(newArray);


// დავალება 2:

/*
let correctAnswer = "თბილისი";

let userAnswer = prompt ("საქართველოს დედაქალაქი?");
userAnswer = userAnswer.toLowerCase();

if (userAnswer === correctAnswer) {
    console.log("სწორია");
} else {
    console.log("არასწორია");
}
*/

// დავალება 3:

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray2 = array5.map(element => element / 3);

console.log(newArray2);


// დავალება 4:


let array1 = ["hello1", 14, 24, "hello2"];

let numbersArray = array1.filter(element => typeof element === 'number');

console.log(numbersArray);


// დავალება 5:


let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filteredLanguages = languages.filter(language => language.length > 3);

console.log(filteredLanguages);


// დავალება 6:


let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let filteredWords = words.filter(word => word.includes('m') || word.includes('M'));

console.log(filteredWords);


// დავალება 7:


function checkLink(link) {
    if (link.includes("https://")) {
        console.log("კი, მოიცავს");
    } else {
        console.log("არა, არ მოიცავს");
    }
}

let link = "https://google.com";

checkLink(link);


// დავალება 8:


let array6 = [-1, -2, -3, 4];

let hasPositive = array6.some(element => element > 0);

console.log(hasPositive);


// დავალება 9:


let str = '12345';

let array = str.split('');

let sum = array.reduce((acc, current) => acc + parseInt(current), 0);

console.log(sum);


// დავალება 10:


let numbers = [19, 12, 17, 7, 25];

let sum1 = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum1);


// დავალება 11:


let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let combinedArray = arr1.concat(arr2, arr3);

console.log(combinedArray);





