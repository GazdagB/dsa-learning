
/**
 * 
 * @param {Array} arr 
 */
function selectionSort(arr){
    let min, i,j; 

    for(i = 0; i < arr.length - 1; i++){

        min = i; 
       
        for(j = i + 1; j < arr.length; j++ ){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        let placeHolder = arr[i]; 
        arr[i] = arr[min]; 
        arr[min] = placeHolder; 
    }
}

let array = [6,5,4,3,2,1]

console.log(array);
selectionSort(array); 
console.log(array);


