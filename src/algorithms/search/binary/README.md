# Binary Search Algorithm

Binary Search is a fundamental and efficient searching algorithm used to find the position of a target value within a **sorted array**. It's known for its speed, cutting down the search time from linear (`O(n)`) to logarithmic (`O(log n)`).


## 📖 Analogy

Imagine you're looking for a specific page in a book. Instead of flipping one page at a time (Linear Search), you open the book in the middle.  
- If the page number is **less** than your target, you flip **left**.
- If it's **greater**, you flip **right**.
- If it's **equal**, bingo! You found your page.

Binary Search follows the same logic—divide and conquer.

---

## 💡 How It Works

1. Start with the entire sorted array.
2. Find the middle element.
3. Compare the middle element with the target value:
   - ✅ If it's equal, return the index.
   - 🔼 If the target is greater, repeat the search on the right half.
   - 🔽 If the target is smaller, repeat the search on the left half.
4. Repeat until the value is found or the subarray becomes empty.

---

## 🧪 Example

```js
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Not found
};
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3
``` 

## ⚙️ Use Cases 
* Searching in large datasets
* Finding elements in dictionaries
* Implementing search features in applications
* Real-time systems where speed is critical

## 🧠 Fun Fact
Binary Search was first described in 1946 but wasn’t implemented correctly until 1962. It's trickier than it looks—but once you understand it, it's powerful.

## 📚 Valuable Resources

- [📘 Binary Search – Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)  
  A comprehensive overview of the algorithm’s history, theory, and complexity.

- [W3Schools DSA Binary Search](https://www.w3schools.com/dsa/dsa_algo_binarysearch.php)
 Visualisation and overview of the algorithm. 


## Videos 
[![Video Title](https://img.youtube.com/vi/MFhxShGxHWc/0.jpg)](https://www.youtube.com/watch?v=MFhxShGxHWc)
Binary Search Algorithm in 100 Seconds

[![Video Title](https://img.youtube.com/vi/KXJSjte_OAI/0.jpg)](https://www.youtube.com/watch?v=KXJSjte_OAI)
How Binary Search Makes Computers Much, Much Faster

[![Video Title](https://img.youtube.com/vi/NFhOrxtXXcM/0.jpg)](https://www.youtube.com/watch?v=NFhOrxtXXcM)
Binary Search in Java - Full Simple Coding Tutorial

