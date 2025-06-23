const removeFromArray = function(array, ...remove) {
    // if remove is in array, delete it
    // return array
    
    // loop thru arguments checking if included in array, 
    // if in, remove all instances

    for (let i = 0; i < remove.length; i++) {
        if (array.includes(remove[i])) {
            // while array still includes argument, delete from array
            while (array.includes(remove[i])) {
                array.splice(array.indexOf(remove[i]), 1);
            }
        }
    }

    return array;

    // another way would just be to make a new array with all wanted items
    // and return the new array
};

// Do not edit below this line
module.exports = removeFromArray;
