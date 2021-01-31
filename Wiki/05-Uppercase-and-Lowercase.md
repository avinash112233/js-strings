# Uppercase And Lowercase Strings

You can convert a string from Uppercase (Capital letters) to lowercase (small letters) using the toLowerCase() method. Similarly, you can also convert a string from lowercase to uppercase using the toUpperCase() method. These 2 methods are very helpful for text formatting. Please note that both toLowerCase() and toUpperCase() do not change the original string and create a new string.

```js
var str = "Hello World!";
var upp = str.toUpperCase();
console.log("upp is", upp);
var low = str.toLowerCase();
console.log("low is", low);
```

Output

```js
upp is HELLO WORLD
low is hello world
```

## ToUpper Case()

In the below example, we have a string and we have converted the string into Uppercase (Capital letters) by using the toUpperCase() method. Then we have printed the new string using the console.log() method. Notice how capital letters in the given string remains the same but small letters are converted into capital letters

- Create a variable with a name and assign it a string value

- Use the toUpperCase() method on the given string and assign the result into a new variable

- Print the new string as result using console.log() method

```js
var string = "Konfinity TECHNOLOGY";

var newstring = string.toUpperCase();

console.log("upper case string is ", newstring);
```

Output

```
upper case string is KONFINITY TECHNOLOGY
```

## To Lower Case()

In the below example, we have a string and we have converted the string into Lowercase (small letters) by using the toLowerCase() method. Then we have printed the new string using the console.log() method. Notice how small letters in the given string remains the same but capital letters are converted into small letters Terminal index.js

- Create a variable with name and assign it a string value

- Use toLowerCase() method on the given string and assign the result into a new variable

- Print the new string as result using console.log() method

```js
var string = "Konfinity TECHNOLOGY";

var newstring = string.toLowerCase();

console.log("lower case string is ", newstring);
```

Output

```
lower case string is konfinity technology
```