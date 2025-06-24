const sumAll = function(start, end) {
    // 1, 5
    // get first number, add to total
    // increment number, add new number to total
    // repeat until reach last number, include last in total
    // if start is larger, switch start and end
    if (start > end) { 
        let temp = start;  
        start = end;  
        end = temp;  
    }
    else if (start < 0 || end < 0) {
        return "ERROR";
    }
    else if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    let sum = 0;
    for (let num = start; num <= end; num++) {
        sum += num;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
