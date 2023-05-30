## 1.type과 interface의 차이

> type은 'type MyTpe = string'과  
> 'type MyColor = { color: string }  
> 이렇게 2가지 방식으로 선언이 가능하다.  
> interface는 무조건 'interface MyInterface {}'  
> 형식으로 선언해야 한다.

## 2. type과 interface의 차이2

> type은 '|'와 '&'로 다른 type과 섞어서 사용이 가능하다  
> 'type MixType = MyType | MyType2';  
> interface는 extends를 사용하여  
> 다른 interface의 type을 상속받아 사용 가능하다.

## 3. props에서 우리가 원하는 type을 추가하는 법

> interface Porps extends 기존 타입 {  
>  추가할 type: type;  
> }
