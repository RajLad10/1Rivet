var n = [10,20,40,50,70,80,100,110];


// PUSH() : Add element in the end
n.push(120);
console.log(n);


// Pop() : Remove element from end
n.pop();
console.log(n);


// unshift() : Add element from front
n.unshift(0);
console.log(n);


// shift() : Remove element from front
n.shift();
console.log(n);


// splice() : Add / remove / replace element from anywhere in the array
n.splice(2,0,30);
console.log(n);

n.splice(2,1);
console.log(n);


// indexOf() : find index of any element in array
n.push(40);
console.log(n.indexOf(40));
console.log(n.indexOf(200));


// lastIndexOf() : find index of any element in array
console.log(n.lastIndexOf(40));


// find() : uses function as arguement and returns 1st element which fulfills the condition
console.log(n.find(
    (ele) => ele < 50
));


// Slice() : returns range of elements from array
console.log(n.slice(3,6));


// Spread Operator (...)
console.log(...n);

var obj1 = {
    x : 10,
    y : 20,
}

var obj2 = {
    z : 30,
}

var obj3 = {w : 0,...obj1,...obj2,}
console.log(obj3);

var str1 = ["Hello","World"];

console.log(...str1 + "!!");


// Rest Operator (...)
let myFun = (...args) => {
    let sum=0;
    for (const iterator of args) {
        sum += iterator;
    }
    return sum;
}
console.log(myFun(1,3,5,7));


// localStorage() : store key-value pair in browser's local storage
let topic = "student";

const student = {
    name: "Raj",
    course: "MCA",
    age: 23,
}

function LocalStorage(title,value)
{
    localStorage.setItem(title,JSON.stringify(value));
    var data = localStorage.getItem(title);
    console.log(JSON.parse(data));
}
LocalStorage(topic, student);