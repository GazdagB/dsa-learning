package algorithms.sort.insertion.java;

public class InsertionSort {

    public static void sort(int[] arr){
        // Starting with i = 1 because first element is sorted
        for(int i = 1; i < arr.length; i++ ){
            int currentValue = arr[i];

            int j = i -1;

            while(j >= 0 && arr[j] > currentValue){
                arr[j +1] = arr[j];
                j--;
            }

            arr[j + 1] = currentValue;
        }
    }

}
