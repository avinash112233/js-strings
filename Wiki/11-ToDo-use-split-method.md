# To-Do : Program of Splitting of Strings

JavaScript has a very useful method for splitting a string into an array of words and characters. You can use the split() method to convert a sentence into an arrays of words or into an array of characters.
In the example below, we have a string and we have used the split method to break the string into an array. When split() is used with ' ' (empty space) as an argument, it creates an array of words and when split() is used with '' (Empty) as an argument, it creates an array of characters.

Hint:

- open **practice01.js**
- Copy the below code in that file.
- Commit your changes to show the output in pipeline

```js
var str = "The quick brown fox jumped over the lazy dog.";
var words = str.split(" ");
var chars = str.split("");
console.log("words", words[3]);
console.log("chars", chars[8]);
```