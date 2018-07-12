//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
function randomNumber(){
    const number = Math.random();
    const onetotwenty = number *21;
    const finish = Math.floor(onetotwenty);
    console.log(finish);
}
randomNumber();

function randomLetter(){
    const numb = Math.random();
    const rando = numb * 26;
    const ran = Math.floor(rando);
    console.log(alphabet[ran]);
}
randomLetter();

function randomFood(){
    const F = Math.random();
    const Fo = F *6;
    const Foo = Math.floor(Fo);
    console.log(foods[Foo]);
}
randomFood();

function randomStudent(){
    const c = Math.random();
    const ch = c * 7;
    const chr = Math.floor(ch);
    console.log(students[chr]);
}
randomStudent();