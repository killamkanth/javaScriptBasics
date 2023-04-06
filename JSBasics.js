console.log("happY")
var marks = [10,20,30,40,50,60,70,80,90,100]
console.log(marks.indexOf(50))
marks.push(45)
console.log(marks.indexOf(45))
var total = marks.reduce((sum,mar)=>sum+mar,0)
console.log(total)

var fiMAr = marks.filter(marks=>marks%3==0)
console.log(fiMAr)
console.log("******************")
var hours=[4,6,5,7,6,8,9,10,30]
console.log(hours.reduce((sum,hour)=> sum+hour))

console.log(hours.filter(hours=>hours%2==0 && hours%3==0))