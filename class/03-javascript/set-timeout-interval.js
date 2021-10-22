180
// 180

180 / 60
// 3

179 / 60
// 2.9833333333333334

Math.floor(179/60)
// 2

"위에 거 분"
// '위에 거 분'

180 / 60
// 3

180 % 60
// 0

179 % 60
// 59

178 % 60
// 58

"% 는 나머지 구하는 거"
// '% 는 나머지 구하는 거'

"초"
// '초'




// -----
"setTimeout(기능, 초)"
'시간지연(기능, 초)'

"setInterval(기능, 초)"
'반복(기능, 초)'

setTimeout(function(){ 
    console.log("기능이 실행!!!") 
}, 2000)
// 2

setInterval(function(){
    console.log("안녕하세요!!")
}, 1000)
// 3


// 초 타이머 만들기
let time = 10
setInterval(function(){

    if(time >= 0){
        console.log(time)
        time = time - 1
    }

}, 1000)

//분, 초 합쳐서 타이머 만들기
let time = 180
setInterval(function(){

    if(time >= 0){
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        console.log(minutes + ":" + seconds)
        time = time - 1
    }

}, 1000)