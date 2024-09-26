// Constant Time 0(1)
function constantTime(arr) {
    return arr[0]; //Always takes the same time to access the first element
}

// O(log n) - Logarithmic Time
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) low = mid + 1;
    }
    return -1; //Target not found
}

// O(n) Linear Time - the function iterates through each element once.
function linearTime(arr) {
    arr.forEach(el => {
        console.log(el);
    })
}

// O(n log n) - Lineararithemtic Time
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeSort(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice[j]);
}

// O(n*) Quadratic Time 
function quadraticTime(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    } 
}

// O(2^n) - Exponential Time
function subsets(arr) {
    if(arr.length === 0) return [[]];

    const rest = subsets(arr.slice(1));
    return rest.concat(rest.map(subset => [arr[0], ...subset]));
}

// O(n!) Factorial Time 
function permutations(arr) {
    if(arr.length === 0) return [[]];

    const results = [];
    arr.forEach((current, index) => {
        const rest = arr.slice(0, index).concat(arr.slice(index + 1));
        const perms = permutations(rest);
        perms.forEach(perm => {
            result.push([current].concat(perm));
        });
    });
    return result;
}