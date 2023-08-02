// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);
// logText(true);
// logText("log");

// function logText<T>(text:T):T {
//     console.log(text);
//     return text;
// }
//
// logText("log");
// logText<string>("log");
// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }
//
// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }
// logText('a');
// logNumber(10)

// function logText(text: string | number) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }
//  logText('a').split();
// logText(10);

function logText<T>(text: T):T {
    console.log(text);
    return text;
}
const str = logText<string>('log');
str.split('');

const login = logText<boolean>(true);

// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<number> = {
    value: 10,
    selected: false
};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]):T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     });
//     return text;
// }
// logTextLength(['hi', 'abc']);
// 'abc'.length

interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength('a');
logTextLength(10); // 숫자는 내부 속성으로 length를 포함하지 않기 때문에 에러 발생
logTextLength({length: 10});


interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoppingItemOption(10);
getShoppingItemOption<string>('a');

getShoppingItemOption(sto)