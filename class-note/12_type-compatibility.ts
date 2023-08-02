interface Developer {
    name: string;
    skill: string;
}
// interface Person {
//     name: string;
// }
class Person {
    name: string;
    skill: string;
}

let developer: Developer;
let person: Person;
developer = new Person();



let add = function (a: number) {

}
let sum = function (a: number, b: number) {

}
sum = add
add = sum;


interface Empty<T> {

}
interface NotEmpty<T> {
    data: T;
}

let empty1: Empty<string>;
let empty2: Empty<string>;
empty1 = empty2;
empty2 = empty1;

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
