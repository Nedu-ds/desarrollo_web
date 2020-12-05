const removeWords = s => {
    let res = words.split(" ");
    let list = []
    for ( i=0 ; i < res.length ; i++){
        (res[i] === res[i+1] )
            ? {}
            : list.push(res[i]) 
    }
    var finalString
    for ( i=0 ; i < list.length ; i++){
        (i < 1)
            ? finalString = `${list[i]}`
            : finalString = `${finalString}${' '}${list[i]}`
    }
    return finalString;
}
  
let words = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
console.log(removeWords(words));

let lista = ['hola','Mundo']
console.log(`${lista[0]}${" "}${[lista[1]]}`)