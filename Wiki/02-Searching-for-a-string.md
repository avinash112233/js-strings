# Searching For A String In String

Just like arrays, strings have characters as elements.JavaScript counts positions of characters
 (index numbers) from zero. 0 is the first position in a string, 1 is the second, 2
  is the third and so on. Let’s say you want to know the index where a character
   first appears in a given string. You can use the indexOf() method to return the
    index number by the first occurrence of a character. Similarly, lastIndexOf() 
    is used to find the index where a character last appears in the string.
     Both these methods can also be used for searching a string in another string.

```js
var str = "How are you";
var init = str.indexOf("o");
console.log("index is", init);
var last = str.lastIndexOf("o");
console.log("Last index ", last);
```

Output

```js
index is 1
Last index 9
```
