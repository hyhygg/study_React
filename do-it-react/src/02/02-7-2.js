// ES5 문법 - 구조 분해 사용 방법
var list = [0, 1];
var item1 = list[0];  // 배열의 인덱스를 사용하여 변수에 할당
var item2 = list[1];
var item3 = list[2] || -1;  // || 연산자를 이용하여 배열의 해당 인덱스에 값이 없으면 기본값으로 할당
var temp = item2;   // 배열의 두 값 치환
item2 = item1;
item1 = temp;
var obj = {
    key1: 'one',
    key2: 'two',
};
var key1 = obj.key1;  // 객체의 키값을 변수에 할당
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';  // || 연산자를 이용하여 객체의 해당 키값이 없으면 기본값으로 할당
var newKey1 = obj.key1;  // 객체의 키값을 다른 변수에 할당

// ES6 문법 - 구조 분해와 구조 할당 사용 방법
var list = [0, 1];
var [
    item1,  // 대괄호 블록([]) 사이에 추출하고자 하는 값의 인덱스 위치에 변수 배치
    item2,
    item3 = -1,  // 선언 부호(=)를 변수와 함께 사용하여 기본값 할당
] = list;
[item2, item1] = [item1, item2];  // 인덱스 위치에 각각 변경할 변수를 교차 배치 - 배열의 두 값 치환
var obj = {
    key1: 'one',
    key2: 'two',
};
var {
    key1: newKey1,  // 콜론(:) 부호와 함게 새 변수명 선언 - 추출된 키값을 다른 변수명으로 할당
    key2,   // 객체의 키값을 변수에 할당
    key3 = 'default key3 value',  // 선언 부호(=)를 변수와 함께 사용하여 기본값 할당
} = obj;

var [item1, ...otherItems] = [0, 1, 2];  // 구조 할당 표현식을 이용하여 배열에서 첫 위치의 인덱스값 item1을 추출, 나머지 값을 전개 연산자로 otherItems에 할당
var { key1, ...others } = { key1: 'one', key2: 'two' };  // 객체의 key 1 값을 추출, 나머지 키값을 포함한 새 객체를 others에 할당
// otherItems = [1, 2]
// others = { key2: 'two' }