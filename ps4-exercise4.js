/* If Else */

console.log('If Else')

// Exercise 4-a

var xy = Math.random();
if(xy >= 0.5){
    console.log('Greater than 0.5');
}else{
    console.log('Lower than 0.5');
}

// Exercise 4-b

var Age = 26;
if(Age < 2){
    console.log('Bebé');
}else if((Age > 1) && (Age < 12)){
    console.log('Niño');
}else if((Age > 11) && (Age < 19)){
    console.log('Adolescente');
}else if((Age > 18) && (Age < 30)){
    console.log("Joven");
}else if((Age > 29) && (Age < 60)){
    console.log('Adulto');
}else if((Age > 60) && (Age < 75)){
    console.log('Adulto mayor');
}else{
    console.log("Anciano");
}
