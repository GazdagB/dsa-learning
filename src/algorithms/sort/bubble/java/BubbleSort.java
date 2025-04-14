package algorithms.sort.bubble.java;

public class BubbleSort {
    public static int[] run(int[] arr){
        int placeHolder = 0; 

            for(int i = 0; i < arr.length; i++){
                
                for(int z = 0; z < arr.length -1; z++){
                    if(arr[z] > arr[z +1]){
                        placeHolder = arr[z +1];
                        arr[z + 1] = arr[z]; 
                        arr[z] = placeHolder;
                    }
                }

            }

        return arr; 
    }
}
