//Clouser.- Combinacion de una funcion y el ambito lexico que fue declarada una funcion
//Recuerda el ambito en el que fue declarada

const moneyBox = (coins) => {
    var saveCoins =0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

//Creando la funcion son closure

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
