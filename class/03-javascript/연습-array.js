//배열 변수에는 항상 변수명에 s를 붙여줘야 함. 상수도 당연함
const classmates = ["철수", "영희", "훈이"]
// undefined

classmates
// (3) ['철수', '영희', '훈이']

classmates[0]
// '철수'

classmates[1]
// '영희'

classmates. includes("훈이")
// true

classmates. includes("맹구")
// false

classmates.push("맹구")
// 4

classmates
// (4) ['철수', '영희', '훈이', '맹구']

classmates.includes("맹구")
// true

classmates.pop()
// '맹구'

classmates
// (3) ['철수', '영희', '훈이']

classmates.length
// 3




// 배열: 데이터를 여러 개 담을 수 있음, 대괄호[] 안에 데이터를 담고, 쉼표, 로 데이터를 구분
// 이제부터 기능 만들기! - 배열의 기능을 이용하자. 이메일 별 표시 및 쪼개기 합치기 등

const email = "codecmap@gmail.com"
// undefined

email
// 'codecmap@gmail.com'

email.includes("@")
// true

email.split("@")
// (2) ['codecmap', 'gmail.com']0: "codecmap"1: "gmail.com"length: 2[[Prototype]]: Array(0)

email.split("@")[0]
// 'codecmap'

email.split("@")[1]
// 'gmail.com'

const front = email.split("@")[0]
// undefined

const back = email.split("@")[1]
// undefined

front
// 'codecmap'

back
// 'gmail.com'

front[0]
// 'c'

front[5]
// 'm'

"새로운 배열을 하나 만든 다음 별 표시하기"
// '새로운 배열을 하나 만든 다음 별 표시하기'

const newFront = []
// undefined

newFront.push(front[0])
// 1

newFront.push(front[1])
// 2

newFront.push(front[2])
// 3

newFront.push(front[3])
// 4

newFront
// (4) ['c', 'o', 'd', 'e']

newFront.push("*")
// 5

newFront.push("*")
// 6

newFront.push("*")
// 7

newFront.push("*")
// 8

newFront
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']

newFront.join("")
// 'code****'

"join()은 ,가 디폴트다"
// 'join()은 ,가 디폴트다'

newFront.join("") +  "@" + back
// 'code****@gmail.com'

const result = newFront.join("") +  "@" + back
// undefined

result
// 'code****@gmail.com'
