function mergeSort(arr) {

    // Base Case
    if (arr.length <= 1) {
        return arr;
    }


    const mid = Math.floor(arr.length / 2);    // Middle Index
    const left = mergeSort(arr.slice(0, mid));    // Left Half ko recursively sort karo
    const right = mergeSort(arr.slice(mid));  // Right Half ko recursively sort karo

    // Final Sorted Array
    const sorted = [];

    let i = 0;   // Left pointer
    let j = 0;  // Right pointer

    // Dono arrays ko compare karo
    while (i < left.length && j < right.length) {

        if (left[i] <= right[j]) {
            sorted.push(left[i]);
            i++;

        } else {
            sorted.push(right[j]);
            j++;

        }
    }


    return sorted.concat(left.slice(i)).concat(right.slice(j));    // Jo elements bach gaye unhe add karo
}


/*

                                                         Step 1


                      function mergeSort(arr)
                      
                      Ye Merge Sort function hai.
                      
                      Input
                      
                      [8,3,5,4]
                      
                      Output
                      
                      [3,4,5,8]


                     Step 2 (Base Case) =>


                      if (arr.length <= 1) {
                          return arr;
                      }
                      
                      Agar array me sirf ek element hai
                      
                             [8]
                      
                             ya
                      
                             []
                      
                      to woh already sorted hai.
                      
                      Isliye usko wahi return kar dete hain.
                      
                      Example
                             mergeSort([5])
                      
                            ↓
                            
                            return [5]

                        
                     Step 3 =>


                             const mid = Math.floor(arr.length / 2);
                      
                      Middle index nikalte hain.
                      
                      Example
                      
                              [8,3,5,4]
                              
                              Length = 4
                              
                              mid = 2
                      
                      Visualization
                      
                      Index
                      
                      0 1 2 3
                      
                      8 3 5 4
                          |
                         mid

                     Step 4 =>

                      const left = mergeSort(arr.slice(0, mid));
                      
                             slice(0, mid) ka matlab
                             
                             Start = 0
                             
                             End = mid (exclude)
                      
                      Example
                      
                            arr = [8,3,5,4]
                            
                            mid = 2
                            
                            arr.slice(0,2)
                      
                      Result
                      
                            [8,3]
                      
                      Fir
                      
                             mergeSort([8,3])
                      
                      dobara call hota hai.
                      
                      Isko Recursive Call bolte hain.
                      
                     Step 5 =>

                             const right = mergeSort(arr.slice(mid));
                      
                      Example
                      
                              arr.slice(2)
                      
                      Result
                      
                                [5,4]
                      
                      Fir
                      
                                 mergeSort([5,4])
                      
                      call hota hai.
                      
                      Visualization
                                        [8,3,5,4]
                                          /    \
                                     [8,3]    [5,4]


                      Step 6 =>


                      const sorted = [];
                      
                      Ye final sorted array hai.
                      
                      Initially
                      
                        []
                      
                      Isi me hum sorted values store karenge.
                      
                      Step 7 => 


                        let i = 0;
                        let j = 0;
                      
                      Ye pointers hain.
                      
                      Left Array
                      
                        [3,8]
                         ^
                         i
                      
                      Right Array
                      
                        [4,5]
                         ^
                         j


                      Step 8 =>


                      while(i < left.length && j < right.length)
                      
                      Jab tak dono arrays me elements hain tab tak compare karo.
                      
                      Example
                      
                      Left
                      
                        [3,8]
                      
                      Right
                      
                        [4,5]
                      
                      Compare
                      
                        3 vs 4


                      Step 9 =>


                       if(left[i] <= right[j])
                      
                      Agar Left wala chhota hai
                      
                        3 <= 4
                      
                        True
                      
                      To
                      
                      sorted.push(left[i]);
                      
                      Result
                      
                        [3]
                      
                      Pointer aage
                      
                        i++;
                      
                      Ab
                      
                      Left
                      
                        [3,8]
                           ^


                      Step 10 =>

                      
                      Ab compare
                      
                        8 vs 4
                      
                      Condition
                      
                        8 <= 4
                      
                      False
                      
                      To
                      
                        sorted.push(right[j]);
                      
                      Result
                      
                        [3,4]
                      
                      Pointer
                      
                        j++;
                      
                      Ab
                      
                        8 vs 5
                      
                      Again
                      
                      False
                      
                      Result
                      
                        [3,4,5]


                      Step 11 =>

                      
                      Loop khatam.
                      
                      Ab
                      
                      Left
                      
                        [8]
                      
                      Right
                      
                      Finished
                      
                      Ab
                      
                        return sorted
                        .concat(left.slice(i))
                        .concat(right.slice(j));
                        left.slice(i)
                      
                      Current
                      
                      Left
                      
                        [3,8]
                           ^
                      
                        i = 1
                        left.slice(1)
                      
                      Result
                      
                        [8]
                        right.slice(j)
                      
                      Current
                      
                      Right
                      
                        [4,5]
                              ^
                      
                      j = 2
                      right.slice(2)
                      
                      Result
                      
                      []
                      
                      Final
                      
                      sorted
                      
                      [3,4,5] + [8] + [] =  [3,4,5,8]
                    
                      
                      

*/ 


// ====================================================================
// Merge Sort By FreeCodeCamp =>

// ====================================================================

function mergeSort(array) {
  if (array.length <= 1) {
    return;
  }
  
  const middlePoint = Math.floor(array.length / 2);
  const leftPart = array.slice(0, middlePoint);
  const rightPart = array.slice(middlePoint);
  
  mergeSort(leftPart);
  mergeSort(rightPart);
  
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  let sortedIndex = 0;
  
  while (leftArrayIndex < leftPart.length && rightArrayIndex < rightPart.length) {
    if (leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
      array[sortedIndex] = leftPart[leftArrayIndex];
      leftArrayIndex += 1;
    } else {
      array[sortedIndex] = rightPart[rightArrayIndex];
      rightArrayIndex += 1;
    }
    sortedIndex += 1;
  }
  
  while (leftArrayIndex < leftPart.length) {
    array[sortedIndex] = leftPart[leftArrayIndex];
    leftArrayIndex += 1;
    sortedIndex += 1;
  }
  
  while (rightArrayIndex < rightPart.length) {
    array[sortedIndex] = rightPart[rightArrayIndex];
    rightArrayIndex += 1;
    sortedIndex += 1;
  }
}

const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
console.log('Unsorted array: ');
console.log(numbers);
mergeSort(numbers);


// ============================================================

// Another Example of Merge Sort =>

// =============================================================

// Ques 5: Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function mergeSort(arr) {
  // O(log n)
  // base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  // O(n)
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

// Time Complexity - O(nlog n)
// Space Complexity - O(n)
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));