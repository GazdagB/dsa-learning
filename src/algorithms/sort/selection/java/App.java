package algorithms.sort.selection.java;

import java.util.Arrays;

public class App {

    public static void main(String[] args) throws Exception{

        int[] arr = {5,2,4,1,3,6,8,7};
        
        System.out.println("Before sorting: " + Arrays.toString(arr));
        SelectionSort.sort(arr);
        System.out.println("After sorting: " + Arrays.toString(arr));

    }

}
