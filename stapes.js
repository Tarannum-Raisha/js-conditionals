/*
 * MULTI LEVEL CONDITION 

*/
 const price = 3000;

 if(price >= 5000 ){
    // 10% discount 
    const discount = price * 10/100 ;
    const pay = price - discount ;
   console.log(discount);
   console.log(pay);
    
 }
else if (price > 2500 ){
    // 5% discount
    const discount = price * 5/100;
    const pay = price - discount;
    console.log(discount);
    console.log(pay);
}
 else{
    console.log(price);
 }