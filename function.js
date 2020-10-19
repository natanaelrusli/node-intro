// Function without parameter
function hello1() {
    return "Hello World!"
}

hello2 = () => "Hello World!"

// Call the functions
console.log(hello1())
console.log(hello2())

// Function with parameter
function count1(num1,num2) {
    return num1 + num2
}

count2 = (num1,num2) => num1 + num2

// Call the functions
console.log(count1(1,2))
console.log(count2(3,4))