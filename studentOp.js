import { student } from './studentData.js';

export class StudentOp 
{
    constructor(_id, index, name, picture, age, gender, email, phone, address, marks){
    this._id = _id;
    this.index = index;
    this.name= name;
    this.picture = picture;
    this.age = age;
    this.gender = gender;
    this.email= email;
    this.phone = phone;
    this.address = address
    this.marks = marks;
    }

    findStudentDetailById (_id) {
        let search;
        for(let i = 0 ; i< student.length;i++){
            if(student[i]._id.includes(_id)){
                search = new StudentOp(student[i]._id, student[i].index, student[i].name, student[i].age, 
                student[i].gender, student[i].email, student[i].phone, student[i].address, student[i].marks);
            
            }
        }
        return search;
    }

    findStudentDetailByName (name) {
        let search;
        for(let i = 0 ; i< student.length;i++){
            if(student[i].name.includes(name)){
                search = new StudentOp(student[i]._id, student[i].index, student[i].name, student[i].age, 
                student[i].gender, student[i].email, student[i].phone, student[i].address, student[i].marks);
            }
        }
        return search;
    }
    
    findTopper(){
        let top = 0;
        let topper = [];
        for (let i = 0; i < student.length; i++) {
            const element = i;
            let m = student[element].marks;
            let totalMarks = m.bio + m.chem + m.cs + m.english + m.math + m.physics;

            if (totalMarks > top){
                topper.pop();
                topper.push(student[i].name);
                top = totalMarks;
            }else if(totalMarks == top){
                topper.push(student[i].name);
                top = totalMarks;
            }
        }
        return topper;
    }
}