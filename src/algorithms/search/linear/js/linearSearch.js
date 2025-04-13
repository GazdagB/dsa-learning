
/**
 * 
 * @param {Array} arr 
 * @param {Number} searchedNum 
 */
function linearSearch(arr, searchedNum){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === searchedNum){
            return i; 
        }
    }

    return -1; 
}


const arr = [20,10,4,10,42,0,21, -1]

console.log(linearSearch(arr, 3));
