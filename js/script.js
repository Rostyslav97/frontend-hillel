'use strict';

function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades; // масив оцінок
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

Student.prototype.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) this.attendance[index] = true;
};

Student.prototype.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) this.attendance[index] = false;
};

Student.prototype.summary = function () {
    const averageGrade = this.getAverageGrade();
    const attended = this.attendance.filter(x => x === true).length;
    const totalClasses = this.attendance.filter(x => x !== null).length;
    const attendanceRate = totalClasses === 0 ? 0 : attended / totalClasses;

    if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
    } else if (averageGrade <= 90 && attendanceRate <= 0.9) {
        return "Редиска!";
    } else {
        return "Добре, але можна краще";
    }
};

const student1 = new Student("Іван", "Іваненко", 2000, [95, 92, 88]);
const student2 = new Student("Марія", "Петрів", 2001, [85, 78, 80]);
const student3 = new Student("Олег", "Коваль", 1999, [90, 92, 91]);

student1.present();
student1.present();
student1.present();

student2.present();
student2.absent();
student2.present();

student3.absent();
student3.absent();
student3.present();

console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.summary());

console.log(student2.summary());
console.log(student3.summary());

console.log(student1.attendance);
