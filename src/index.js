const ones = ["zero","one","two","three","four","five","six","seven","eight","nine"],
      specialHyeta = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
      tens = ["ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
      hundreds = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

module.exports = function toReadable (number) {
    let numberSplitted = String(number).split("");
    if(numberSplitted.length === 3 && Number(numberSplitted[1]) === 1 && Number(numberSplitted[2]) > 0) {
        return hundreds[Number(numberSplitted[0]) - 1] + " " + specialHyeta[Number(numberSplitted[2] - 1)];
    } else if (numberSplitted.length === 3 && Number(numberSplitted[1]) > 1 && Number(numberSplitted[2]) != 0) {
        return hundreds[Number(numberSplitted[0])- 1] + " " + tens[Number(numberSplitted[1]) - 1] + " " + ones[Number(numberSplitted[2])]
    } else if (numberSplitted.length === 3 && Number(numberSplitted[1]) === 1 && Number(numberSplitted[2]) === 0) {
        return hundreds[Number(numberSplitted[0]) - 1] + " " + tens[0];
    } else if (numberSplitted.length === 3 && Number(numberSplitted[1]) > 1 && Number(numberSplitted[2]) === 0) {
        return hundreds[Number(numberSplitted[0]) - 1] + " " + tens[Number(numberSplitted[1]) - 1];
    } else if (numberSplitted.length === 3 && Number(numberSplitted[1]) === 0 && Number(numberSplitted[2]) > 0) {
        return hundreds[Number(numberSplitted[0]) - 1] + " " + ones[Number(numberSplitted[2])];
    } else if (numberSplitted.length === 3 && Number(numberSplitted[1]) === 0 && Number(numberSplitted[2]) === 0) {
        return hundreds[Number(numberSplitted[0]) - 1];
    }

    if(numberSplitted.length === 2 && Number(numberSplitted[0]) > 1 && Number(numberSplitted[1]) != 0) {
        return tens[Number(numberSplitted[0]) - 1] + " " + ones[Number(numberSplitted[1])];
    } else if (numberSplitted.length === 2 &&Number(numberSplitted[0]) === 1 && Number(numberSplitted[1]) > 0) {
        return  specialHyeta[Number(numberSplitted[1]) - 1];
    } else if (numberSplitted.length === 2 && Number(numberSplitted[0]) > 0 && Number(numberSplitted[1]) === 0) {
        return tens[Number(numberSplitted[0]) - 1];
    }

    if(numberSplitted.length === 1) {
        return ones[Number(numberSplitted[0])];
    }
}
