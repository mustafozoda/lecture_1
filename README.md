# First Lesson

## About JavaScript
>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
![](/img/jsslogo.webp)

## Uses of JavaScript
>As you can see in the photo, we use JavaScript in many other areas as well.
![](/img/Uses-of-JavaScript-1.jpg)

## The Role Of JavaScript In Web Development
> JavaScript is responsible for the interactivity of a website and helps bring HTML and CSS to life. It can make specific blocks of content show or be hidden, among an endless list of possibilities. JavaScript helps define the state of a website.
![](/img/rolejs.png)

## Brief History Of JavaScript
>In September 1995, a Netscape programmer named Brendan Eich developed a new scripting language in just 10 days. It was originally called Mocha, but quickly became known as LiveScript and, later, JavaScript.

>According to GitHub’s 2021 Octoverse report, there are more JavaScript code repositories than any other language, and that number is steadily on the rise.

>JavaScript can be found virtually everywhere on the Internet. It has been named the most widely used programming language several times with over 64.9 percent of developers using it in 2021.
![](/img/js%20history.png)

## JavaScript Versions

>In the beginning there was JavaScript and this was submitted to ECMA international as a standard. This new language standard was called ECMAScript. JavaScript is the most popular implementation of this standard. JavaScript implements ECMAScript and builds on top of it. A new version of ECMAScript is released every year.

![](/img/JavaScript-versions-timeline.png)

## Run JavaScript
>Because of its wide range of applications, you can run JavaScript in several ways:

>1 ) Using console tab of web browsers

>2 ) Using Node.js

>3 ) By creating web pages

### 1. Using console tab of web browsers

>1) Open your browser and right click in any empty area and select inspect or press F12.
>2) Open the developer tools and go to Console tab. Write the Javascript code and press Enter.

![](/img/run1.png)

### 2. Using Node.js
>Node is a back-end environment for executing JavaScript 
code. To run JS using Node.js, follow these steps:  

>1) Install the latest version of Node.js
>2) Open Visual studio code and create js file
>3) Run node hello.js
>4) See the result

![](/img/nodejs.jpg)

### 3. By creating web pages 
>JavaScript was initially created to make web pages  interactive, that's why JavaScript and HTML go hand in  hand. To run JS from a webpage, follow these steps:

>1) Create new folder
>2) Create index.html, script.js files
>3) Write shown line of codes

## JavaScript Variables and Constants
>In Javascript there is two types of intializing variables, var and let. You can use both of them. However, there are some differences between them.
![](/img/var.jpeg)

>If you are sure that the value of a variable won't change throughout the program, it's recommended
to use const.

![](/img/consvsvar.jpg)

## Data Types in JavaScript

>Data Types in javascript means the type of data stored in a variable. JavaScript ES6 and above supports 7 Primitive data types. But till JS ES5, we had only 5 Primitive data types.

>As JavaScript and all scripting languages are loosely typed, there is no typecast in javascript. JS supports dynamic typing . We can create any type of data using a single variable.

## We divide Data Types into two groups

### Primitive data types

>Primitive data types are the basic or common data types in javascript. Earlier JS has Five Primitive datatypes, string, numbers, boolean, undefined and null. ES6 introduced BigInt and Symbol. So now there are Seven Primitive datatypes in JavaScript.

### Reference Data Type

>Reference are data types based on primitive. Like Array, Object and Functions. Everything is JavaScript is either a primitive datatype or Object. Even Arrays and Functions are objects, but they are build-in objects.

>All reference datatypes are Constructor Objects, that means they are created using new keyword. new means, a new instance of Function Object or class.


## Rules for Naming JavaScript Variables

![](/img/naming.png)

>1) Variable names cannot be a keyword. For example, word ‘let’ is considered as a keyword in JavaScript. Hence, you cannot define a variable called ‘let’. The following code snippet results in an error.

![](/img/1.png)

>2) Variable names cannot start with a number. For example, you may consider to define a variable name as ‘a1’ instead of ‘1a’.

![](/img/2.png)

>3) Variable names cannot contain special characters. The only exception is a $ (dollar symbol) and _ (underscore).

![](/img/3.png)

