// ==================================================
// Q-1
// ==================================================

function findIndexes(str, word) {
    let indexes = [];
    let pos = str.indexOf(word);

    while (pos !== -1) {
        indexes.push(pos);
        pos = str.indexOf(word, pos + 1);
    }

    return indexes;
}

let text = "the cat and the dog chased the cat";
let word = "cat";

let result = findIndexes(text, word);

console.log("String:", text);
console.log("Word:", word);
console.log("Index positions:", result);


// ==================================================
// Q-2
// ==================================================

function linearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

let arr = [10, 25, 30, 45, 50];
let element = 30;

let index = linearSearch(arr, element);

if (index !== -1) {
    console.log("Element found at index:", index);
} else {
    console.log("Element not found in the array");
}


// ==================================================
// Q-3
// ==================================================

function quickSort(arr, left, right) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

let arr3 = [34, 7, 23, 32, 5, 62];
console.log("Original Array:", arr3);
quickSort(arr3, 0, arr3.length - 1);
console.log("Sorted Array:", arr3);


// ==================================================
// Q-4
// ==================================================

function mergeSort(arr4) {
    if (arr4.length <= 1) return arr4;

    let mid = Math.floor(arr4.length / 2);

    let left = arr4.slice(0, mid);
    let right = arr4.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr4 = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arr4);
let sortedArray = mergeSort(arr4);
console.log("Sorted Array:", sortedArray);


// ==================================================
// Q-5
// ==================================================

function heapSort(arr5) {
    let n = arr5.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr5, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr5[0], arr5[i]] = [arr5[i], arr5[0]];
        heapify(arr5, i, 0);
    }

    return arr5;
}

function heapify(arr5, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr5[left] > arr5[largest]) largest = left;
    if (right < n && arr5[right] > arr5[largest]) largest = right;

    if (largest !== i) {
        [arr5[i], arr5[largest]] = [arr5[largest], arr5[i]];
        heapify(arr5, n, largest);
    }
}

let arr5 = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arr5);
heapSort(arr5);
console.log("Sorted Array:", arr5);


// ==================================================
// Q-6
// ==================================================

function insertionSort(arr6) {
    let n = arr6.length;

    for (let i = 1; i < n; i++) {
        let key = arr6[i];
        let j = i - 1;

        while (j >= 0 && arr6[j] > key) {
            arr6[j + 1] = arr6[j];
            j--;
        }

        arr6[j + 1] = key;
    }

    return arr6;
}

let arr6 = [12, 11, 13, 5, 6];
console.log("Original Array:", arr6);
insertionSort(arr6);
console.log("Sorted Array:", arr6);


// ==================================================
// Q-7
// ==================================================

function bubbleSort(arr7) {
    let n = arr7.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr7[j] > arr7[j + 1]) {
                let temp = arr7[j];
                arr7[j] = arr7[j + 1];
                arr7[j + 1] = temp;
            }
        }
    }

    return arr7;
}

let arr7 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", arr7);
bubbleSort(arr7);
console.log("Sorted Array:", arr7);


// ==================================================
// Q-8
// ==================================================

function sortString(str) {
    return str.split('').sort().join('');
}

let text8 = "javascript";
console.log("Original String:", text8);
console.log("Sorted String:", sortString(text8));


// ==================================================
// Q-9
// ==================================================

function isSorted(arr9) {
    for (let i = 0; i < arr9.length - 1; i++) {
        if (arr9[i] > arr9[i + 1]) return false;
    }
    return true;
}

let arr9 = [10, 20, 30, 40, 50];
console.log("Array:", arr9);
console.log(isSorted(arr9) ? "The array is sorted." : "The array is not sorted.");


// ==================================================
// Q-10
// ==================================================

function isNull(value) {
    return value === null;
}

console.log("Value1 is null:", isNull(null));
console.log("Value2 is null:", isNull(10));


// ==================================================
// Q-11
// ==================================================

function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

