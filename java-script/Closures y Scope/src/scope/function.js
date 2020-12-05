const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();
console.log(fruit()); //error no esta como global la variabel fruit

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2; // Usar mejor let y const para asignacion de variables
    console.log(x);
    console.log(y);
}
anotherFunction();