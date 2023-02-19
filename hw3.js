// let str = "";
// for (let i = 1; i < 64; i ++) {
//     if (i % 9 == 0) {
//         str += "\n"
//     }
//     else if (i % 2 != 0) {
//         str += "#"
//     }
//     else {str += " "}
// }

// console.log(str);

//2
arr = [["a", 1], ["b", 2]];
obj = new Object();


//Легкий вариант)
// function fromArray(arr) {
//     return Object.fromEntries(arr)
// }

function fromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            obj[arr[i][0]] = arr[i][1]
        }
    }
    return obj;
}

console.log(fromArray(arr))