/* Javadhk 같은 경우는 if()문에서 
    if( num = 3) {}를 사용하면 
 즉, Single EQ(=)를 사용하면 syntax error가 난다
 
 하지만 다음과 같은 코드는 논리적으로 문제가 없다
 if( (num = method() ) == 3 )
*/
// while (reader =  buffer.readLine()) != null )
/* 
    while(true) {
        reader = buffer.readLine();
        if( reader == null) break;   
    }
*/

// js 에서는 다음과 같은 코드가 논리적으로는
// 문제가 될수 있지만 문법적으로는 정당하다
// if( (num = 5) == true)
if ((num = 5)) {
  console.log("같은 값");
}

// js에서는 숫자 0, false, null, undefined, NaN를 제외한
//  모든 것은 boolean에서 true로 취급된다
// if(값) 명령을 사용할때 값에 위에 나열한 type 데이터가 나타나면
// 논리적으로 false로 인식되고, 그외는 무조건 true이다

if (0) {
  console.log(true);
} else {
  console.log(false);
}

if (null) {
} else {
  console.log(false);
}

if ("") {
  console.log(true);
} else {
  console.log(false);
}

let num1 = 3;
let num2 = "3";

/*
두 값이 같은지 비교를 하는 연산자
 if, while 등에서 사용
동등연산자( == ) 
    자동으로 형변환이 발생한다
     0 == '0'을 비교하면 문자열 '0'을
     숫자 0으로 자동형변환을 해 버린다
     문자열과 숫자의 내용만 같으면 
     같은 것으로 간주하고 true 값이 된다 

    

일치연산자( === )
    무조건 자신의 형(type)을 유지하면서 비교한다
     0 === '0'을 비고하면
     1. 두값의 type이 일치하는지 비교
         같으면 true, 다르면 무조건 flase
     2.
*/
console.log(num1 == num2);
console.log(num1 === num2);

// 문자열 "" 과 문자열 "0"을 비교 => false
console.log("" == "0"); //false

// 문자열 ""을 숫자 0으로 변환하고,
// 0 == 0으로 비교 => true
console.log("" == 0);

// boolean true를
console.log("true" == true);
console.log("false" == false);

// 문자열 "0"을 숫자 0으로 변환
console.log("0" == false);

// 숫자 0은 당연히 false이므로 결과는 true
// 숫자 0이 false 냐 라고 물어봤기 때문에 = > 결과는 true가 산출됨
console.log(0 == false);

// 동등연산자에서는 null하고, undefined를
// null == undefined 할때만 true로 인식하고,
// 다른 이외의 값과 비교할때는 무조건 false
// 숫자 0, null, undefined 등은
// if에서 false로 인식을 하지만
// 동등연산자들 사용할때는 주의를 해야한다
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);
console.log(null == 0);
console.log(undefined == 0);
console.log(NaN == false);

// 어떤 변수에 담긴 값이 null인가 확인하고 싶을때
// 1번이나 2번 처럼 코드를 사용해야만 한다
//  3번처럼 사용하면 노리적 오류를 낼수 있다
let un1 = null;

// 1번코드
if (un1) {
  console.log(true);
} else {
  console.log(false);
}

// 2번코드
if (un1 == null) {
}

// 3번코드
if (un1 == false) {
}

// 일반적으로 숫자형, 문자형의 데이터가
// 같은지(일치하는지) 알아보고 싶을때는
// 일치 연산자를 사용하는 것이 좋다

console.log("3" === 3); // => false로 결과가 산출됨

// parseInt() 문자열형 숫자를 실제 숫자로 변환하는 Js 함수
// type이 다른 두 값을 비교하고자 할때는
// 코드가 다소 복잡해 지지만
// 강제 형변환을 하고 일치연산자로 비교하는 것이
// 논리적 오류를 막을 수 있다
console.log(parseInt("3") == 3); // => true가 나오도록 할려면 이런식의 코드를 사용

// isNaN(값)
// 값이 숫자로 변환할수 없냐?
//  할수 없으면 true
//  할수 있으면 false
console.log(isNaN("3")); // false
console.log(isNaN(3)); // false
if (isNaN("3")) {
  console.log(true);
} else {
  console.log(false);
}

// "A"가 숫자로 바꿀수 없냐?
console.log(isNaN("A")); // true

// 값 비교가 아니고 type 비교 이므로 false
console.log("A" == NaN); // false
