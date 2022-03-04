"use strict";
const hello_world = "Hello World!";
console.log(hello_world);
function getLowerCase(my_string) {
    return my_string.toLocaleLowerCase();
}
console.log(getLowerCase('Hello'));
// the below line would give an error because we have already predefined the type of the parameter of the function as a string
// console.log(getLowerCase(25)); 
const my_num = 225;
// Function
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
// Arrow Function
const subtract = (num1, num2) => {
    return num1 - num2;
};
subtract(25, 15);
// Array
const arr = [2, 3, 5, 6];
const arr2 = ["abir", "roni", "rupok", "himel"];
const id1 = "LC-582315";
const id2 = 21201425;
// Object
const person = {
    name: "Tamim",
    age: 25,
    hobby: "Programming",
};
;
const person2 = {
    name: "Mridha",
    age: 56,
    hobby: "Football",
};
const person3 = {
    name: "Mezba",
    age: 25,
    hobby: "Cooking",
    work: "Salesman",
};
// const personArray: IPerson[] = [
//     person2,
//     person3,
// ];
const personArray = [
    person2,
    person3,
];
// Enums
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#fbstrh";
    Colors["color3"] = "#000000";
})(Colors || (Colors = {}));
console.log(Colors.color3);
// NUMERIC Enums
// enum has the feature of auto incrementation, in the code below, down will have the value 2, left will have the value 3 and so on.
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
;
// if we do not declare any value at first the value will start from 0. In the below code up will have the value 0 and down will have the value 1 and so on.
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 0] = "up";
    Direction2[Direction2["down"] = 1] = "down";
    Direction2[Direction2["left"] = 2] = "left";
    Direction2[Direction2["right"] = 3] = "right";
})(Direction2 || (Direction2 = {}));
;
console.log(Direction1.right, Direction2.down);
// Using enum
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    // if a function does not return any value then you can specify void as return type.
    console.log(recipient, message);
}
respond("Riyadh", UserResponse.Yes);
