/*
//popup(felugró) ablakot jelenítünk meg az 'alert'-tal
alert("Henóó vihááág!") ;
*/

console.log('Henóóóóóó konzol geci!');

console.error("Hibaüzenet kiírása!");

console.warn("Figyelmeztetés kiírása!");



//------változók-------

//let, const deklaráljuk a változókat.

//a let scope-ja egy bizonyos blokk,
//akkor azt más blokkon nem fogom tudni használni

// var scope független


let kor = 21;
kor = 20;
console.log(kor);
/*20 kerül kiírásra, mivel a let-tel deklarált változó értéke felül írható*/


/*const*/

const név = "Béci";

/*név = "Sanyi";
console.log(név);*/

/*hibát kapunk, mivel a const-tal állandó értékeket definiálunk, amit nem fogunk megváltoztatni 
a deklarálás után*/


/*-----------------Adattípusok----------------*/

/*string, number(egész és valós típús foglal magába)*/
/* boolean*/

/*összetett adattípusok*/
const todayDate = new Date();
const differentDate = new Date("2020-01-20");

console.log(differentDate);
console.log(todayDate);

/*null és undefined*/
/*
null nincs értéke, 
undefined nincs definiálva
*/

/*typeof függvény*/

console.log(typeof (5));


let number1;
number1 = 52;

console.log(++number1);

console.log(number1);

console.log(`${number1} ez egy fasza szám`);


let nev1 = "ZsoLt";
let nev2 = "zsolt";


if (nev1.toLowerCase() == nev2.toLowerCase()) {
    console.log("ugyanaz az a név gecc");
}

let names = "Sanya,Pista,Dave,Joska,Feri,Jerremiás";

let partOfNames = names.split(",");

console.log(partOfNames);