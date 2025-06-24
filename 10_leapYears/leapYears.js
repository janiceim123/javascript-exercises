const leapYears = function(year) {
    // has to be % 4 = 0
    // but also cannot be % 100 = 0, unless 400
    let isLeap = true;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        isLeap = true;
    }
    else {
        isLeap = false;
    }
    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
