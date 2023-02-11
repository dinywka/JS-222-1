function isNumSimple(n) {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

isNumSimple(5);

//2
function factors(n) {
    var factors_n = [];
    for (var i = 1; i <= Math.floor(Math.sqrt(n)); i++)
        if (n % i === 0) {
            factors_n.push(i);
            if (n / i !== i)
                factors_n.push(n / i);
        }
    return factors_n;
}

factors(18);