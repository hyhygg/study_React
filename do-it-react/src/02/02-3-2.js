// ES5 문법
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    one: objectOne.one, //  키에 해당하는 값 추출
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo); // 객체 내장 함수 assign()을 사용하여 두 객체 병합. assign()의 첫번째 인자는 결과로 반환할 객체({}), 나머지 인자는 병합할 객체
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1 }
var combined = Object.assign({}, objectTwo, objectOne); // 중복되는 키값이 있으면 이후에 전달된 객체의 값으로 덮어씀
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0 }
var others = Object.assign({}. combined);
delete others.other; // 삭제 연산자(delete)를 사용하여 특정 데이터를 추출한 다음 새로운 객체를 만듬
// other = { one: 1, two: 2, three: 3, four: 4 }

// ES6 문법
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    ...objectOne,   // 두 객체를 병합할 때 중복된 키값들은 마지막에 사용한 객체의 값으로 덮어씀
    ...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1 }
var combined = {
    ...objectTwo,
    ...objectOne,    // 두 객체를 병합할 때 중복된 키값들은 마지막에 사용한 객체의 값으로 덮어씀
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0 }
var { other, ...others } = combined;    // 객체에서 특정값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당
// other = { one: 1, two: 2, three: 3, four: 4 }

