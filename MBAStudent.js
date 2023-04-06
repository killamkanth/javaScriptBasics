const Student = require('./Student')
class MBAStudent extends Student{

    constructor(firstname,lastname){
        super(firstname,lastname)
    }

}

let Stud = new MBAStudent("qwe","rty")
Stud.fullName()