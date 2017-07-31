exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      return resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
  }
};
