class Person {
    constructor (name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

new Person('developer', 33);