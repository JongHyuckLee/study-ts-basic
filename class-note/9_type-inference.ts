let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}


interface Dropdown<T> {
    value: T;
    title: string;
}

interface  DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<number> = {
    title: 'title',
    description: 'description',
    value: 'value',
    tag: 'tag'
};
const shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

const arr = [1, 2, 3, true, 'a'];