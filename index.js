/**
 * Implement the body of the reduceIt function.
 *
 * For a given array the output of the function will be the sum of all
 * its numbers, followed by the sequence of concatenated characters
 *
 * [1, 'a', 2, 'b', 3, 'c'] => '6 abc'
 * [2, 3, 4, '1', '2', '3'] => '9 123'
 */

const inputA = ['H', 0, 'e', 'l', 6, 'l', 'o', ' ', 3, 'w', 'o', 'r', 'l', 1, 'd', '!'];
const inputB = ['Z', 1, 'o', 2, 'o', 3, 'p', 4, 'l', 5, 'u', 6, 's'];
const inputC = ['d', 10, 'e', 5, 'g', 3, 'r', -19, 'e', 'e', 's'];

 function reduceIt(arr) {
 	var numberArray = [];
 	var letterArray = [];

 arr.forEach(function(number){
 	if (isNaN(number)){
 		letterArray.push(number);
 	}else{
 		numberArray.push(number);
 	}
 })
 let sinComas = numberArray.filter(function(n){ return n != ' ' })
 let palabras = letterArray.join('')
 let suma = 0
 for(var i = 0 ; i<sinComas.length;i++){
  suma += sinComas[i]
 }

 console.log ( suma  + " " + palabras )
 }

 (reduceIt(inputA)); // '10 Hello world!'
 (reduceIt(inputB)); // '21 Zooplus'
 (reduceIt(inputC)); // '-1 degrees'