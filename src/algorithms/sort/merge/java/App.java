package algorithms.sort.merge.java;

import java.util.Arrays;
import java.util.Random;

public class App {
    public static void main(String[] args){
        Random rand = new Random();
        int[] numbers = new int[10];

        for(int i = 0; i < numbers.length; i++){
            numbers[i] = rand.nextInt(100);
        }

        System.out.println("Before:");
        System.out.println(Arrays.toString(numbers));

        MergeSort.run(numbers);

        System.out.println("After:");
        System.out.println(Arrays.toString(numbers));
    }
}
