// NeedtocreateaJavascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8,
//  9, 10.9")

//steps:
//string -> array
//array -> loop _> sum

function calcSumOfString(str){

    let sum = 0;
    let array = [];
    array = str.split(",");

    console.log(array);

    for(let i = 0 ; i< array.length ; i++)
    {
        sum += parseFloat(array[i] ) ;
    }

    return sum;

}

const str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
const sum1 = calcSumOfString(str);
console.log(sum1); // Output: 55