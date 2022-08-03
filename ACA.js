// JS first exam problems

// 1. Use array methods to turn data into result

// // Result
// ['The red horse',
// 'Plane over the ocean',
// 'Chocolate ice cream is awesome',
// 'this is a long sentence'];

/*

let data = [
    ["The", "red", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"],
];

function groupeWords(array) {
    let x = array.map((item) => {
        return item.join(" ");
    });
    return x;
}

console.log(groupeWords(data));
*/

// 2. Create a constructor function to produce calculator
//instances (+,-,*,? operations).

// function Calculator(firstNumber, secondNumber, opr) {
//     this.firstNumber = firstNumber;
//     this.secondNumber = secondNumber;
//     this.opr = opr;
//     return function(firstNumber, secondNumber, opr) {
//         switch (opr) {
//             case "+":
//                 return firstNumber + secondNumber;

//             case "-":
//                 return firstNumber - secondNumber;

//             case "/":
//                 return firstNumber / secondNumber;

//             case "*":
//                 return firstNumber * secondNumber;

//             default:
//                 "check your entered oprator";
//                 break;
//         }
//     }
// }
// let calc = new Calculator();
// console.log(calc(4,5,'+'));
// // calc(1,2, "+")
// // calc(3,4, -)

// 3. Remove duplicates in an array.

// let dupes = [1, 2, 3, "a", "a", "f", 3, 4, 2, "d", "d"];
// function removeDuplicates(input) {
//     // debugger
//     let output2 = [];
//     outermost: for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (i !== j && input[i] == input[j]) {
//                 continue outermost;
//             }
//         }
//         output2.push(input[i]);
//     }
//     return output2;
// }
// console.log(removeDuplicates(dupes));
//result => [1,2,3,’a’, ‘f’, 4, ‘d’];

// 4. Groupe by property

// let arr = [
//   {name: 'Alice', job: 'Data Analyst', country: 'AU'},
//   {name: 'Bob', job: 'Pilot', country: 'US'},
//   {name: 'Lewis', job: 'Pilot', country: 'US'},
//   {name: 'Karen', job: 'Software Eng', country: 'CA'},
//   {name: 'Jona', job: 'Painter', country: 'CA'},
//   {name: 'Jeremy', job: 'Artist', country: 'SP'},
// ];

// function groupe(arr, prop) {
//     let obj = {}
//     arr.map(item => obj[item[prop]] = arr.filter(element => element[prop] == item[prop]) )
//     return obj
// }
// console.log(groupe(arr, "country"));
// //result => {
// 	AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
// 	US: [{name: 'Bob', job: 'Pilot', country: 'US'},
//   {name: 'Lewis', job: 'Pilot', country: 'US'}],
// ……
// }

// 5. Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

// Example 1
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole
// string(not individual words), the input
// string becomes
// Much.very.program.this.like.i

// Example 2
// Input:
// S = pqr.mno
// Output: mno.pqr
// Explanation: After reversing the whole
// string , the input string becomes
// mno.pqr
// debugger
// let x = {
//     i: 1,
//     toString:function() {
//         return this.i++
//     }
// };

// if (x == 1 && x == 2 && x == 3 && x == 4 && x == 5 && x == 6) {
//     alert("Hello");
// }

// var twoSum = function(nums, target) {
//     x = [];
//         for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (i !== j && nums[i] + nums[j] === target) {
//                 x.push(j,i);
//             }
//         }
//     }
//     return x;
// };
// twoSum([3,2,4], 6)
// let x = -45;

// var isPalindrome = function (x) {
//     if (x < 0) return false
//     let copy = x;
//     let final = 0;

//     while(x) {
//         let current = x % 10;
//         final *= 10;
//         final += current
//         x = Math.floor(x / 10)
//     }
//     if (copy === final) {
//         return true
//     }
//     return false
// };
// console.log(isPalindrome(44));

// let str = ;

// // debugger
// var largestPalindrome = function(n) {
//     if (n === 1) return 9;
//     let hi = BigInt(Math.pow(10, n) - 1);
//     let num = hi;
//     while(num > 0) {
//         num -= 1n;
//         const palindrome = BigInt(String(num) + String(num).split('').reverse().join(''));
//         console.log();
//         for (let i = hi; i >= 2n; i -= 2n) {
//             const j = palindrome / i;
//             if (j > hi) break;
//             if (palindrome % i === 0n) {
//                 return String(palindrome % 1337n);
//             };
//         }
//     }
// };
// console.log(largestPalindrome(2))

// let interId;
// function Timer(time) {
//     return () => {
//         if (time === 1) {
//             clearInterval(interId);
//         }
//         console.log(--time);
//     };
// }
// interId = setTimeout(Timer(10), 2000);

// function foo() {
//     let a = 4;
//     setTimeout(() => {
//         console.log(a);
//     },1000);
// };
// foo();

// class fakeTimer {
//     constructor(timer) {
//         this.timer = timer;
//         this.day = ;
        
//     }
// }

// A day is equal to 1440 minutes.
// 86,400 seconds
// 24 hours
let Seconds  = 96400;
console.log('in 1 days we have',3600 * 24,' seconds');
console.log('in 1 days we have',Seconds / (3600 * 24),'days');//days
console.log('in 1 days we have',Seconds / (3600),' hours');//hours
console.log('in 1 days we have',Seconds / (3600 / 60),'minuts');//minuts
console.log('in 1 days we have',(Seconds - 3600 * 24) / 3600,'seconds');
