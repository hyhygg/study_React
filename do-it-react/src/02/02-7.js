// ES5 문법 - 객체 확장 표현식 사용 방법
var x = 0;
var y = 0;
var obj = { x: x, y: y };  // obj에 대입한 객체를 보면 키 이름이 키값과 동일(x, y)
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';  // 연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성
var obj2 = {  // 객체에 함수를 추가할 때는 변수에 함수를 할당
    x: x,
    methodA: function() { console.log('method A'); },
    methodB: function() { return 0; },
}

// ES6 문법 - 객체 확장 표현식 사용 방법
var x = 0;
var y = 0;
var obj = { x, y };  // 객체의 변수를 선언할 때 키값을 생략하면 자동으로 키의 이름으로 키값을 지정
var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString]: 'some value',  // 객체 생성 블록 안에 대괄호([])를 사용하여 표현식 작성하면 추가하여 계산된 키값 생성
};
var obj2 = {
    x,
    methodA() { console.log('method A'); },  // function 키워드를 생략하여 함수 선언
    methodB() { return 0; },
};