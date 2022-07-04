there is an object in studentData.js with structure as
[
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    name: '{{firstName()}} {{surname()}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(12, 18)}}',
    gender: '{{gender()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    marks:{physics:'{{integer(0, 100)}}',
           chem:'{{integer(0, 100)}}',
           math:'{{integer(0, 100)}}',
           cs:'{{integer(0, 100)}}',
           bio:'{{integer(0, 100)}}',
           english:'{{integer(0, 100)}}'}
  }
  ....
]


create a new class in studentOp.js file make a class which take this object in its constructor and has following methods

1 - findStudentDetailById({id})
**********************************************************************
the method takes id of the student as input and give detail of student if the student exist else output as "no student Available".
ex - 
  input :-  findStudentDetailById("srv123")
  output :-  {_id : srv123,
              index : 4,
              name: "Sourabh Pathak".....................................}
  input :- findStudentDetailById("");
  output : - "Invalid Id"


2 - findStudentDetailByName({name})
**********************************************************************
the method takes name of the student as input and give detail of student if the 
student exist else output as "no student Available".
ex - 
  input :-  findStudentDetailByName("Sourabh")
  output :-  [{_id : srv123,
              index : 4,
              name: "Sourabh".................},

              {_id : pat097,
              index : 2,
              name: "Sourabh"...........
              }]
  input :- findStudentDetailByName("");
  output : - "no student Available"


3 - findtheTopper()
**********************************************************************
no input but loops through the entire object and calculate the total by summing
 up the marks and output the name of the person who has highest 
 marks if there multiple person with highest marks output in an array all student
 marks = sum all the marks from diff subject 

 ex - 
  input:- findtheTopper()
  output :-  Arif

  input : - findtheTopper()
  output :- ["Yoggie",""Irvan","Johan"] =100/100

  

