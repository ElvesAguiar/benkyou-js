let fibbRec = function (n) {
    let retVal = 0;

    if (n !== 0) retVal = n === 1 ? 1 : fibbRec(n - 1) + fibbRec(n - 2);

    return retVal;
}

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13


function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}

console.log(fibbIter(4)); // -> 3
console.log(fibbIter(7)); // -> 13