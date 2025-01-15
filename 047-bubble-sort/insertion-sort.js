function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
            for(let j= i; j > 0; j-- ){
                    if(arr[j] < arr[j-1]){
                        // Swap for ES2015 and above
                      [arr[j],arr[j-1]] = [arr[j-1], arr[j]]  
                    }
            }
    }
    return arr;
}

// console.log(insertionSort([22, 11, 1, 40, 2]));

function insertionSortBetter(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSortBetter([2,1,9,76,4])