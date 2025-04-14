package algorithms.sort.bubble.java;

import java.util.Arrays;

public class App {

    public static void main(String[] args) throws Exception {

        // Int Array with 100 elements 
        int[] numbers = {
            56, 23, 89, 12, 77, 3, 105, 45, 67, 9,
            34, 28, 95, 101, 18, 62, 44, 90, 11, 73,
            6, 17, 88, 39, 72, 100, 33, 1, 64, 86,
            49, 97, 14, 55, 7, 92, 25, 69, 30, 84,
            99, 13, 36, 81, 52, 40, 29, 91, 4, 70,
            76, 22, 59, 87, 31, 63, 26, 19, 10, 74,
            8, 53, 38, 24, 43, 32, 5, 75, 61, 20,
            80, 93, 21, 16, 48, 65, 15, 41, 60, 35,
            47, 2, 68, 27, 46, 66, 98, 42, 96, 94,
            71, 85, 78, 50, 37, 58, 57, 54, 83, 79,
            56, 23, 89, 12, 77, 3, 105, 45, 67, 9,
            34, 28, 95, 101, 18, 62, 44, 90, 11, 73,
            6, 17, 88, 39, 72, 100, 33, 1, 64, 86,
            49, 97, 14, 55, 7, 92, 25, 69, 30, 84,
            99, 13, 36, 81, 52, 40, 29, 91, 4, 70,
            76, 22, 59, 87, 31, 63, 26, 19, 10, 74,
            8, 53, 38, 24, 43, 32, 5, 75, 61, 20,
            80, 93, 21, 16, 48, 65, 15, 41, 60, 35,
            47, 2, 68, 27, 46, 66, 98, 42, 96, 94,
            71, 85, 78, 50, 37, 58, 57, 54, 83, 79
        };

        long start = System.currentTimeMillis();
        System.out.println(Arrays.toString(BubbleSort.run(numbers)));
        long ellapsed = System.currentTimeMillis() - start; 
        System.out.printf("Array sorted in: %s miliseconds", ellapsed);
    }

}