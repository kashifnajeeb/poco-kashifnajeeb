function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, mid);
  let rightHalf = arr.slice(mid);

  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);

  return merge(leftHalf, rightHalf);
}

function merge(leftHalf, rightHalf) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      result.push(leftHalf[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(leftHalf.slice(leftIndex))
    .concat(rightHalf.slice(rightIndex));
}

console.log(mergeSort([12, 8, 5, 3, 9, 11, 4]));
