// ES5 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]]; // 배열의 각 요소 추출 > 새로운 배열 만듬
var combined = array1.concat(array2);
var combined = [].concat(array1, array2); // concat() 함수로 두 배열 합침
var first = array1[0];
var second = array1[1]; // index로 배열 요소를 추출
var three = array1[2] || 'empty'; // || 연산자와 조합 > 추출할 배열 요소가 없을 때 기본값 지정
function func() {
    var args = Array.prototype.slice.call(this, arguments); // 특수 변수(arguments)를 사용 > 함수 내 인자 항목들을 배열로 변환(func(a,b,c) > args[0]은 a, args[1]은 b, args[2]는 c 각각 할당)
    var first = args[0];
    var others = args.slice(1, args.length); // 인덱스 범위에 해당하는 배열 요소 추출 (args.length: 전체 배열의 길이 > 인덱스 범위 1번(두 번째 항목)부터 마지막 항목까지 추출)
}

// ES6 문법('전개 연산자')
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2]; // 두 배열 항목을 전개 연산자로 합침
// 결과 : combined = ['one','two','three','four'];
const [ first, second, three = 'empty', ...others ] = array1;
// 결과 : first = 'one', second = 'two', three='empty', ohters=[]
// 올바르지 못한 예 (전개 연산자를 배열 표현식 없이 사용한 잘못된 예제)
// var wrongArr = ...array1;
function func(...args) { var[first, ...others] = args; } // 함수 인자 배열을 args 변수에 할당