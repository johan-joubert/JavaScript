// you can write js here

let input = "manger des bebe phoques";

input = input.toLowerCase();


const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

let resultArray = [];



for (let letter of input) {
    if (vowels.indexOf(letter) !== -1) {
        resultArray.push(letter);
    }
}

console.log(resultArray.join(""));
