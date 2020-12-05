const helloWorld = () => {
    const hello = 'Hello World'; //Varable declaracion local
    console.log (hello);
}
helloWorld();
console.log(hello); //No puede ser llamada si no esta declarada en el entorno global

var scope = "i am global";

const functionScope = () => {
    var scope = 'i am just a local'; //ambito lexico las variables y funciones trabajan en el scope en el que se encuentren
    const func = () => {
        return scope
    }
    console.log(func());
};    
functionScope();
console.log(scope);
