'use strict';
const LinkedList = require('./LinkedList');
const _Node = require('./LinkedList');

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
//console.log(mergeSort(unsortedMergeList));

//2. Understanding quicksort
//2a. The pivot could have been either 14 or 17
//2b. For the array [14, 17, 13, 15, 19, 10, 3, 16, 9, 12] after the second partitioning...
//First item as pivot: 14, 13, 10, 15, 19, 17, 3, 16, 9, 12
//Last item as pivot: 10, 3, 13, 15, 19, 14, 17, 16, 9, 12

//3. Implementing quicksort
const dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function qSort(arry, start = 0, end = arry.length) {
  if(start >= end) {
    return arry;
  }
  const middle = partition(arry, start, end);
  arry = qSort(arry, start, middle);
  arry = qSort(arry, middle + 1, end);
  return arry;
}

function partition(arry, start, end) {
  const pivot = arry[end - 1];
  let j = start;
  for(let i = start; i < end - 1; i++) {
    if(arry[i] <= pivot) {
      swap(arry, i, j);
      j++;
    }
  }
  swap(arry, end -1, j);
  return j;
}

function swap(arry, i, j) {
  const tmp = arry[i];
  arry[i] = arry[j];
  arry[j] = tmp;
}
//console.log(qSort(dataset));

//4. Implementing merge sort
function mSort(arry) {
  if (arry.length <= 1) {
    return arry;
  }
      
  const middle = Math.floor(arry.length / 2);
  let left = arry.slice(0, middle);
  let right = arry.slice(middle, arry.length);
  console.log('left is ', left);
  console.log('right is ', right);
      
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, arry);
}
//console.log(mSort(dataset));
//5. Sorting a linked list using merge sort
const unsortedLinkedList = new LinkedList();

unsortedLinkedList.insertFirst(1);
unsortedLinkedList.insertFirst(5);
unsortedLinkedList.insertFirst(2);
unsortedLinkedList.insertFirst(4);
unsortedLinkedList.insertFirst(3);

//console.log(unsortedLinkedList.mergeSort());

//6. Bucket sort
const unsortedArray = [0, 1, 3, 4, 6, 7, 2, 5, 10, 9];
function insertionSort(array) {
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
}

function bucketSort(array, bucketSize) {
  if(array === 0) {
    return array;
  }
  let i,
    minValue = array[0],
    maxValue = array[0];

  array.forEach(value => {
    if(value < minValue) {
      minValue = value;
    } else if(value > maxValue) {
      maxValue = value;
    }
  });

  let bucketCount = Math.floor((maxValue - minValue) / (bucketSize || 5) + 1);
  let allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  array.forEach(value => {
    allBuckets[Math.floor((value - minValue) / (bucketSize || 5))].push(value);
  });

  array.length = 0;

  allBuckets.forEach(function(bucket) {
    insertionSort(bucket);
    bucket.forEach(function (element) {
      array.push(element);
    });
  });
  return array;
}


console.log(bucketSort(unsortedArray));
//7. Sort in place

//8. Sorting books