# Split() In Strings

JavaScript has a very useful method for splitting a string into an array of words and characters. You can use the split() method to convert a sentence into an arrays of words or into an array of characters. The split () method takes a parameter that is used to make a split in the string. If the parameter is empty space (“ “), it creates an array of words. If the parameter is empty(“”), it creates an array of characters as shown below.

```js
var str = "How are you";
var arr1 = str.split(" ");
console.log("Words list ", arr1);
var arr2 = str.split("");
console.log("Char list", arr2);
```

Output

```js
Words list ["How","are","you"];
Char list ['H','o','w',' ','a','r','e',' ','y','o','u'];
```

## Split()

In the example below, we have a string and we have used the split method to break the string into an array. When split() is used with ' ' (empty space) as an argument, it creates an array of words and when split() is used with '' (Empty) as an argument, it creates an array of characters. Try yourself by splitting different strings into arrays of words and characters.

- Create a variable with a name and assign it a string value

- Use split() method to convert the string into an array of words and assign the result in a new variable

- Use split() method to convert the string into an array of characters and assign the result in a new variable

- Use console.log() to print a word of the string

- Use console.log() to print a character of the string

```js
var str = "The quick brown fox jumped over the lazy dog.";
var words = str.split(" ");
var chars = str.split("");
console.log("words", words[3]);
console.log("chars", chars[8]);
```

Output

```
words fox
chars k
```