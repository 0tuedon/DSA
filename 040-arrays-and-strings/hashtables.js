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

  // console.log(myHashTable.get("apples"));
  // console.log(myHashTable.get('grapes'))

  //  HASHTABLES IMPLEMENTATION CORRECTION

  class HashTableCorrection {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }
  }
  
  const myHashTableCorrection = new  HashTableCorrection(50);
  myHashTableCorrection.set('grapes', 10000)
  myHashTableCorrection.set('grapes', 10000)
  myHashTableCorrection.get('grapes')
  myHashTableCorrection.set('apples', 9)
  myHashTableCorrection.get('apples')


  // HASHTABLE RE IMPLEMENTATION

  class  HashTableReImplement {
        constructor (size){
          if(typeof size !== "number") throw new Error("Size needs to be a number");
           this.data =  new Array(size)
        }

        _hash (key){
          let hash = 0;
          for (let i =0; i < key.length; i++){
              hash = (hash + key.charCodeAt(i) * i) % this.data.length
          }
          return hash;
        }
        // Public function
        set(key, value){
          // where to store the keys
            let address =  this._hash(key)
            if(!this.data[address]){
              this.data[address] = []
            }
            //  always want to push to kinda handle collisions
            this.data[address].push([key, value]);
        }

        get(key){
          let address =  this._hash(key);
          let addressData =  this.data[address]
          let newData = []
          if(addressData) {
            if(addressData.length > 1){
              for (let i = 0; i < addressData.length; i++) {
                  if(addressData[i]?.[0] === key){
                      newData.push(addressData[i])
                  }
              }   
              return newData    
            }
            return addressData
          }
          return addressData
        }
  }

  const myHashReImplement = new  HashTableReImplement(2);
  myHashReImplement.set('grapes', 10000)
  myHashReImplement.set('grapese', 10000)
  console.log(myHashReImplement.get('grapese'))
