/* Arrays */

console.log('Arrays')

// Exercise 3-a

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(months [4]);
console.log(months [10]);

// Ejercicio 3-b

var months2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var abcMonths = months2.sort();
console.log(abcMonths);

// Ejercicio 3-c

months.unshift('Add initial element');
months.push('Add final element');
console.log(months);

// Ejercicio 3-d

months.shift();
months.pop();
console.log(months);

// Ejercicio 3-e

months.reverse();
console.log(months);

// Ejercicio 3-f

months.reverse();
var strMonths = months.join('-');
console.log(strMonths);

// Ejercicio 3-g

var periodMayNov = months.slice(4, 11);
console.log(periodMayNov);
