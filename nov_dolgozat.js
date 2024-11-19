//1. feladat - Number to digit tiers
function cutoffNumber(num) {
    const str = num.toString();
    let result = [];
    for (let i = 1; i <= str.length; i++) {
        result.push(str.slice(0, i));
    }
    return result;
}


// 2. feladat - Disemvowel Trolls
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}


//3. feladat - String to ineger conversion
function myParseInt(str) {
    str = str.trim();
    if (/^-?\d+$/.test(str)) { 
        return parseInt(str, 10);
    }
    return "NaN";
}


//4. feladat - Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

