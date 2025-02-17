const myURL = new URL("http://localhost.com:8000/users?query=001#hash")

// 속성
console.log(myURL.href);
console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams.get('query'));
myURL.searchParams.append("newParam", "kdt");
console.log(myURL.search);
// 메서드
console.log(myURL.toString());
const query = myURL.search
const param = new URLSearchParams(query);
console.log(param.get('newParam'));
// 삽입
param.set('hello', 'world');
console.log(param.toString());
// 삭제
param.delete("newParam");
console.log(param.toString());