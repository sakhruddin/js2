// В файле accumulator-6.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorOdd и собери в ней нечетные числа массива.

// Для решения используй любой из циклов на своё усмотрение.

const arr = [3, 5, 4, 3, 2, -7, 8, 9, 1, 3];
const accumulatorOdd = [];
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 2 !== 0){
    accumulatorOdd.push(arr[i]);
  }
}
console.log(accumulatorOdd)