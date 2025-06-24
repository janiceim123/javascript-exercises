const reverseString = function(string) {
    // split it into array of characters
    // reverse array
    // join back together
    let arr = string.split("");
    let rev = arr.reverse();
    return rev.join("");
};

// Do not edit below this line
module.exports = reverseString;
