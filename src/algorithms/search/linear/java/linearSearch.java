package algorithms.search.linear.java;

/** */
public class linearSearch {
    public static int run(int[] arr, int searchedNumber){

        for(int i = 0; i < arr.length; i++){
            // If the number at the specific index matches the searched number
            if(searchedNumber == arr[i] ){
                // Return the index of the number
                return i; 
            }
        }

        
        return -1;
    }; 
}