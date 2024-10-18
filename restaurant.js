const age = 46;
const price = 3000;

 if(age < 12){
    console.log('you can eat food free')
 }

 else if (age > 60){
    // discount 50%
    const discount = price * 50/100;
    const paybill = price - discount;

    console.log( paybill);
 }
 else if (age >= 50){
    // discount 25%
    const discount = price * 25/100;
    const paybill = price - discount;

    console.log( paybill);
 }

 else if (age >= 40){
    // discount 10%
    const discount = price * 10/100;
    const paybill = price - discount;

    console.log( paybill);
 }
 else{
    console.log('you will pay full money')
 }