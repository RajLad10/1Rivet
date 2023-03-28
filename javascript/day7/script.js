// ***************************** [Q. I] **************************************

// 1. Write a JavaScript function that reverse a number.

const reverseNumber = (num) => {
    let str = String(num);
    let revStr = str.split("").reverse().join("");
    return Number(revStr);
}

console.log(reverseNumber(2468));


// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.

const alphabeticalOrder = (str) => {
    let sortedStr = str.toLowerCase().split("").sort().join("");
    return sortedStr;
}

console.log(alphabeticalOrder("Good Afternoon"));


// 3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string 
// in upper case.

const firstLetterCapital = (str) => {
    let words = str.split(" ");
    console.log(words);
    let capitalLetters = words.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
    
    return capitalLetters;
}

console.log(firstLetterCapital("hello my name is raj"));


// 4. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

const longestWord = (str) => {
    var max = 0;
    var longest = "";
    let wordLen = str.split(" ");

    for (const iterator of wordLen) {
        if(iterator.length > max)
        {
            max = iterator.length;
            longest = iterator;
        }
    }
    return longest;
}

console.log(longestWord("hello my name is Nishant"));


// 5. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

const vowelCount = (str) => {
    let count = str.toLowerCase().split("").filter((letter) => 
        letter === 'a' || letter==='e' || letter==='i' || letter==='o' || letter==='u'
    ).join("").length;

    return count;
}

console.log(vowelCount("Have a nice day!"));

// 6. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

const longestCountryName = (arr) => {
    var max = 0;
    var longest = "";
    for (const iterator of arr) {
        if(iterator.length > max)
        {
            max = iterator.length;
            longest = iterator;
        }
    }
    return longest;
}
let countries = ["India","Netherlands","Spain","Italy","Portugal","England","Germany"];
console.log(longestCountryName(countries));

// 7. Write a JavaScript program to pass a 'JavaScript function' as parameter.

const addNumbers = (x,y, callback) => {
    var sum = x+y;
    callback(sum);
}

const displaySum = (abc) => {
    abc += 100;
    console.log(abc);
}

addNumbers(10,20, displaySum);


// 8. Write a JavaScript function to get the function name.

const getFunctionName = () => {
    // Empty Function
}

console.log(getFunctionName.name);



// ***************************** [Q. II] **************************************

// 1. Write a JavaScript function to retrieve all the values of an object's properties.

let myInfo = {
        name: "Raj",
        course: "MCA",
        age: 23,
}

const getKeys = (obj) => Object.values(obj);
console.log(getKeys(myInfo));


// 2. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

const getList = (obj) => Object.entries(obj);
console.log(getList(myInfo));


// 3. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.


// 4. Write a JavaScript program to find the most frequent item of an arr.
const frequentItem = (arr) => {
    var count = 1;
    var maxCount = 0;
    var item;
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j])
            {
                count++;
            }

            if(count > maxCount)
            {
                maxCount = count;
                item = arr[i];
            }
        }
        count = 1;
    }

    return item;
}

var testArr = [1,3,3,3,2,5,5,1,1,8,9,8,1]
console.log(frequentItem(testArr));

// 5. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const removeDuplicate = (arr) => {
    var item;
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j])
            {
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

console.log(removeDuplicate(testArr));


// 6. Write a JavaScript function to merge two arrays and removes all duplicates elements.

const mergeAndRemove = (arr1,arr2) => {
    var mergedArr = [];
    console.log(mergedArr);
    
    for (const iterator of arr1) {
        mergedArr.push(iterator);
    }

    for (const iterator of arr2) {
        mergedArr.push(iterator);
    }

    var finalArr = removeDuplicate(mergedArr);
    return finalArr;
}
let a1 = [1,2,3,4,2,1];
let a2 = [9,8,7,6,4,3];

console.log(mergeAndRemove(a1,a2));


// 7. Write a JavaScript function to remove a specific element from an array.

const removeElement = (arr, element) => {
    for (const iterator of arr) {
        if(iterator === element)
        {
            arr.splice(arr.indexOf(iterator),1);
        }
    }
    return arr;
}

console.log(removeElement(testArr,3));