package algorithms.sort.insertion.java;

import java.util.Arrays;

public class App {
    public static void main(String[] args){
        int[] arr = {3,5,2,1,6,4,7};

        InsertionSort.sort(arr);

        System.out.println(Arrays.toString(arr));
    }
}
