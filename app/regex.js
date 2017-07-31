exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {
    return (/[a,e,i,o,u,A,E,I,O,U]$/).test(str);
  },

  captureThreeNumbers: function(str) {
    var result = str.match(/\d{3}/);
    if (result) {
      return result[0];
    } else {
      return false;
    }
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {

  }
};
