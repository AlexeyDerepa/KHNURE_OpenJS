function bubble(arr) {
    'use strict';
    for (let i = 0; i< arr.length - 1; i++) {
        for (let j = i+1; j< arr.length; j++) {
            if(arr[i]>arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let mass = [15,46,1,468,8,68,4,89,7];
console.log(bubble(mass));

function gcd(a, b) {
    if(b === 0)
        return Math.abs(a);
    return gcd(b, a%b);
}

console.log(gcd(45, 100));

function lcm(a, b) {
    return a / gcd(a,b) *b;
}

console.log(lcm(70, 126));

function InsertionSort(arr)
{
    for(let i = 0; i < arr.length;i++)  { 
	   for(let j=i-1; j>=0 && arr[j]>arr[j+1];j--) {
           swap(arr, j, j+1);
       }
    }
    return arr;
}
let mass2 = [15,46,1,-468,8,68,4,89,7,0];
console.log(InsertionSort(mass2));

let arr3 = [1,2,3,4,5,6,7,8,9,10];
let arr4 = arr3.map(z => z/2);
console.log(arr4);
console.log(arr3);
let arr5 = 
    arr3.reduce(
        (previousValue, currentValue, index, array) =>{  
            array[index-1] = previousValue/2;
            array[index] /=2;
            return currentValue;
        }
    );

console.log(arr3);

