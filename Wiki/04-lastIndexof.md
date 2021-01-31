# LastIndexof()

In the below example, we have used the lastIndexOf() method to find the index of the last appearance of 'Train' in the given string str. Then, we called the function outside { } (curly brackets) to see the result.

- Create a function with name and parameters

- Declare local variable and assign value

- Use lastIndexOf() method to find the index and assign it to a new variable

- Print the result using console.log() and call the function to see the result

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

Output

```
string last index of 30.00
```