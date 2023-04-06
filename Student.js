module.exports = class Student{
     age=27
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    // get location(){
    //     return 'vizag'
    // }

    fullName() {
        console.log(this.firstname + this.lastname);
    }
}

// let student = new Student("topy","sedan")
// student.fulname();