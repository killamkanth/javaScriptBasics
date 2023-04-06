let employee = {
    employeeName : 'sandy',
    designation : 'QA',
    age : 27,
    details : function(){
        console.log(this.employeeName + this.age)
    },

    lastname : 'kanth'
    
}

console.log(employee.employeeName)
console.log(employee['designation'])
employee.details()
console.log(employee.lastname)
employee.designation = 'Senior QA'
console.log(employee.designation)
console.log('lastname' in employee)
console.log(employee)
for (let key in employee){
     console.log(employee[key])
}