//객체: 요소들의 성격이 다를 경우 객체에 저장
//key value로 나눠져있다. 배열과 객체가 함께 같이 쓰이는 경우가 많음
//객체 만드는 법 중괄호를 사용한다 {} 이 중괄호 안에다가 보따리를 넣는 겨

const profile = {}
//undefined

profile
//{}

const profile2 = {
    name: "철수",   
    age: 8,
    school: "다람쥐초등학교"
}
//undefined

profile2
//{name: '철수', age: 8, school: '다람쥐초등학교'}

profile2.school //객체 안의 특정key? 갖고 오는 법. 
//'다람쥐초등학교'