'use strict';

const student = new Student('Vova', 'Shaitan', 1997, 10);
// Lesson 1
student.present()
student.setMark(40)

student.absent()
student.setMark(100)

student.present()
student.setMark(1)

student.present()


student.absent()
student.setMark(90)

student.present()
student.setMark(100)

student.present()
student.setMark(67)

// student.present()
// student.setMark(100)
//
// student.present()
// student.setMark(100)
//
// student.present()
// student.setMark(100)

console.log(student)

console.log(student.summary());
console.log(student.getAge());
