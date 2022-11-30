"use strict";

//* Access the values of the elements

const value1 = document.getElementById('unit1');                    //! for selecting --> from option
const value2 = document.getElementById('unit2');                    //! for selecting --> to option
const enterValue = document.getElementById('setVal');               //! for selecting --> Enter value
const outputValue = document.getElementById('getVal');              //! for selecting --> Output value
const convert = document.getElementById('clickToConvert');          //! for selecting --> Convert Button
const swap = document.getElementById('swapbtn');                    //! for selecting --> swap button
const reset = document.getElementById('resetbtn');                     //! for selecting --> reset button

//?--------------------------------------------------------------------------------------------------------->

//Todo Add event on convert button

//Todo 1. for converting from Binary to Decimal format

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 2 && val2 == 10){
        let text = enterValue.value;
        if(!isNaN(Number('0B' + text))){
            let convertedVal = (parseInt(text, 2));
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 2. for converting from Binary to Octal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 2 && val2 == 8){
        let text = enterValue.value;
        if(!isNaN(Number('0B' + text))){
            let convertedVal = (parseInt(text, 2)).toString(8);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 3. for converting from Binary to Hexadecimal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 2 && val2 == 16){
        let text = enterValue.value;
        if(!isNaN(Number('0B' + text))){
            let convertedVal = (parseInt(text, 2)).toString(16);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 4. for converting from Hexadecimal to Binary

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 16 && val2 == 2){
        let text = enterValue.value;
        if(!isNaN(Number('0x' + text))){
            let convertedVal = (parseInt(text, 16)).toString(2);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 5. for converting from Hexadecimal to Decimal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 16 && val2 == 10){
        let text = enterValue.value;
        if(!isNaN(Number('0x' + text))){
            let convertedVal = (parseInt(text, 16));
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 6. for converting from Hexadecimal to Octal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 16 && val2 == 8){
        let text = enterValue.value;
        if(!isNaN(Number('0x' + text))){
            let convertedVal = (parseInt(text, 16)).toString(8);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 7. for converting from Decimal to Binary

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 10 && val2 == 2){
        let text = enterValue.value;
        if(!isNaN(text)){
            let convertedVal = (parseInt(text, 10)).toString(2);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 8. for converting from Decimal to Octal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 10 && val2 == 8){
        let text = enterValue.value;
        if(!isNaN(text)){
            let convertedVal = (parseInt(text, 10)).toString(8);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 9. for converting from Decimal to Hexadecimal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 10 && val2 == 16){
        let text = enterValue.value;
        if(!isNaN(text)){
            let convertedVal = (parseInt(text, 10)).toString(16);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 10. for converting from Octal to Binary

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 8 && val2 == 2){
        let text = enterValue.value;
        if(!isNaN(Number('0o' + text))){
            let convertedVal = (parseInt(text, 8)).toString(2);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 11. for converting from Octal to Decimal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 8 && val2 == 10){
        let text = enterValue.value;
        if(!isNaN(Number('0o' + text))){
            let convertedVal = (parseInt(text, 8));
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});

//Todo 12.for converting from Octal to Hexadecimal

convert.addEventListener('click', ()=>{
    let val1 = value1.value;
    let val2 = value2.value;

    if(val1 == 8 && val2 == 16){
        let text = enterValue.value;
        if(!isNaN(Number('0o' + text))){
            let convertedVal = (parseInt(text, 8)).toString(16);
            outputValue.value = convertedVal;
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }
});


//?------------------------------------------------------------------------------------->

//Todo Add Event on Swap Button

swapbtn.addEventListener('click', ()=>{
    let changeTo = value2.value;
    let changeFrom = value1.value;
    value1.value = changeTo;
    value2.value = changeFrom;

    let inputFrom = enterValue.value;
    let inputTo = outputValue.value;
    outputValue.value = inputFrom;
    enterValue.value = inputTo;
});

//?------------------------------------------------------------------------------------->

//Todo Add Event on Reset Button

reset.addEventListener("click", ()=>{
    outputValue.value = "";
    enterValue.value = "";
  });

