var prsArray = [2,4,5,7,5,3,6,4,8,6,7,9]
let filterArray = prsArray.filter(prsArray=>prsArray%2==0)
console.log(filterArray)

let mapArray = filterArray.map(filterArray=>filterArray*2)
console.log(mapArray)


let cvc = prsArray.filter(prsArray=>prsArray%2==0).map(prsArray=>prsArray*2).reduce((sum,val)=>sum+val,0)
console.log(cvc)