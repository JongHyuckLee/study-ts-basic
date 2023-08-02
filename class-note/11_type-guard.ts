interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}

function introduce():Developer | Person {
    return {
        name: 'jonghyuk',
        age: 33,
        skill: 'react'
    }
}

const person = introduce();
console.log(person);
if ((person as Developer).skill) {
    const skill = (person as Developer).skill;
    console.log(skill);
} else if ((person as Person).age) {
    const age = (person as Person).age;
    console.log(age);
}

function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(person)) {
    person.skill
} else {
    person.name;
}



interface Ironman {
    name: string;
}
class Avengers {
    name: string;
}

let i: Ironman;
i = new Avengers();