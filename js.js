// let arr = [1, 2, 3, 4, 5];

// for (i=0; i < arr.length; i++) {
// console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 2, 3, 4, 5];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt ("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['aaww', 'rree', 'tttyy'],
//     i = arr.join(', ');
// console.log(i);

// let arr = [1, 15, 4],
//     i = arr.sort(compareNum);

// function compareNum (a, b) {
//     return a-b;
// }


// console.log(arr);

let soldire = {
    health: 400,
    armor: 100
};

let john = {
    health: 100,
};

john.__proto__ = soldire;

console.log(john);
console.log(john.armor);