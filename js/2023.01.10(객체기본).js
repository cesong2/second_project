// 배열 - 객체
let arrayPersonInfo = ['제임스',28, '남자']

//딕셔너리 - 객체
let personalInfo ={'name': '제임스','age': 28, 'sex': 'male'}
console.log(personalnfo['name'])
//=제임스 결과받음

let maria1 = {name: '마리아', age:24, sex:'female'}
console.log(maria.age)

// key 값을 변수(문자열)로 받는 경우
const key ='age';
// maria.key 와 같이 사용하면 안됨
console.log(maria[key], maria['gender'+'der'])

//for 반복문을 사용해서 key value 가져오기
const maria = {name: '마리아', age:24, sex:'female'}
for (let key in maria){console.log(key, maria[key])}

const james = {'name': '제임스','age': 28, 'sex': 'male'}
const persons = [maria, james];
for (let person of persons) {for (let key in person){console.log(key,person[key])}}

// 객체 안에 사용되는 함수를 (method)라고함
// 객체 : 속성(property, attribute) + method

const maria2={name: '마리아', age: 24, sex:'female',intro : function(){console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.sex}입니다.`)}}
console.log(maria2)
maria2.intro()
const james2={name:'제임스',age:28, sex:'male', intro : function(){console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.sex}입니다.`)}}
james2.intro()
// prototype - 옛날 javascript에서 제공하는 방법
//파이썬에서 Class를 만드는 방식과 유사
//예전 class 만들던방법 = 

function Person(name, age, sex){this.name = name; this.age = age; this.sex = sex; Person.prototype.intro = function(){console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.sex}입니다.`)}};
var james3 = new Person('세송',-1,'남자');
var maria3 = new Person('마리아',24,'여자')
james3.intro()
maria3.intro()
//요즘 클래스를 사용해서 객체를 찍어내는 틀을 만드는 방법 = 
class Person2{constructor(name,age,sex){this.name = name; this.age = age; this.sex = sex;}intro(){console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.sex}입니다.`)}}

james4 = new Person2('세송',-1,'남자');
maria4 = new Person2('마리아',24,'여자');
console.log(james4);
console.log(maria4);
james4.intro();
maria4.intro();

// 상속(Inheritance), 오버라이딩(overriding)
class Person3{constructor(name='cesong',age=24,sex='male'){this.name = name; this.age = age; this.sex = sex;}toString(){return `저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.sex}입니다.`}}
const hong = new Person3();
console.log(hong.toString());

class Student extends Person3{constructor(name,age,sex,scholarship=100000){super(name,age,sex);this.scholarship = scholarship;}toString(){return super.toString() + `\n 장학금은${this.scholarship}원을 받았습니다.`}}
//
const student = new Student ('성춘향', 17, '여자',200000);
console.log(student.toString());
// 담당부서 dept로 만들고 tostring에 추가로 '담당반은 JS-B반 입니다.'식으로 출력되도록
// class answer{constructor(name,age,sex,class1){this.name = name; this.age= age; this.sex = sex; this.class1=class1;}intro(){console.log(`담당반은 ${this.class1}입니다.`)}}
// console.log(ans);
// ans.intro()
// 선생님답
// class Teacher extends person3{constructor(name,age,gender,dept){super(name,age,gender);this.dept = dept;}toString(){return super.toString() + (`\n 담당반은 ${tihs.dept}입니다.`)}}
// const teacher = new Techer['제임스',40,'남자','JS-B']
// console.log(teacher.toString())

// //문제: 장바구니
// //product 클래스 정의 (*속성 : 이름, 가격, 메소드 tostring())
// //5가지 상품을 만듦(instance) ['마우스':3000,'키보드':20000,'usb 32g':15000, '모니터':200000,'헤드셋':35000] 반복문으로 가져와서 추가, 합 추가 push
// class product{constructor(name, price){this.name = name; this.price=price;} toString(){return `제품명 ${this.name}, \t가격 ${this.price}`}}
// const mouse = new product('마우스',3000);
// const keyboard = new product('키보드',20000);
// const usb = new product('usb 32g',15000);
// const monitor = new product('모니터',200000);
// const headset = new product('헤드셋',35000);
// //
// // const anshin = {'마우스':3000,'키보드':20000,'usb 32g':15000, '모니터':200000,'헤드셋':35000}
// // const instance = [anshin]
// // for (let anshin of instance){for(let key in anshin){console.log(key,anshin[key])}}
// //반복문으로 가져오기

// //Cart 클래스 정의 (속성: 상품,수량,메소드:add(), sum())
// //Cart에 물건을 다 담은 후 총 가격을 구하세요
// class Cart{constructor(){this.Cart = [];}
// add(product, quantity){if (quantity <=0)return; this.Cart.push({product, quantity})}
// sum(){let totalprice = 0; for (let item of this.Cart){totalprice += item.quantity * item.product.price}return totalprice;}
// toString(){let result = ''; for (let item of this.Cart){result = item.product.toString() + `\t 수량 : ${item.quantity}\n`}result +=`합계: ${this.sum()}`;return result;}}
// let cart = new Cart();
// cart.add(mouse,4);
// cart.add(usb,10);
// cart.add(monitor,2);
// console.log(cart.toString())

//
// 문제: 장바구니 
// Product 클래스 정의 (속성: 이름, 가격, 메소드 toString())
//5가지 상품을 만듦(instance)
// toString return값이 제품명: 000, 가격 : 0000 

class Product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    toSrting() {
        return `제품명 : ${this.name}, \t가격: ${this.price}`;
    }
}
const mouse = new Product('마우스', 30000);
const keyboard = new Product('키보드', 20000);
const usb = new Product('USB 32G', 15000);
const monitor = new Product('모니터', 200000);
const headset = new Product('헤드셋', 35000);
console.log(mouse.toSrting());

// Cart 클래스 정의(속성 : 상품, 수량, 메소드 : add(), sum())
// Cart에 물건을 다 담은 후 총 가격을 구하세요

class Cart{
    constructor (){
        this.cart = [];
    }
    add(product, quantity) {
        if (quantity <= 0)
            return;
        this.cart.push({product, quantity})
    }
    sum () {
        let totalPrice = 0;
        for (let item of this.cart) {
            totalPrice += item.quantity * item.product.price
        }
        return totalPrice;
    }
    toSrting() {
        let result = '';
        for (let item of this.cart) {
            result += item.product.toSrting() + `\t 수량 : ${item.quantity}\n`
        }
        result += `합계 : ${this.sum()}`;
        return result;
        }
}
let cart = new Cart();
cart.add(mouse, 4);
cart.add(usb, 10);
cart.add(monitor, 2);
console.log(cart.toSrting());








































