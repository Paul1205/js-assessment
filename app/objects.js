exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    obj.sayHello = fn;
    return obj.sayHello();
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
