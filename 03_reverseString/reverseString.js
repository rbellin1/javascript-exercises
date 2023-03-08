const reverseString = function(word) {
    let newArray = word.split("");
    newArray.reverse();
    let newWord = newArray.join('');
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
