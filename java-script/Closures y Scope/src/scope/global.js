var hello = 'Hello';
var hello = 'Hello+'; //Mala Practica
let world = 'Hello World';
//let world = 'Hello'; no puede ser reasignada
const helloworld = 'Hello World!' //no puede ser reasignada

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}
anotherFunction();

const helloWorld = () => {  //Mala practica
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => { //Mala practica
    var localVar = globalVar = 'im global'
}
anotherFunction();
console.log(localVar);