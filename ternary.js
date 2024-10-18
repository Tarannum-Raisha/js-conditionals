/**
 * *************************************
 * TARNARY --> THREE PARTS 
 * **************************************
 * ? : 
 ** CONDITION ? DO something when ture : DO something when false 
 */

const age = 39;

// ***********
// NORMAL IF/ ELSE 
//****************
//  if ( age >= 18){
//     console.log('you can vote ');
//  }
//  else{
//     console.log(
//         'jao bacca ghumao'
//     )
//  }


/** 
 * ***************
 * SIMPLE TARMARY 
 * ********************
 */
// age >= 18 ? console.log('you can vote') : console.log('you can not vote');




let price = 500;
const isLeader = false;

if (isLeader === true) {
    price = 0;
}
else {
    price += 100;
}
// console.log(price);

price = isLeader === true ? 0 : price += 100;

//OPTIONAL : SEMI ADVANCED TERNARY 
if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 10;
}


//feel free to ignore this one 
// price = isLeader===true ? price > 1000 ? price/2 : 0 : price+10;
price = isLeader === true ?
    price > 1000 ? price / 2 : 0
    : 
    price + 10;