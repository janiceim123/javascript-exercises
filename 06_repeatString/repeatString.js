const repeatString = function(string, times) {
    // for loop times times
    //just print string 
    if (times < 0) return "ERROR";
    let result = "";
    for (let i = 0; i < times; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
