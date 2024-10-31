/*
Theories:
Hash tables are data structures that uses stores key value pairs 
and uses a hash function to compute an index
i.e arrays uses index as a way to find the value but hash tables 
uses keys has a way to find their values

Hash Function is simply a function that generates a value of 
fixed length for each input that it gets

Idempotent  means if you do something multiple times and it has the same effect as doing it once

Hash Collisions happens when 2 different keys produce the same has value in 
a hash table then both keys are mapped to the same location

A map allows you to save any datatype as the key, an object doesn't

A set saves only keys no values
*/


// Creating our own hash table (JS already has this as an object)

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    //  Not a real hash converter something that does space keeping 
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
            let hashKey  =  this._hash(key);
            this.data[hashKey] = [key,value]
    }
    get(key){
            let hashKey = this._hash(key)
            return this.data[hashKey]
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')

  console.log(myHashTable.get("apples"));
  console.log(myHashTable.get('grapes'))
  
