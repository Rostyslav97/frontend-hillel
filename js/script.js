'use strict';


class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25);
        this._attendanceIndex = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, g) => acc + g, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this._attendanceIndex < 25) {
            this.attendance[this._attendanceIndex++] = true;
        } else {
            console.warn(`${this.firstName} ${this.lastName}: Масив відвідуваності вже заповнений`);
        }
    }

    absent() {
        if (this._attendanceIndex < 25) {
            this.attendance[this._attendanceIndex++] = false;
        } else {
            console.warn(`${this.firstName} ${this.lastName}: Масив відвідуваності вже заповнений`);
        }
    }

    getAverageAttendance() {
        const filled = this.attendance.filter(a => a !== undefined);
        if (filled.length === 0) return 0;
        const presentCount = filled.filter(a => a === true).length;
        return presentCount / filled.length;
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();
        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student("Іван", "Петренко", 2000, [95, 92, 88, 100]);
const student2 = new Student("Олена", "Коваль", 1999, [70, 75, 80]);
const student3 = new Student("Максим", "Шевченко", 2001, [85, 90, 87]);

student1.present(); student1.present(); student1.absent();
student2.present(); student2.absent();
student3.absent(); student3.absent(); student3.present();

console.log(`${student1.firstName} вік:`, student1.getAge());
console.log(`${student1.firstName} середній бал:`, student1.getAverageGrade());
console.log(`${student1.firstName} відвідування:`, student1.getAverageAttendance());
console.log(`${student1.firstName} summary:`, student1.summary());

console.log(`${student2.firstName} summary:`, student2.summary());
console.log(`${student3.firstName} summary:`, student3.summary());
