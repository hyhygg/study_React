// ES5 문법
function add(first, second) {
    return first + second;
}
// typeof add === 'function'
var add = function(first, second) {
    return first + second;
}
// typeof add === 'function'


// ES6 문법
var add = (first, second) => {  // 기존 함수 표현식을 화살표 함수로 변경
    return first + second;
};
var add = (first, second) => first + second;   // 본문 블록이 비어 있고 결괏값을 바로 반환하는 경우 : 중괄호 생략 => 반환 표현식
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });  // 반환값이 객체인 경우 : 괄호로 결괏값을 감싸 표현


function addNumber(num) {  // 함수 표현식을 반환
    return function (value) {
        return num + value;
    };
}
var addNumber = num => value => num + value; // 화살표 함수를 사용하여 간결한 코드로 함수 반환


class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function(first, second) {
            return this.value + first + second;
        }.bind(this);
        /* addThis2()함수 : this를 bind() 함수에 전달하여 this 범위를 유지 */
        var addThis3 = (first, second) => this.value + first + second;
        /* addThis3()함수 : 화살표 함수로 이 과정 생략 */
    }
}

