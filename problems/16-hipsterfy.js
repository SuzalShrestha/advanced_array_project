/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/
let removeLastVowel=function(wordMain){
    let vowels="AEIOUaeiou";
    let word=wordMain.split('');
    for(i=word.length-1;i>=0;i--){
        let letter=word[i];
        if(vowels.includes(letter)){
         word.splice(i,1);
         return word.join('');
        }
    
    }
    return wordMain;
    
    }

let hipsterfy = function(sentence) {
    // Your code here
    let wordArray=sentence.split(' ');
    return wordArray.map(removeLastVowel).join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
