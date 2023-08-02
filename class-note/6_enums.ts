enum Shoes {
    Nike = '나이키' ,
    Adidas = '아디다스',
    NewBalance = '뉴발란'
}

const myShoes = Shoes.Nike;
console.log(Shoes);


enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
         console.log('정답입니다;');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion('yes');
askQuestion('예스');
askQuestion('Y');
askQuestion(Answer.Yes);