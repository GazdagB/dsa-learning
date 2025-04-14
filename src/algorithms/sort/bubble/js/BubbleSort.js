
/**
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function bubbleSort(arr){
    let swapped; 

    // Outer Loop 
    for(let i = 0; i < arr.length; i++){
        swapped = false; 
        // Inner Loop
        for(let z = 0; z < arr.length - 1; z++){
            let placeholder = 0; 

            // If left index is greater then right index swap them
            if(arr[z] > arr[z+1]){
                placeholder = arr[z+1]; 
                arr[z+1] = arr[z]; 
                arr[z] = placeholder

                swapped = true; 
            }
        } 

        if(!swapped){
            break;
        }
    }

    return arr; 
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} quantity 
 */
function fillArrayWithRandomNumbers(arr, quantity, min, max){

    for(let i = 0; i < quantity; i++){
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let arrayToSort = []; 


fillArrayWithRandomNumbers(arrayToSort,100000,0,100000);




let start = performance.now(); 
console.log(bubbleSort(arrayToSort));
let ellapsed = performance.now() - start; 
let seconds = (ellapsed/ 1000).toFixed(2);

console.log(`Array sorted in ${seconds }seconds`);