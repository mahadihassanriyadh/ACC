const hello_world: string = "Hello World!";
console.log(hello_world);

function getLowerCase(my_string: string){
    return my_string.toLocaleLowerCase();
}

console.log(getLowerCase('Hello'));

// the below line would give an error because we have already predefined the type of the parameter of the function as a string
// console.log(getLowerCase(25)); 

const my_num: number = 225;



// Function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(3, 4);



// Arrow Function
const subtract = (num1: number, num2: number): number => { 
    return num1 - num2;
}

subtract(25, 15);



// Array
const arr: number[] = [2, 3, 5, 6];
const arr2: string[] = ["abir", "roni", "rupok", "himel"];



// type variable declaration
type numberOrString = number | string
const id1: numberOrString = "LC-582315";
const id2: numberOrString = 21201425;



// Object
const person: {
    name: string,
    age: number,
    hobby: string,
} = {
    name: "Tamim",
    age: 25,
    hobby: "Programming",
};



// Interface
interface IPerson {
    name: string,
    age: number,
    hobby: string,
    // to make a type variable optional
    work?: string,  
};

const person2: IPerson = {
    name: "Mridha",
    age: 56,
    hobby: "Football",
};




// Enums
enum Colors {
    color1 = "#ededed",
    color2 = "#fbstrh",
    color3 = "#000000"
}

console.log(Colors.color3)