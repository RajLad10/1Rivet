var n = [50,100,150,200,250,300,350,400,450,500];

var str = ["india","spain","england","italy","germany","france"];

var obj = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];


// every() : returns true if every array element satisfies a condition
const myFunc = (ele) => ele >= 100;

let check = n.every(myFunc);
console.log(check); 


// some() : returns true even if one array element satisfies a condition
let ans1 = str.some((ele) => ele === "spain");
console.log(ans1); 


// filter() : filters array based on condition
let divideBy100 = n.filter((ele) => ele%100 == 0);
console.log(divideBy100);

let strLength = str.filter((ele) => ele.length > 5);
console.log(strLength);


// map() : manipulate array
let cube = n.map((ele) => ele*ele*ele);
console.log(cube);


// reduce() : 
let ans2 = n.reduce((total,num) => total - num);
console.log(ans2);


// reduceRight() :
let ans3 = n.reduceRight((total,num) => total - num);
console.log(ans3);