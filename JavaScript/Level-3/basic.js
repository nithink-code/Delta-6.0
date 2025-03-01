//  1. Trim method used to remove beg and end spaces btw string

// let strname = "     Nithin     ";
// strname.trim();
// console.log(strname);

// 2. To convert upper and lower case letters

// let name = "Nithin";
// let ans = name.toLowerCase();
// console.log(ans);

//3. To find index of the given string
// let str = "I love coding";
// let ans = str.indexOf("l");
// console.log(ans);

// Method Chaining
// let str = "I love Coding";
// let ans = str.trim().toUpperCase();
// console.log(ans);

// Slicing
// let str = "Hello Nithin";
// console.log(str.slice(6));

// Replace & Repeat
// let str = "Hello Nithin";
// let ans = str.replace("Hello","Hi");
// console.log(ans);

// let str1 = "Nithin";
// let ans1 = str1.repeat(5);
// console.log(ans1);

// let number = [1,2,3,4,5,6];
// console.log(number.length);

// let cars =["Audi","Mercedes","Benz"];
// cars[1]="G-Wagon";
// console.log(cars);

// let cars=["Ferrari","Mercedes","Audi","Toyoto"];
// cars.push("Benz");
// console.log(cars);

// cars.pop();
// console.log(cars);

// To store elements at start
// unshift ->to add at start
// shift->to delete from start
// cars.unshift("G-Wagon");
// console.log(cars);
// cars.shift();
// console.log(cars);

// Includes for element presence or not in array
// let ans = cars.includes("Mercedes");
// console.log(ans);

// Merging two Arrays
// car1 = ["Audi","Benz","Toyoto"];
// car2 = ["G-Wagon","Mercedes","XUV"];
// let merge = car1.concat(car2);
// console.log(merge);

// To reverse elements of car1
// console.log(car1.reverse());

// slicing
// car1.slice(2);

// splice [start,delete,new item name to add]
let list1 = ["Audi","GLS","Mahindra","XUV","Audi-Q8"];
// list1.splice(0,2,"Thar");
// console.log(list1);

// Sort Method
// list1.sort();
// console.log(list1);

// Nested Arrays
// Two-Dimensional arrays
let arr = [[1,0],[2,4],[6,8],[4,9]];
console.log(arr[1][0]);
