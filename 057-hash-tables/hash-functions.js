function hashFunction(key, spots = 9){
    if(typeof key !== "string") throw new Error("Can only hash strings");
    let hashNumber =  0;

    for(let char of key){
        hashNumber += char.charCodeAt(0) - 96;
    }

    return hashNumber % spots;
}
function hashFunctionBetter(key, spots = 9){
    if(typeof key !== "string") throw new Error("Can only hash strings");
    let hashNumber =  0;
    const PRIME_NUMBER = 37;
    for(let i = 0; i < Math.min(key.length,100); i++){
        let currChar = key[i];
        let unicode = currChar.charCodeAt(0) -96;
        hashNumber = (hashNumber * PRIME_NUMBER + unicode) % spots
    }

    return hashNumber;
}


console.log(hashFunctionBetter("nerd"))
console.log(hashFunctionBetter("nerds"))
console.log(hashFunctionBetter("nesssjjsrds"))