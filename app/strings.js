exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var newArray = [];
    var newString;
    for (var i = str.length - 1; i >= 0; i--) {
      newArray.push(str[i]);
    }
    newString = newArray.join('');
    return newString;
  }
};
