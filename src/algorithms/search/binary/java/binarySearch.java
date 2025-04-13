package algorithms.search.binary.java;

public class binarySearch {
    public static int search(int[] arr, int targetValue){
        
        int left = 0; 
        int right = arr.length -1; 

        while (left <= right) {
            int mid = (left + right) / 2; 

            if(arr[mid] == targetValue ){
                return mid; 
            }

            if(arr[mid] < targetValue){
                left = mid + 1;
            }

            if(arr[mid] > targetValue){
                right = mid -1; 
            }
        }

        return -1;
    }
}