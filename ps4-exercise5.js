/* For */

console.log('For')

// Exercise 5-a

var colors = ['red', 'blue', 'yellow', 'black', 'orange'];
for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// Exercise 5-b

for(var i = 0; i < colors.length; i++){
    var x = colors[i].substring(0,1);
    var xy = x.toUpperCase();
    var y = colors[i].substring(1, colors[i].length);
    var t = xy + y;
    console.log(t);
} 

// Exercise 5-c

var sentence = [''];
for(var i = 0; i < colors.length; i++){
    sentence.push(colors[i]);
}
console.log(sentence.join(', '));

// Exercise 5-d


var empty = [];
for(var i = 0; i <= 9 ; i++){
    empty.push(i);
}
console.log(empty);