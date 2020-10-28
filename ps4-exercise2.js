/* Strings */

console.log('Strings')

// Exercise 2-a

var weatherToday = 'today was a sunny and hot day.';
console.log('In capital letters: ' + weatherToday.toUpperCase());

// Exercise 2-b

var boardGame = 'David play chess with his father.';
var example = boardGame.substring (0, 5);
console.log(example);

// Exercise 2-c

var hollidays = 'Nahuel travels every year to Mar del Plata.';
var lastCharacters = hollidays.substring(hollidays.length -3, hollidays.length);
console.log('Last three characters: ' + lastCharacters);

// Exercise 2-d

var welcome = 'welcome to my home.';
var part1 = welcome.substring(0, 1);
var part2 = welcome.substring(1, welcome.length);
var modifiedWelcome = part1.toUpperCase() + part2;
console.log(modifiedWelcome);

// Exercise 2-e

var song = "Talk to me softly, there's something in your eyes.";
var firstBlankSpace = song.indexOf(' ');
console.log('First black space: ' + firstBlankSpace);

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
