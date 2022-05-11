// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { SubjectService } from '../../services/subject.service';
// Import Models
import { Subject } from '../../domain/school-ms_db/subject';
import { Class } from '../../domain/school-ms_db/class';
import { Lesson } from '../../domain/school-ms_db/lesson';
import { Exam } from '../../domain/school-ms_db/exam';
import { Test } from '../../domain/school-ms_db/test';
import { Teacher } from '../../domain/school-ms_db/teacher';

// START - USED SERVICES
/**
* SubjectService.create
*	@description CRUD ACTION create
*
* SubjectService.update
*	@description CRUD ACTION update
*	@param String id id
*	@param String subjectname
*
* SubjectService.get
*	@description CRUD ACTION get
*	@param String id id
*	@param String subjectname
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Subject
 */
@Component({
    selector: 'app-subject-edit',
    templateUrl: 'subject-edit.component.html',
    styleUrls: ['subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
    item: Subject;
    list_Class: Class[];
    list_Teacher: Teacher[];
    externalLesson__Subject: Lesson[];
    externalExam__Subject: Exam[];
    externalTest__Subject: Test[];
    model: Subject;
    formValid: Boolean;

    constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Subject();
        this.externalLesson__Subject = [];
        this.externalExam__Subject = [];
        this.externalTest__Subject = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.subjectService.get(id).subscribe(item => this.item = item);
                this.lessonService.findBy_Subject(id).subscribe(list => this.externalLesson__Subject = list);
                this.examService.findBy_Subject(id).subscribe(list => this.externalExam__Subject = list);
                this.testService.findBy_Subject(id).subscribe(list => this.externalTest__Subject = list);
            }
            // Get relations
            this.classService.list().subscribe(list => this.list_Class = list);
            this.teacherService.list().subscribe(list => this.list_Teacher = list);
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
     * Add Class from Subject
     *
     * @param {string} id Id of Class to add in this.item._Class array
     */
    addClass(id: string) {
        if (!this.item._Class)
            this.item._Class = [];
        this.item._Class.push(id);
    }

    /**
     * Remove an Class from a Subject
     *
     * @param {number} index Index of Class in this.item._Class array
     */
    removeClass(index: number) {
        this.item._Class.splice(index, 1);
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
     * Add Teacher from Subject
     *
     * @param {string} id Id of Teacher to add in this.item._Teacher array
     */
    addTeacher(id: string) {
        if (!this.item._Teacher)
            this.item._Teacher = [];
        this.item._Teacher.push(id);
    }

    /**
     * Remove an Teacher from a Subject
     *
     * @param {number} index Index of Teacher in this.item._Teacher array
     */
    removeTeacher(index: number) {
        this.item._Teacher.splice(index, 1);
    }

    /**
     * Save Subject
     *
     * @param {boolean} formValid Form validity check
     * @param Subject item Subject to save
     */
    save(formValid: boolean, item: Subject): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.subjectService.update(item).subscribe(data => this.goBack());
            } else {
                this.subjectService.create(item).subscribe(data => this.goBack());
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



