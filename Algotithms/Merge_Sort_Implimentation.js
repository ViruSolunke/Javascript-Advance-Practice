function mergeSort(arr) {

    // Base Case
    if (arr.length <= 1) {
        return arr;
    }

    // Middle Index
    const mid = Math.floor(arr.length / 2);

    // Left Half ko recursively sort karo
    const left = mergeSort(arr.slice(0, mid));

    // Right Half ko recursively sort karo
    const right = mergeSort(arr.slice(mid));

    // Final Sorted Array
    const sorted = [];

    // Left pointer
    let i = 0;

    // Right pointer
    let j = 0;

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

    // Jo elements bach gaye unhe add karo
    return sorted
        .concat(left.slice(i))
        .concat(right.slice(j));
}


/*

Step 1
function mergeSort(arr)

Ye Merge Sort function hai.

Input

[8,3,5,4]

Output

[3,4,5,8]
Step 2 (Base Case)
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
Step 3
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
Step 4
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

Step 5
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
Step 6
const sorted = [];

Ye final sorted array hai.

Initially

[]

Isi me hum sorted values store karenge.

Step 7
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
Step 8
while(i < left.length && j < right.length)

Jab tak dono arrays me elements hain tab tak compare karo.

Example

Left

[3,8]

Right

[4,5]

Compare

3 vs 4
Step 9
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
Step 10

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
Step 11

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

[3,4,5]

+

[8]

+

[]

=

[3,4,5,8]

*/ 