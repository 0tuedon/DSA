class HashTable {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    if (typeof key !== "string")
      throw new Error("Can't Hash other types than string");
    // loop over strings
    let hash = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let currString = key[i]; // char
      let unicode = currString.charCodeAt(0) - 96;
      const PRIME_NUMBER = 37;

      hash = Math.abs(unicode * PRIME_NUMBER + hash);
    }
    return hash % (this.keyMap.length - 1);
  }

  removeDuplicates(values){
        if(!Array.isArray(values)) throw new Error(" has to be an array");

        let duplicates = new HashTable(values.length)
    
        for(let value of values){
            duplicates.set(value, null)
        }
       return duplicates.keys()
  }
  set(key, value) {
    const hashedKey = this._hash(key);
    let storedValue = [key, value];
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }

    let currentBucket = this.keyMap[hashedKey];
    for(let i = 0; i < currentBucket.length; i++){
      if(key === currentBucket[i][0]){
        return undefined;
      }
    }
    this.keyMap[hashedKey].push(storedValue);
  }

  get(key){
        let hashedKey = this._hash(key);
        let value
        if(this.keyMap[hashedKey] !== undefined ){
            let bucket = this.keyMap[hashedKey]
            for(let i= 0; i < bucket.length; i++){
                if(key === bucket[i][0] ){
                    value= bucket[i][1]
                }
            }
        }
        return value;
  }

  keys (){
    let allKeyValues = this.keyMap
    let result = []
        for(let i = 0; i < allKeyValues.length; i++){
            let currentBucket = this.keyMap[i];
            if(currentBucket){
                for(let j = 0; j < currentBucket.length; j++){
                    result.push(currentBucket[j][0]);
                }
            }
        }

    return result;
  }
  values (){
    let allKeyValues = this.keyMap
    let result = []
        for(let i = 0; i < allKeyValues.length; i++){
            let currentBucket = this.keyMap[i];
            if(currentBucket){
                for(let j = 0; j < currentBucket.length; j++){
                    result.push(currentBucket[j][1]);
                }
            }
        }

    return this.removeDuplicates(result);
  }
}

const store = new HashTable();
store.set("home", "tuedon");
store.set("hom2", "tuedon");
store.set("hom1", "tuedon");
store.set("hom3", "tuedon-r");


console.log(store.values());
