//Number
let number = 273.1
let num = Number('273.1')
console.log(number==num) // 두가지 동일 True값으로나옴

let obj = new Number('283.1');
console.log(typeof(number),typeof(num),typeof(obj))
let pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());//지수형태
console.log(pi.toFixed());//소수점 이하 자리수가 2개
console.log(pi.toPrecision());//유효숫자가 6개
console.log(Math.pow(2, 53)-1);
//String
let hello = '안녕하세요'
let hellofromconstructor = new String('안녕하세요?')//생성자 함수로 생성
console.log(hello.length); //6글자
//method
console.log(hello.charAt(1)); //hello[1]
console.log(hello.concat('여러분!!!')); //hello + '여러분!!!
console.log(hello.indexOf('하'),hello.indexOf('한')); //2, -1

//문제
//디지털 시계 (00:00 ~23:59) 가 있다.
//디지털 시계에서 3이라는 숫자가 표시되는 시간은 하루에 총 몇초인가?
var totalSec = 0;
for (var h = 0; h < 24; ++h) {
    for (var m = 0; m < 60; ++m) {
        if (Math.floor(h / 10) === 3 || h % 10 === 3 || Math.floor(m / 10) === 3 || m % 10 === 3) {
            totalSec += 60;
        }
    }
}
console.log("total seconds: " + totalSec);
//정규 표현식 (regular Expression)
let sample = 'A quick brown fox안녕하세요 over the lazy dog.'
let newstr = sample.replace(/[A-Z]/,' ');
console.log(newstr) 
newstr = sample.replace(/r/g,'R');//g는 global의 약자 전체 찾기기능
newstr = sample.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'')//한글 삭제

let str = 'Apple, Banana, Kiwi';
console.log(str.slice(7,7+6)); //Banana(시작인덱스, 끝인덱스)
console.log(str.slice(7));//바나나, 키위 (시작인덱스: ~ 끝)
console.log(str.substring(7,13));//바나나(시작인덱스,끝인덱스)
const fruits = str.split(',');
console.log(fruits); // [Apple, banana, kiwi]
//문제
//1에서 1000까지 숫자중에서 0은 몇번 1은 몇번 ....9는 몇번 나오는지
// var total1= 0;
// for (let numt =0; num <=1000; ++num){for(let numh = 0; numh<=999 ++numh;){for(let numten = 0; numten<=99)}}
let numbers = '';
for (let i=1; i<=1000; ++i){numbers +=String(i);}//string으로 쭉 쓰여짐.
let obj1 = {}
for (let i = 0; i<10; ++i){obj1[String(i)] = numbers.split(String(i)).length-1}
console.log(obj1)

//Date 객체
let today = new Date();
console.log(today.toDateString());//날짜, 요일
console.log(today.toLocaleDateString());//Timezone을 반영한 현재시간
// 23-01-10 13:10:?
function mylocaltimeformat(Date){
    let year = String(Date.getFullYear()).substring(2);
    let month = String(Date.getMonth() + 1);
    month = month.length ==1 ? '0'+month : month;
    let day = `${Date.getDate() < 10 ? '0'+Date.getDate() : Date.getDate()}`;
    let hour = Date.getHours() <10 ? '0'+Date.getHours() : Date.getHours;
    let minuit = Date.getMinutes() <10 ? '0'+Date.getMinutes() : Date.getMinutes;
    let second = Date.getSeconds() < 10 ? '0'+Date.getSeconds() : Date.getSeconds;
    return `${year}-${month}-${day} ${hour}:${minuit}:${second}`
}
console.log(mylocaltimeformat(today))

console.log(today.getDateString()+today.toLocaleDateString());

//문자열로 생성
const strData = new Date('2022-09-14');
console.log(mylocaltimeformat(strDate));
//시간 요소로 생성
const elementDate = new Date(2022, 9-1, 14, 9, 50); //월은 1을 빼줘야함
console.log(elementDate);
console.log(mylocaltimeformat(elementDate));

//시간 간격(수능 날짜 d-day)
const examDay = new Date('2023-11-16');
today = new Date('2023-01-10');
const diff = examDay.getTime() - today.getTime();//밀리초
const dDay = diff/(1000*60*60*24);
console.log(`오늘은 수능 D-${dDay}일 전입니다.`)

//Array 생성
const car = ['Ssab', 'Volvo', 'BMW']
const persons = new Array('James', 'Maria') //Array 가 객체이므로 생성자 합

//Array 속성
console.log(car.length, persons.length);
console.log(car[car.length-1]);
//배열 합치기
console.log(car.concat(persons));
console.log(car +persons);
console.log([car, persons])

//문자열만들기
console.log(car.join(' l '));

//마지막 요소 제거 (pop) - 배열이 변함
let car1 = car.pop();
console.log(car1);
//마지막 요소 추가 (push) -배열이 변함
car.push('Benz');
console.log(car)
//배열의 요소 순서를 뒤집기 (reverse) -  배열이 변함
console.log(car.reverse());
console.log(car);
//배열의 요소를 정렬(sort) - 배열이 변함
console.log(car.sort());

