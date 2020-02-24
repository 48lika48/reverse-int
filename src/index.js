module.exports = function reverse (n) {
    let positiveNumber = Math.abs(n);
    return ("" + positiveNumber).split("").reverse().join("");
}
