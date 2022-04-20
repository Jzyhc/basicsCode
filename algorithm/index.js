// 冒泡排序
function bubbling(arr){
  for(let i = 0; i < arr.length-1; i++){
    for(let j = 0; j < arr.length-i-1; j++){
      if(arr[j] > arr[j+1]){
        let value = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = value
      }
    }
  }
}
var arr = [12,1,4,5,712,21,3,9]
console.log(arr)
bubbling(arr)
console.log(arr)
console.log('------------------------------------')


// 快速排序
function speediness(arr){
  if(arr.length<=1){
    return arr
  }
  const index = Math.floor(arr.length/2)
  const pivot = arr.splice(index,1)[0]
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]>pivot){
      right.push(arr[i])
    }else{
      left.push(arr[i])
    }
  }
  return speediness(left).concat([pivot],speediness(right))
}

const arr1 = [9,3,4,7,12,47,23,21,43,19]
speediness(arr1)
// 根据数组的中间值，去判断数组中的大小，大于取的中间值取右边，小于的去左边
// 递归左右数组，用 concat 合并数组
console.log(speediness(arr1))
// console.log(arr1)

// 二分查找
function binarySearch(arr,dest, start,end) {
  end = end || arr.length -1
  start = start || 0
  let m = Math.floor((start + end) / 2);
  if(arr[m] ==  dest) {
    return m
  }
  if(arr[m] <  dest) {
    return binarySearch(arr,dest,0,m-1)
  }else{
    return binarySearch(arr,dest,m+1,end)
  }
  return false
}

console.log(binarySearch(arr1,12))



// 快排进阶
function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}
/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function divide(A, p, r) {
  const x = A[r - 1];
  let i = p - 1;

  for (let j = p; j < r - 1; j++) {
    if (A[j] <= x) {
      i++;
      swap(A, i, j);
    }
  }

  swap(A, i + 1, r - 1);

  return i + 1;
}

/**
 * 
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function qsort(A, p = 0, r) {
  r = r || A.length;

  if (p < r - 1) {
    const q = divide(A, p, r);
    qsort(A, p, q);
    qsort(A, q + 1, r);
  }

  return A;
}
console.log(qsort(arr1))
