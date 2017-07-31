exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var newArr;
    newArr = arr.filter(function(value) {
      return value !== item;
    });
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = 0;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var count = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      if (count > 1) {
        if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i]);
        }
      }
      count = 0;
    }
    return newArr;
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= arr[i];
    }
    return arr;

  },

  findAllOccurrences: function(arr, target) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        newArr.push(i);
      }
    }
    return newArr;
  }
};
