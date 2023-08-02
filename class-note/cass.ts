class Person {
    name: string;
    age: number;

    readonly log: string;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function logText<T>(text: T):T {
    return text;
}