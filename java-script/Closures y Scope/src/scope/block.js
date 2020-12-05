const fruits = () => {
    if (true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    
}
fruits();   //Let y Const  pueden ser accedidos solo en el mismo bloque y scope que console.log

let x = 1;
{
    let x = 2;
    console.log(x)   //Respeta el scope local y globla
}
console.log(x);

var x = 1;
{
    var x = 2;     //Var local reemplaza a la variable global
    console.log(x)
}
console.log(x);

const anotherFunction = () => {
    for (let i =0; i < 10; i++ ){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
};
anotherFunction();

