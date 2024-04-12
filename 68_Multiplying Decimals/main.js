//making a function to multiply decimals
function multiplyDecimalNumbers(num1, num2) {
    var product = num1 * num2;
    return Math.round(product * 100) / 100;
    //two decimal places
}
var result = multiplyDecimalNumbers(5.34, 2.86);
console.log(result);
