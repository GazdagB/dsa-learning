
/**
 * 
 * @param {Array} arr 
 */
function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i]; 

        let j = i -1; 

        while(j >= 0 && arr[j] > currentValue){
            arr[j +1] = arr[j]; 
            j--
        }

        arr[j +1] = currentValue


    }

}


const array = [1,5,3,2,202,24,26,33]

insertionSort(array); 

console.log(array);
