# Insertion Sort 
Insertion sort is an easy to understand yet not that performant algorithm its time complexity is O(n^2)

![alt text](https://miro.medium.com/v2/resize:fit:765/0*1zi2XtjiLXa3LYZh.PNG)

## 💡 How It Works

Insertion Sort builds the sorted array one item at a time. It assumes the first element is already sorted and then:

1. Picks the next element.
2. Compares it with the elements in the sorted portion.
3. Shifts all larger elements one position to the right.
4. Inserts the picked element at the correct position.

## ⏱️ Time & Space Complexity

| Case       | Time Complexity |
|------------|------------------|
| Best       | O(n)             |
| Average    | O(n²)            |
| Worst      | O(n²)            |

- **Space Complexity:** O(1) – it sorts in-place.
- **Stable:** ✅ Yes
- **In-Place:** ✅ Yes


## 📺 Videos to Watch

[![Video Title](https://img.youtube.com/vi/JU767SDMDvA/0.jpg)](https://www.youtube.com/watch?v=JU767SDMDvA)  
**Insertion Sort Algorithm in Java - Sorting Tutorial**

[![Video Title](https://img.youtube.com/vi/OGzPmgsI-pQ/0.jpg)](https://www.youtube.com/watch?v=OGzPmgsI-pQ)  
**Insertion Sort Explained in 2 Minutes**

[![Video Title](https://img.youtube.com/vi/z2x3SSBVGJU/0.jpg)](https://www.youtube.com/watch?v=z2x3SSBVGJU)  
**Insertion Sort Animation**


## 🌍 Real World Usecases 

- 🔧 Small Data Sets:
Insertion Sort is often used in embedded systems or performance-critical low-memory environments where the dataset is small and the overhead of more complex algorithms isn’t worth it.

- 🗂️ Nearly Sorted Data:
It performs very well when data is already “almost” sorted — common in systems where data is added incrementally over time (like logs, rankings, or user scores).

- 🧠 Teaching Tool:
It’s widely used to teach sorting logic in schools and universities because it’s simple and demonstrates key concepts like comparison, swapping, and array manipulation.

- 📝 Text Editors (Insertion on Typing):
Some text editors use a form of insertion sort when organizing recently typed or small buffers of auto-completion suggestions.

- 📇 Online Algorithms:
In scenarios where elements are received one at a time and need to be sorted as they arrive (like a live leaderboard), insertion sort logic can be applied.