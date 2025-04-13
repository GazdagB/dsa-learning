package algorithms.search.binary.java;

public class App {
    public static void main(String[] args) throws Exception {
        int[] arr = {1, 3, 5, 7, 8, 10, 15, 36, 76, 89};
        int value = 36;

        System.out.printf("Found the target at Index: %s\n", binarySearch.search(arr, value)); 
        System.out.printf("Found the target with a recursive function at: %s\n", binarySearch.recursiveSearch(arr, value, 0, arr.length - 1));
    }
}
