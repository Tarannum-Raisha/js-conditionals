const salary = 21000 ;
const isBCS = true;
const hasCar = true;
const height = 68;


// if(salary > 20000 && height > 66 ){
//     console.log(
//     'su----------patro'
//     )
// }
// else{
//     console.log('onno patro khuji ')
// }

// if(salary > 25000 || height > 72 ){
//     console.log('eso baba kobul ')
    
// }
// else{
//     console.log('vag tuio mokbul')
// }

//more and more condition

// if(salary > 25000 || height > 72 || isBCS == true ){
//     console.log('eso baba kobul ');
    
// }
// else{
//     console.log('vag tuio mokbul');
// }


if(salary > 25000 && height > 72 && isBCS == true ){
    console.log('eso baba kobul ');
    
}
else{
    console.log('vag tuio mokbul');
}

// complex condition ************************

// if( (salary > 25000 && hasCar == true ) || isBCS == true){
//     console.log('ami raji ')
// }


if( (salary > 25000 || hasCar == true ) && isBCS == true){
    console.log('ami raji ')
}