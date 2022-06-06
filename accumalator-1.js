// В файле accumulator-1.js создай массив с десятью элементами числового типа.

// Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.

const arr = [3, 5, 7, 3, 2, 7, 8, 9, 1, 3];
let sum = 0;
for(let i = 0; i < arr.length; i++){
   sum += arr[i];
}
console.log(sum);