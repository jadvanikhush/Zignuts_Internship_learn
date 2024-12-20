function calcSumOfDigitFromString(str) {
    let sum = 0; 
    let size = str.length;

    for (let i = 0; i < size; i++) {
        // Check if the character is a digit
        if (str[i] >= '0' && str[i] <= '9') {
            // Convert the character to a number and for this we use parseInt or number also
            sum += parseInt(str[i]); 
        }
    }
    return sum; 
}

const str = "foo8bar8cat2tc2";
const sum1 = calcSumOfDigitFromString(str);
console.log(sum1); // Output: 20

