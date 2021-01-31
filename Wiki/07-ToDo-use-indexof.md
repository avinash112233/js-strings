# To-Do : Program of Strings and use of indexOf

Strings have characters as elements.JavaScript counts positions of characters (index numbers) from zero. 0 is the first position in a string, 1 is the second, 2 is the third and so on. Let’s say you want to know the index where a character first appears in a given string. You can use indexOf() method to return the index number by the first occurrence of a character.

Hint:

- open **practice01.js**
- Copy the below code in that file.
- Commit your changes to show the output in pipeline


```js
function func() {
  // Original string
  var str = "Departed Train";

  // Finding index of occurrence of 'Train'
  var index = str.indexOf("Train");
  console.log("string index of is", index);
}
func();
```