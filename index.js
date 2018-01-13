function myAnimal() {
  return "dog";
}

function yourAnimal() {
  return "cat";
}

function add2(n) {
  return n + 2;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

var theFunk = funkyFunction()();
