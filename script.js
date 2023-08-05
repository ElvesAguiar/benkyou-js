"use  strict";
   


const rosePrice=8;
let roseNumber=70;

const lilyPrice=10;
let lilyNumber=50;

const tulipPrice=2;
let tulipNumber=120;

let totalRosePrice =roseNumber*rosePrice;

let totalLilyPrice =lilyNumber*lilyPrice;

let totalTulipPrice =tulipPrice*tulipNumber;



roseNumber=roseNumber-20;
lilyNumber=lilyNumber-30;
totalRosePrice =roseNumber*rosePrice;
totalLilyPrice =lilyNumber*lilyPrice;

console.log("Rose – unit price:"+rosePrice+" , quantity: "+roseNumber+" , value: "+totalRosePrice+
" Lily – unit price: "+lilyPrice+" , quantity: "+lilyNumber+" , value: "+totalLilyPrice+
" Tulip – unit price: "+tulipPrice+" , quantity: "+tulipNumber+" , value: "+totalTulipPrice+" Total: "+
(totalLilyPrice+totalRosePrice+totalTulipPrice))