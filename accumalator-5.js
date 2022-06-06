// 3.5
// В файле accumulator-5.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorEven и собери в ней четные числа массива.

// Для решения используй любой из циклов на своё усмотрение.

const arr = [3, 5, 7, 3, 2, -7, 8, 9, 1, 3];
const newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 ===0){
        newArr.push(arr[i])
    }
}
console.log(newArr);