console.log(isNumber(25));
console.log(isNumber("Hello"));
console.log(isNumber(NaN));


// ==================================================
// Q-12
// ==================================================

function isRegExp(value) {
    return value instanceof RegExp;
}

console.log(isRegExp(/abc/));
console.log(isRegExp("hello"));


// ==================================================
// Q-13
// ==================================================

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("Before:", student);
delete student.rollno;
console.log("After:", student);


// ==================================================
// Q-14
// ==================================================

var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false }
];

for (var i = 0; i < library.length; i++) {
    console.log(library[i]);
}


// ==================================================
// Q-15
// ==================================================

function showTime() {
    let now = new Date();
    console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}

setInterval(showTime, 1000);


// ==================================================
// Q-16
// ==================================================

function parseURL(url) {
    let urlObj = new URL(url);

    console.log("Protocol:", urlObj.protocol);
    console.log("Host:", urlObj.host);
    console.log("Path:", urlObj.pathname);
}

parseURL("https://www.example.com:8080/path/page.html?name=John&id=101#section1");


// ==================================================
// Q-17
// ==================================================

function stringToArray(str) {
    return str.split(" ");
}

console.log(stringToArray("JavaScript is powerful"));


// ==================================================
// Q-18
// ==================================================

function swapCase(str) {
    let result = "";

    for (let ch of str) {
        result += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
    }

    return result;
}

console.log(swapCase("JavaScript Programming"));


// ==================================================
// Q-19
// ==================================================

function timeConvert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    return `${num} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
}

console.log(timeConvert(200));


// ==================================================
// Q-20
// ==================================================

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) { this.items.push(element); }
    pop() { return this.items.pop(); }
    contains(element) { return this.items.includes(element); }

    display() { console.log(this.items); }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
console.log(stack.contains(30));


// ==================================================
// Q-21
// ==================================================

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }
}

let list = new LinkedList();
console.log(list.isEmpty());
list.head = new Node(10);
console.log(list.isEmpty());


// ==================================================
// Q-22
// ==================================================

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() { return this.width * this.height; }
    perimeter() { return 2 * (this.width + this.height); }
}

let rect = new Rectangle(10, 5);
console.log(rect.area());
console.log(rect.perimeter());


// ==================================================
// Q-23
// ==================================================
/*
<!DOCTYPE html>
<html>
<head>
<title>Image Slideshow</title>
</head>
<body>

<h2>Image Slideshow</h2>

<img id="slide" src="image1.jpg" width="400" height="250">

<br><br>

<button onclick="prevImage()">Previous</button>
<button onclick="nextImage()">Next</button>

<script>
*/

// Image list
let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let index = 0;

// Show next image
function nextImage() {
    index++;
    if(index >= images.length) {
        index = 0;
    }
    document.getElementById("slide").src = images[index];
}

// Show previous image
function prevImage() {
    index--;
    if(index < 0) {
        index = images.length - 1;
    }
    document.getElementById("slide").src = images[index];
}

/*
</script>

</body>
</html>
*/


// ==================================================
// Q-24
// ==================================================

// JavaScript program to handle SyntaxError while parsing JSON

let jsonString = '{ "name": "John", "age": 30, }'; // Invalid JSON (extra comma)

try {
    let data = JSON.parse(jsonString);  // Attempt to parse JSON
    console.log("Parsed Data:", data);
}
catch (error) {
    if (error instanceof SyntaxError) {
        console.log("SyntaxError caught while parsing JSON:");
        console.log(error.message);
    } else {
        console.log("An unexpected error occurred:", error);
    }
}


// ==================================================
// Q-25
// ==================================================
/*
<!DOCTYPE html>
<html>
<head>
<title>Redirect Example</title>

<script>
*/
// Function to redirect to another page
function redirectPage() {
    window.location.href = "https://www.google.com";
}
/*
</script>

</head>
<body>

<h2>Click the button to redirect</h2>

<button onclick="redirectPage()">Go to Google</button>

</body>
</html>
*/