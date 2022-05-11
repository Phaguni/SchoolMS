// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentService } from '../../services/student.service';
// Import Models
import { Student } from '../../domain/school-ms_db/student';
import { Class } from '../../domain/school-ms_db/class';
import { Exam } from '../../domain/school-ms_db/exam';

// START - USED SERVICES
/**
* StudentService.create
*	@description CRUD ACTION create
*
* StudentService.update
*	@description CRUD ACTION update
*	@param String id id
*	@param String studentname
*
* StudentService.get
*	@description CRUD ACTION get
*	@param String id id
*	@param String studentname
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Student
 */
@Component({
    selector: 'app-student-edit',
    templateUrl: 'student-edit.component.html',
    styleUrls: ['student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    item: Student;
    list_Class: Class[];
    list_Exam: Exam[];
    model: Student;
    formValid: Boolean;

    constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Student();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.classService.list().subscribe(list => this.list_Class = list);
            this.examService.list().subscribe(list => this.list_Exam = list);
        });
    }

    /**
     * Check if an Class is in  _Class
     *
     * @param {string} id Id of Class to search
     * @returns {boolean} True if it is found
     */
    containClass(id: string): boolean {
        if (!this.item._Class) return false;
        return this.item._Class.indexOf(id) !== -1;
    }

    /**
     * Add Class from Student
     *
     * @param {string} id Id of Class to add in this.item._Class array
     */
    addClass(id: string) {
        if (!this.item._Class)
            this.item._Class = [];
        this.item._Class.push(id);
    }

    /**
     * Remove an Class from a Student
     *
     * @param {number} index Index of Class in this.item._Class array
     */
    removeClass(index: number) {
        this.item._Class.splice(index, 1);
    }
    /**
     * Check if an Exam is in  _Exam
     *
     * @param {string} id Id of Exam to search
     * @returns {boolean} True if it is found
     */
    containExam(id: string): boolean {
        if (!this.item._Exam) return false;
        return this.item._Exam.indexOf(id) !== -1;
    }

    /**
     * Add Exam from Student
     *
     * @param {string} id Id of Exam to add in this.item._Exam array
     */
    addExam(id: string) {
        if (!this.item._Exam)
            this.item._Exam = [];
        this.item._Exam.push(id);
    }

    /**
     * Remove an Exam from a Student
     *
     * @param {number} index Index of Exam in this.item._Exam array
     */
    removeExam(index: number) {
        this.item._Exam.splice(index, 1);
    }

    /**
     * Save Student
     *
     * @param {boolean} formValid Form validity check
     * @param Student item Student to save
     */
    save(formValid: boolean, item: Student): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



