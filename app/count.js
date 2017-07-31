exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    setInterval(function() {
      if (start < end) {
        start++;
      }
    }, 100);
  }
};
