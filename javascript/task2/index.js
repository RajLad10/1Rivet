// I. Create an object to hold information about you.

const myInfo = {
    'name' : 'Raj',
    'age' : 23,   
    'gender' : 'Male',
    'hobbies' : ["Play and watch football",'Listen songs','play shooting games'], 
    'phone' : '',
}

console.log(myInfo);

// II. 

const sampleObject = {
    a: 'test',
    b: 12,
    c: true,
};

// [A] Write a function to get an array of sampleObject keys.
function keyArray(obj1)
{
    console.log(Object.keys(obj1));
}
keyArray(sampleObject);

// [B] Write a function to get an array of sampleObject values.

function valueArray(obj2)
{
    console.log(Object.values(obj2));
}
valueArray(sampleObject);

// [C] Write a function to get an array of sampleObject key-value pairs.
function keyValue(obj3)
{
    console.log(obj3);
}
keyValue(sampleObject);

// III. Write a function to check if given property exists in an object.

function propCheck(objName,propName)
{
    return objName.hasOwnProperty(propName);
} 
console.log(propCheck(myInfo,'age'));
console.log(propCheck(sampleObject,'d'));

// IV. Write a function to check if an object is empty.

function emptyObj(objName)
{
    return Object.keys(objName).length == 0;
} 

let obj = {};

console.log(emptyObj(myInfo));
console.log(emptyObj(obj));

// V. Write a program to demonstrate Explicit Type Conversion (Type Casting).

// [A] Number to String

function numberToString(n)
{
    let s = String(n);
    let method1 = typeof(s);
    console.log(method1);

    let method2 = n.toString();
    console.log(method2);
}
numberToString(39);


function stringToNumber(str)
{
    let num = Number(str);
    let method = typeof(num);
    console.log(method);
}
stringToNumber("50");
stringToNumber("Hello");


function booleanToNumber()
{
    let num1 = Number(true);
    let num2 = Number(false);

    let method1 = typeof(num1);
    let method2 = typeof(num2);

    console.log(method1);
    console.log(method2);
}
booleanToNumber();


function booleanToString()
{
    let str1 = String(true);
    let str2 = String(false);

    let method1 = typeof(str1);
    let method2 = typeof(str2);

    console.log(method1);
    console.log(method2);
}
booleanToString();

function unaryOperator()
{
    let n1 = 10, n2 = 44;
    let str1 = "20", str2 = "99";

    let result1 = n1+n2+str1;
    let result2 = str2+n2+str1;
    let result3 = n1+str1+n2;

    console.log(result1);
    console.log(result2);
    console.log(result3);
}
unaryOperator();