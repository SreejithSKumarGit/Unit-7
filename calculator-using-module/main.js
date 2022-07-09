const add=require('./modules/add');
const subtract=require('./modules/substract');
const mulitiply=require('./modules/multiply');
const divide=require('./modules/divide');


function main(x,y)
{
    console.log(add(x,y));
    console.log(subtract(x,y));
    console.log(mulitiply(x,y));
    console.log(divide(x,y));
}

main(10,5);