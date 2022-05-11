// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ClassService } from '../../services/class.service';
// Import Models
import { Class } from '../../domain/school-ms_db/class';
import { Test } from '../../domain/school-ms_db/test';
import { Exam } from '../../domain/school-ms_db/exam';
import { Subject } from '../../domain/school-ms_db/subject';
import { Teacher } from '../../domain/school-ms_db/teacher';
import { Student } from '../../domain/school-ms_db/student';

// START - USED SERVICES
/**
* ClassService.create
*	@description CRUD ACTION create
*
* ClassService.update
*	@description CRUD ACTION update
*	@param Number class
*	@param String id id
*
* ClassService.get
*	@description CRUD ACTION get
*	@param Number class
*	@param String id id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Class
 */
@Component({
    selector: 'app-class-edit',
    templateUrl: 'class-edit.component.html',
    styleUrls: ['class-edit.component.css']
})
export class ClassEditComponent implements OnInit {
    item: Class;
    list_Teacher: Teacher[];
    externalTest__Class: Test[];
    externalExam__Class: Exam[];
    externalSubject__Class: Subject[];
    externalTeacher__Class: Teacher[];
    externalStudent__Class: Student[];
    model: Class;
    formValid: Boolean;

    constructor(
    private classService: ClassService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Class();
        this.externalTest__Class = [];
        this.externalExam__Class = [];
        this.externalSubject__Class = [];
        this.externalTeacher__Class = [];
        this.externalStudent__Class = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.classService.get(id).subscribe(item => this.item = item);
                this.testService.findBy_Class(id).subscribe(list => this.externalTest__Class = list);
                this.examService.findBy_Class(id).subscribe(list => this.externalExam__Class = list);
                this.subjectService.findBy_Class(id).subscribe(list => this.externalSubject__Class = list);
                this.teacherService.findBy_Class(id).subscribe(list => this.externalTeacher__Class = list);
                this.studentService.findBy_Class(id).subscribe(list => this.externalStudent__Class = list);
            }
            // Get relations
            this.teacherService.list().subscribe(list => this.list_Teacher = list);
        });
    }

    /**
     * Check if an Teacher is in  _Teacher
     *
     * @param {string} id Id of Teacher to search
     * @returns {boolean} True if it is found
     */
    containTeacher(id: string): boolean {
        if (!this.item._Teacher) return false;
        return this.item._Teacher.indexOf(id) !== -1;
    }

    /**
     * Add Teacher from Class
     *
     * @param {string} id Id of Teacher to add in this.item._Teacher array
     */
    addTeacher(id: string) {
        if (!this.item._Teacher)
            this.item._Teacher = [];
        this.item._Teacher.push(id);
    }

    /**
     * Remove an Teacher from a Class
     *
     * @param {number} index Index of Teacher in this.item._Teacher array
     */
    removeTeacher(index: number) {
        this.item._Teacher.splice(index, 1);
    }

    /**
     * Save Class
     *
     * @param {boolean} formValid Form validity check
     * @param Class item Class to save
     */
    save(formValid: boolean, item: Class): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.classService.update(item).subscribe(data => this.goBack());
            } else {
                this.classService.create(item).subscribe(data => this.goBack());
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



