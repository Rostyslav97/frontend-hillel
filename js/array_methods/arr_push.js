const arr = [1, 2, 3, 4, 5];

// arr.push('Dog')
// arr.push('Cat', 'Giraffe', 'Coffee')
// const newLength = arr.push(6)


const push = (arr, ...els) => {
    for(const el of els) {
        arr[arr.length] = el;
    }
    return arr.length;
}

push(arr, 10, 20, 30)
console.log(arr)
