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

const sortedArray = [1,2,5,9,16,28,47,64,78,99,120,158,225]
const targetValue = 2; 


console.log(binarySearch(sortedArray,targetValue));
console.log(binaryRecursive(sortedArray,targetValue,0,sortedArray.length - 1))