## Operators In JavaScript
>Javascript Operators are used to assign, add, subtract, compare data. JavaScript is having arithmetic, logical, assignment and comparison operators.

### Arithmetic Operators
>An Arithmetic operator is used to perform Arithmetic operations between values. Like Addition, Subtraction, Multiplication, Division etc

### Logical Operators
>Logical Operators are used to check logic between two operators. and (&&), or (||) and not (!) are logical operators.

### Assignment Operators
>Assignment operators ars used to assign some value to js variables. =, +=, -=, *=, /= are all assignment operators in javascript.

### Comparison Operators
>Comparison operators are used in a statement to compare two values.

### typeof Operator
>"typeof operator" in javascript is used to check data type of a variable. It can return string, number, boolean and undefined. For reference type and null, typeof operator will return object.

![](/img/operators.png)


## Conditions
>1) If/Else Condition
>2) Ternary operator Condition
>3) Switch statment Condition

### If/Else Condition
>JavaScript if statement is used to check whether the given condition is true or not. We can use comparison operators to check condition. The code block inside if condition or statement will work only if the condition is matched.

>Else Statement is an extra block of code used with if condition. In any case if condition fails, code block inside else will run.

![](/img/ifelse.jpeg)


### Ternary operator Condition
>Ternary Operator is conditional operator in javaScript witch use three operands. For Example, (3>2) ? console.log("yes"): console.log("no") will print yes and (1>2) ? console.log("yes"): console.log("no") will print no.

![](/img/ter.png)

### Switch statment Condition
>Switch statement is also used to check conditions in JavaScript like if else . Instead of using multiple if elses, we can use switch operator to check conditions as switch is faster in execution than if-else.

#### How to use switch in javascript
>Like other programing languages, switch is used in Javascript to test conditions. The comparing value is placed inside switch parentheses, after switch operator. Inside switch curly brackets, case keyword is used to test possible cases for switch value. After each case statement, the code that need to be run if that case is matched.

#### Break
>After each case block, it is important to finish case with break keyword. The break keyword will stop any other case blocks being executed.

#### Default
>Default is used to show default output if all cases are failed.

![](/img/switch.png)

## Loop
>JavaScript Loops or looping repeats a piece of code till the particular condition meets. Thus a loop will run a code block again and again until the condition is matched.

### Type of loops in JavaScript
* For
* While
* Do/While

#### For Loop
>For loop is the most commonly used loop in javascript. Like While loop, for loop also check condition first and then execute, but in a neat and cleaner way.

>For loop starts with for keyword followed by parenthesis. Initialization, condition and step values are inserted inside. Initialization is declared inside for loop. If the condition is ok, only then the loop will continue.
![](/img/for.png)

#### While Loop
>While Loop is Entry Level Loop, which will repeatedly run a code block while a certain condition is true. While keyword works as a condition for loop. If condition is matched, then only loop will iterate.



#### Do/While
>Do While is exit level loop. This will works even if first condition is false, as condition was checked later. This could be helpful where we wants our loop to run at least once even if the condition is not true.

>Do while loop starts with do. While condition will be checked later. This will run code block at least once.

![](/img/dowhile.webp)

## Function
>Function is a set of code, that is defined once and can be called n number of times. A function can be reused, thus they are also used to avoid repetition of code. Function are reference datatype in javascript. Function includes multiple statements to perform task. A function can take input and then return output. Functions are one of the major building blocks in JavaScript.

>Functions are callable entities. To call a function, we use parenthesis after function name, i.e sayHi(). All methods are build-in functions, that's why they must be called using parenthesis.

![](/img/javafunc.jpg)

### Function Declaration
>Function declaration is the most commonly used method to declare functions in Javascript. A function keyword is started and followed by function name, then parentheses () and then code written inside curly brackets {}. Here is an example.

### Function Experession
>Another way to create function is function expression. In function expression, a variable is declared and then assigned a anonymous function, as it does not have a name. They are not named functions, as they are stored inside a variable.

### Function LLFE
>Immediate Invoke Function or self invoking function are anonymous function who call themself. They are not assigned and named. That's why they are anonymous. But they call themself on page load. They are mainly used to keep variables local.



