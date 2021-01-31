# To-Do : Program of Strings with lastindexOf

Strings have characters as elements.JavaScript counts positions of characters (index numbers) from zero. In the below example, we have used the lastIndexOf() method to find the index of the last appearance of 'Train' in the given string str.

Hint:

- open **practice01.js**
- Copy the below code in that file.
- Commit your changes to show the output in pipeline

```js
function func() {
  // Original string
  var str = "Departed Train before another Train";

  // Finding index of occurrence of 'Train'
  var index = str.lastIndexOf("Train");
  console.log("string last index of", index);
}
func();
```