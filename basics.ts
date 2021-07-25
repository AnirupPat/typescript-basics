// Primitives

let age: number; // written in lower case..
// if we write Number then it denotes object
age = 30;

let userName: string;
userName = 'Anirup';

let isCoder: boolean;
isCoder = true;

// more complex types
let hobbies: string[];
hobbies = ['Cricket', 'Badminton'];


let person: {
    name: string,
    age: number
};
person = {
    name: 'Anirup',
    age: 30
};

let people: typeof person[];
people = [{
    name: 'Anirup',
    age: 30
}];


// type inference
let course = 'TypeScript';
//course = 1234; will throw an error, as course will implicitely take string type
// if we are declaring and defining a variable at the same time then dont need to specify the types.

//  but if we want a variable to have multiple types then we should go for union types (for more flexible types)
let course2: string | number = "Java";
course2 = 12345;


// Type alias (we can define types and use it accross)
type Person = {
    name: string,
    age: number
};

let person1: Person = {
    name: 'Anirup',
    age: 30
};


// Function and types
// Function defines the function parameters and gives a return type as well
// though we dont need to set it explicitely unless we need to
function add(a: number, b: number): number {
    return a + b;
}

// if the function diesnt return anything then it has a void return type.
// void is basically comparable to null or undefined but is used to functions..
function print(value: any) {
    console.log(value);
}


// Generics

function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]
updatedArray[0].split('');

// here, updatedArray is of type any
// instead, we can start to use Generics here

function insertAtBeginning2<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray2 = ['a','b','c'];
const updatedArray2 = insertAtBeginning2(demoArray2, 'd'); //[-1,1,2,3]
updatedArray2[0].split('');


