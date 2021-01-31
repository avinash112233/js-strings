# Indexof()

In the below example, we have used the indexOf() method to find the index of the first appearance of 'Train' in the given string str. Then, we called the function outside { } (curly brackets) to see the result.

- Create a function with name and parameters

- Declare local variables and assign value

- Use the indexOf() method to find the index and assign it to a new variable

- Print the result using console.log() and call the function to see the result

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

**Output**

```
string index of is 9.00
```