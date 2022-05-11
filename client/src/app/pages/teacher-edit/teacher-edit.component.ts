// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TeacherService } from '../../services/teacher.service';
// Import Models
import { Teacher } from '../../domain/school-ms_db/teacher';
import { Class } from '../../domain/school-ms_db/class';
import { Exam } from '../../domain/school-ms_db/exam';
import { Subject } from '../../domain/school-ms_db/subject';
import { Lesson } from '../../domain/school-ms_db/lesson';
import { Test } from '../../domain/school-ms_db/test';

// START - USED SERVICES
/**
* TeacherService.create
*	@description CRUD ACTION create
*
* TeacherService.update
*	@description CRUD ACTION update
*	@param String id id
*	@param String teachername
*
* TeacherService.get
*	@description CRUD ACTION get
*	@param String id id
*	@param String teachername
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Teacher
 */
@Component({
    selector: 'app-teacher-edit',
    templateUrl: 'teacher-edit.component.html',
    styleUrls: ['teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
    item: Teacher;
    list_Class: Class[];
    list_Exam: Exam[];
    externalClass__Teacher: Class[];
    externalSubject__Teacher: Subject[];
    externalLesson__Teacher: Lesson[];
    externalExam__Teacher: Exam[];
    externalTest__Teacher: Test[];
    model: Teacher;
    formValid: Boolean;

    constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Teacher();
        this.externalClass__Teacher = [];
        this.externalSubject__Teacher = [];
        this.externalLesson__Teacher = [];
        this.externalExam__Teacher = [];
        this.externalTest__Teacher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.teacherService.get(id).subscribe(item => this.item = item);
                this.classService.findBy_Teacher(id).subscribe(list => this.externalClass__Teacher = list);
                this.subjectService.findBy_Teacher(id).subscribe(list => this.externalSubject__Teacher = list);
                this.lessonService.findBy_Teacher(id).subscribe(list => this.externalLesson__Teacher = list);
                this.examService.findBy_Teacher(id).subscribe(list => this.externalExam__Teacher = list);
                this.testService.findBy_Teacher(id).subscribe(list => this.externalTest__Teacher = list);
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
     * Add Class from Teacher
     *
     * @param {string} id Id of Class to add in this.item._Class array
     */
    addClass(id: string) {
        if (!this.item._Class)
            this.item._Class = [];
        this.item._Class.push(id);
    }

    /**
     * Remove an Class from a Teacher
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
     * Add Exam from Teacher
     *
     * @param {string} id Id of Exam to add in this.item._Exam array
     */
    addExam(id: string) {
        if (!this.item._Exam)
            this.item._Exam = [];
        this.item._Exam.push(id);
    }

    /**
     * Remove an Exam from a Teacher
     *
     * @param {number} index Index of Exam in this.item._Exam array
     */
    removeExam(index: number) {
        this.item._Exam.splice(index, 1);
    }

    /**
     * Save Teacher
     *
     * @param {boolean} formValid Form validity check
     * @param Teacher item Teacher to save
     */
    save(formValid: boolean, item: Teacher): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.teacherService.update(item).subscribe(data => this.goBack());
            } else {
                this.teacherService.create(item).subscribe(data => this.goBack());
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



