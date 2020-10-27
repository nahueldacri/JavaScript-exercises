/* Weekly problem exercises 4*/

/* Variables and Operators */

// Exercise 1-a

var ageNahuel = 26;
var ageCamila = 25;
var sumOfAges = ageCamila + ageNahuel;
console.log('Sum of ages: ' + sumOfAges);

// Exercise 1-b

var users = 'Cristian and Rodrigo';
var action = 'play a tennis match.';
var sentence = users + action; 
console.log(sentence);

//Exercise 1-c

var individualSports = 'Tennis, Swimming, Golf';
var groupSports = 'Football, Basketball, Rugby';
var totalLength = individualSports.length + groupSports.length;
console.log('Total length of variables: ' + totalLength);

/* Strings */

// Exercise 2-a

var weatherToday = 'today was a sunny and hot day.';
console.log('En mayúscula: ' + weatherToday.toUpperCase());

// Exercise 2-b

var boardGame = 'David play chess with his father.';
var example = boardGame.substring (0, 5);
console.log(example);

// Exercise 2-c

var hollidays = 'Nahuel travels every year to Mar del Plata.';
var lastLetters = hollidays.substring(hollidays.length -3, hollidays.length);
console.log('Last letters: ' + lastLetters);

// Exercise 2-d

var welcome = 'welcome to my home.';
var part1 = welcome.substring(0, 1);
var part2 = welcome.substring(1, welcome.length);
var modifiedWelcome = part1.toUpperCase() + part2;
console.log(modifiedWelcome);

// Exercise 2-e

var song = "Talk to me softly, there's something in your eyes.";
var firstBlankSpace = song.indexOf(' ');
console.log(firstBlankSpace);

// Exercise 2-f

var university = 'cambridge university.';
var camb = university.substring(0, 1);
var cambUperCase = camb.toUpperCase();
var un = university.indexOf(' ');
var univ = university.substring(un + 1, un + 2);
var univUperCase = univ.toUpperCase();
var camb2 = university.substring(1, un);
var un2 = university.substring(un + 2, university.length);
var cu = cambUperCase + camb2 +' '+ univUperCase + un2;
console.log(cu);

/* Arrays */

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



