var findLongestWord = function(words) {
    var longest = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}

var sum = function (array) {
    var length = array.length;
    var total = 0;
    for (var i = 0; i < length; i++) {
        total += array[i];
    }
    return total;
}

var multiply = function (array) {
    var length = array.length;
    var total = 1;
    for (var i = 0; i < length; i++) {
        total *= array[i];
    }
    return total;
};

var duplicate = function (array) {
    var array1 = array.length;
    var array2 = [];
    for (var i = 0; i < array1; i++) {
        array2[i] = array[i];
    };
    var array3 = array2.concat(array);
    return array3;
};

var evaluateExpression = function (a, b, c) {
    var expression = a + c + "("+ b +")";
    return eval(expression);
};
