package algorithms.sort.selection.java;

public class SelectionSort {

    public static void sort(int[] arr){
        int min;

        for(int i = 0; i < arr.length -1; i++){
            
            
            min = i;

            for(int j = i +1; j < arr.length -1; j++){
                if(arr[j] < arr[min]){
                   min = j;
                }
            }

            int placeHolder = arr[i];
            arr[i] = arr[min];
            arr[min] = placeHolder;
        }
    }

}
