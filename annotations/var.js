var apples = 5;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
//built in objects
var now = new Date();
//Array
var colors = ["red", "green", "blue"];
var myNumbers = [1, 2, 3, 4];
var truths = [true, false, false];
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car;
var point = {
    x: 3,
    y: 4,
};
//function
var logNumber = function (i) {
    console.log(i);
};
var words = ["red", "green", "blue"];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}
