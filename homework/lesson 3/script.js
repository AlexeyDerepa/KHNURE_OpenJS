function RetrieveArray(arr1, arr2) {
    Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };

    return arr1.diff( arr2 );
}

let array_1 = [1,65,541,5,998,48,85,158,54,64,815,57,99];
let array_2 = [1,65,48,85,158,54,64,815,57,99];
console.log(RetrieveArray(array_1, array_2));


function FibonacciSequence(number) {
    if(number <=1) 
        return number;

    return FibonacciSequence(number-1) + FibonacciSequence(number -2);
}
console.log(FibonacciSequence(10));
function FibonacciSequenceByIteration(number) {
  let first = 1, second = 1;
  for (let i = 3; i <= number; i++) {
    let temp = first + second;
          console.log(first + " + " + second + " = " + temp);

    first = second;
    second = temp;
  }
  return second;
}
console.log(FibonacciSequenceByIteration(10));


function FactorialRecursive(number) {
    if (number <= 1)
        return 1;
    return number * FactorialRecursive(number - 1);
}

console.log(FactorialRecursive(10));


function FactorialIteration(number) {
    let result = 1;
    for (let i = number; i>0;i--) {
        result *=i;
    }
    return result;
}

console.log(FactorialIteration(10));


