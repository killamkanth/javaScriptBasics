var fruits=["banana","pomogranate","apple","pappaya","melon","mango"]
console.log(fruits.sort())
console.log(fruits.reverse())

var numArr = [4,7,3,22,65,33,26,86,34]
console.log(numArr.sort((a,b)=>a-b))
console.log(numArr.sort((a,b)=>b-a))
console.log(numArr.filter(numArr=>numArr%2==0).sort((a,b)=>a-b))

//functions

let multiplyInteger = (a,b)=>(a*b)
console.log(multiplyInteger(10,20))

//keywords
var a="qwe"
//let a="ert"
console.log(a)
let day = "tuesday"
let splStr = day.split("s")
console.log(splStr)
for (let i = 0; i < splStr.length; i++) {
    
    console.log(splStr[i])
}

console.log('**********')
let day1='2';
let day2='28';
let diff = parseInt(day2) - parseInt(day1)
console.log((diff))
console.log(typeof(diff))