var Javabuzz = function(){};


// function Javabuzz() {};
//
// var javabuzz = new Javabuzz();

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

Javabuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  return ((number % 3 === 0) && (number % 5 === 0));
};
