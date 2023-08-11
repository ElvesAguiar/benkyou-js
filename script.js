let fibbRec = function (n) {
    let retVal = 0;

    if (n !== 0) retVal = n === 1 ? 1 : fibbRec(n - 1) + fibbRec(n - 2);

    return retVal;
}

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13