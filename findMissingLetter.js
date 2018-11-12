/*
Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/

function findMissingLetter(array)
{
  const start = array[0].charCodeAt();
  const end = start >= 97?  122: 90;
  const arr = array.slice(1)
  let s = start; 
 for (let ch of arr) {
    s++; 
    let chCode = ch.charCodeAt();
    if (chCode !== s) {
        missing = String.fromCharCode(s);
        break;
    }}
 
  return missing;
}
