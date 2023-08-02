interface User {
    age: number;
    name: string;
}

let seho: User = {
    age: 33,
    name: '세호'
}

function getUser (user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100
};

getUser(capt);


interface SumFunction {
    (a: number, b: number): number;
}


let sum : SumFunction;
sum = function (a: number, b: number) {
    return a + b;
}


interface StringArray {
    [index: number]: string
}
const arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'


interface StringRegxDictionary {
    [key: string]: RegExp
}

const obj : StringRegxDictionary= {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{

    language: string;
}

const person: Developer = {
    language: 'ts',
    age: 33,
    name: '종혁'
}