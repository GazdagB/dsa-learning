/**
 * 
 * @param {Array} arr 
 * @param {Number} targetValue 
 * @returns {Number}
 */
function binarySearch(arr, targetValue){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){

        let mid = Math.floor((left + right) / 2); 

        // If the middle equals the target value return the index
        if(arr[mid] === targetValue){
            return mid; 
        }

        if(arr[mid] > targetValue){
            right = mid -1; 
        }

        if(arr[mid] < targetValue){
            left = mid +1; 
        }

    }
    
    return -1; 
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} targetValue 
 * @param {Number} left 
 * @param {Number} right 
 * @returns {Number}
 */
function binaryRecursive(arr,targetValue,left,right){

    if(left > right){
        return -1
    } 
    
    let mid = Math.floor((left + right) / 2); 

    if(arr[mid] === targetValue){
        return mid; 
    }

    if(arr[mid] > targetValue){
        return  binaryRecursive(arr,targetValue,left, mid -1);
    }

    return binaryRecursive(arr,targetValue, mid + 1, right); 
    

}



/**
 * Generates a sorted array of ascending integers.
 * @param {number} size - Length of the array.
 * @param {number} step - Step between elements (default is 1).
 * @returns {number[]}
 */
function generateSortedArray(size, step = 1) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(i * step);
    }
    return arr;
}

const sortedArray = generateSortedArray(10000000,1)
const targetValue = 1000000; 


function measureTimeAndLog(fn){
    const startTime = performance.now()
    const foundIndex = fn()
    const endTime = performance.now() 

    const ellapsedTime = endTime - startTime; 

    const seconds = ellapsedTime / 1000;

    console.log(`Target found at index ${foundIndex} in ${ellapsedTime} milliseconds`)
}

measureTimeAndLog(()=>binarySearch(sortedArray,targetValue))
measureTimeAndLog(()=>binaryRecursive(sortedArray,targetValue,0, sortedArray.length -1))