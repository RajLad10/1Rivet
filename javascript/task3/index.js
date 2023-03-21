// Display Today's Day
function todaysDay()
{
    let d = new Date();
    let day = d.getDay() + 1;

    switch(day)
    {
        case 1: 
            return "Sunday";

        case 2:
            return "Monday";

        case 3:
            return "Tuesday";

        case 4:
            return "Wednesday";

        case 5:
            return "Thursday";

        case 6:
            return "Friday";

        case 7:
            return "Saturday";
    }
}

let td = todaysDay();

document.getElementById("day").innerHTML = td;


// Find reverse of a number
function numReverse()
{
    let n = document.getElementById("numrev").value;
    let a, ans = 0;

    while(n > 0)
    {
        a = n % 10;
        ans = ans * 10 + a;
        n = n / 10;
        n = Math.floor(n);
    }

    document.getElementById("numRevResult").innerHTML = "Reverse is :" + ans;
}


// Find if a number is prime or not
function primeNum()
{
    let n = document.getElementById("prime").value;
    let ans;

    if(n < 2)
    {
        ans = n + " is not a prime number";
    }

    if((n==2) || (n==3))
    {
        ans = n + " is a prime number";
    }

    for (let index = 2; index <= n/2; index++) {
        
        if (n % index == 0) 
        {
            ans = n + " is not a prime number";
            break;
        }
        else
        {
            ans = n + " is a prime number";
        }
    }

    document.getElementById("primeResult").innerHTML = ans;
}


// Find data type of variable
function dataType(variable)
{
    type = typeof variable;
    console.log("Data type is: " + type)
}

let a = {
    'name' : 'Raj',
    'age' : 23,   
    'gender' : 'Male',
    'hobbies' : ["Play and watch football",'Listen songs','play shooting games'], 
    'phone' : '1234567890',
}

dataType(a);


// Find reverse of a string
function strReverse()
{
    let str = document.getElementById("strrev").value;
    let rev = "";

    for (const i of str) {
        rev = i + rev;
    }

    document.getElementById("strRevResult").innerHTML = rev;
}