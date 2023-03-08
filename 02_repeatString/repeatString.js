

const repeatString = function(word, number) {
    let message = "";
    if (number < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < number; i++) {
        message = message + word;
    }

    return message;
};

// Do not edit below this line
module.exports = repeatString;
