let count = 0;
count += 1;
//* count = "문자열" 에러가 나는 구문 (number에는 string 구문이 들어갈수 없다.)

const message: string = "nilue";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "nilue"];

//* messages.push(1) 에러가 나는 구문

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
//* color = 'green' 에러 구문 color에 선언된 색에 green은 존재 하지 않는다