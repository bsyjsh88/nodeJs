// 방법1
// 하나의 모듈 파일에 하나의 모듈 만들기(es6)
// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }

// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;
// const multiply = (x, y) => x * y; // 화살표함수는 한줄로 쓸때 {return} 생략가능

// function 키워드를 사용할때는 module.exports의 위치가상관없지만
// 화살표 함수로 작성시 module.exports는 항상 화살표 함수 아래에 위치해야함


// es6문법에서는 화살표 함수로해도 export위치가 상관없음
// 이유 : es6는 모든 export와 import문이 로드 시점에 한번에 평가되고 처리되기 때문에
// 함수선언이나 변수선언의 위치와 무관하게 올바르게 작동함.
// export { add, subtract, multiply };// 여기가 변경

// 방법2
// export function add(x, y){
//     return x + y;
// }
// export function subtract(x, y) {
//     return x - y;
// }
// export function multiply(x, y) {
//     return x * y;
// }

// 방법2 화살표버전
// export const add = (x,y) => x + y;
// export const subtract = (x,y) => x - y;
// export const multiply = (x,y) => x * y;

// 방법3(한번에 내보내기)
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y; 
// 하나의 객체 변수로!
const values = {add, subtract, multiply};
export default values;