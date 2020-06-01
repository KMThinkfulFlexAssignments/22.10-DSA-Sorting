'use strict';
//1. Understanding merge sort
const unsortedMergeList = [21, 1, 26, 26, 45, 29, 28, 2, 9, 16, 49, 39];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  console.log('left is ', left);
  console.log('right is ', right);
  
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}
//used to merge the halves back together
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
console.log(mergeSort(unsortedMergeList));

//2. Understanding quicksort
//2a. The pivot could have been either 14 or 17
//2b. For the array [14, 17, 13, 15, 19, 10, 3, 16, 9, 12] after the second partitioning...
//First item as pivot: 14, 13, 10, 15, 19, 17, 3, 16, 9, 12
//Last item as pivot: 10, 3, 13, 15, 19, 14, 17, 16, 9, 12

//3. Implementing quicksort

//4. Implementing merge sort

//5. Sorting a linked list using merge sort

//6. Bucket sort

//7. Sort in place

//8. Sorting books