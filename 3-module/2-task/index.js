/*

Напишите функцию `filterRange(arr, a, b)`, которая принимает массив чисел `arr`, ищет в нём элементы между `a` и `b`
и отдаёт массив этих элементов. Если элемент равен `a` или `b`, то его тоже нужно включить в отфильтрованный массив.

Функция должна возвращать новый массив и не изменять исходный.

Например:

```js
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    // Ваш код
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
```
*/

function filterRange(arr, a, b) {
  return arr.filter(currentValue => (a <= currentValue && currentValue <= b));
}
