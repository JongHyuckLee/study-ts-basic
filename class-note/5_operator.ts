// function logMessage (value:string | number) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

let person: string | number | boolean;

function logMessage (value:string | number) {
    if (typeof value === 'number') {
        // number type에서 정의된 속성들을 바로 사용할 수 있음
        value.toFixed();
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        // string type에 정의된 속성들을 바로 사용할 수 있음.
        value.toString();
    }
}


interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}

// function askSomeone (someone: Developer | Person): void {
//     someone.name
// }
// askSomeone({name: '디벨로퍼2', age:32});
// askSomeone({name: '디벨로퍼1', skill: '웹개발'});

let person1: string | number | boolean;
let person2: string & number & boolean;
function askSomeone (someone: Developer & Person): void {
    someone.name;
    someone.age;
    someone.skill;
}
askSomeone({name: '디벨로퍼', skill: '웹개발', age:32});

