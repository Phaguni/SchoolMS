// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TestService } from '../../services/test.service';
// Import Models
import { Test } from '../../domain/school-ms_db/test';
import { Class } from '../../domain/school-ms_db/class';
import { Lesson } from '../../domain/school-ms_db/lesson';
import { Subject } from '../../domain/school-ms_db/subject';
import { Teacher } from '../../domain/school-ms_db/teacher';

// START - USED SERVICES
/**
* TestService.create
*	@description CRUD ACTION create
*
* TestService.update
*	@description CRUD ACTION update
*	@param Number class
*	@param ObjectId id Id
*	@param Number lessonno
*	@param String subjectname
*
* TestService.get
*	@description CRUD ACTION get
*	@param Number class
*	@param ObjectId id Id resource
*	@param Number lessonno
*	@param String subjectname
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Test
 */
@Component({
    selector: 'app-test-edit',
    templateUrl: 'test-edit.component.html',
    styleUrls: ['test-edit.component.css']
})
export class TestEditComponent implements OnInit {
    item: Test;
    list_Class: Class[];
    list_Lesson: Lesson[];
    list_Subject: Subject[];
    list_Teacher: Teacher[];
    model: Test;
    formValid: Boolean;

    constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Test();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.testService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.classService.list().subscribe(list => this.list_Class = list);
            this.lessonService.list().subscribe(list => this.list_Lesson = list);
            this.subjectService.list().subscribe(list => this.list_Subject = list);
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
     * Add Class from Test
     *
     * @param {string} id Id of Class to add in this.item._Class array
     */
    addClass(id: string) {
        if (!this.item._Class)
            this.item._Class = [];
        this.item._Class.push(id);
    }

    /**
     * Remove an Class from a Test
     *
     * @param {number} index Index of Class in this.item._Class array
     */
    removeClass(index: number) {
        this.item._Class.splice(index, 1);
    }
    /**
     * Check if an Lesson is in  _Lesson
     *
     * @param {string} id Id of Lesson to search
     * @returns {boolean} True if it is found
     */
    containLesson(id: string): boolean {
        if (!this.item._Lesson) return false;
        return this.item._Lesson.indexOf(id) !== -1;
    }

    /**
     * Add Lesson from Test
     *
     * @param {string} id Id of Lesson to add in this.item._Lesson array
     */
    addLesson(id: string) {
        if (!this.item._Lesson)
            this.item._Lesson = [];
        this.item._Lesson.push(id);
    }

    /**
     * Remove an Lesson from a Test
     *
     * @param {number} index Index of Lesson in this.item._Lesson array
     */
    removeLesson(index: number) {
        this.item._Lesson.splice(index, 1);
    }
    /**
     * Check if an Subject is in  _Subject
     *
     * @param {string} id Id of Subject to search
     * @returns {boolean} True if it is found
     */
    containSubject(id: string): boolean {
        if (!this.item._Subject) return false;
        return this.item._Subject.indexOf(id) !== -1;
    }

    /**
     * Add Subject from Test
     *
     * @param {string} id Id of Subject to add in this.item._Subject array
     */
    addSubject(id: string) {
        if (!this.item._Subject)
            this.item._Subject = [];
        this.item._Subject.push(id);
    }

    /**
     * Remove an Subject from a Test
     *
     * @param {number} index Index of Subject in this.item._Subject array
     */
    removeSubject(index: number) {
        this.item._Subject.splice(index, 1);
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
     * Add Teacher from Test
     *
     * @param {string} id Id of Teacher to add in this.item._Teacher array
     */
    addTeacher(id: string) {
        if (!this.item._Teacher)
            this.item._Teacher = [];
        this.item._Teacher.push(id);
    }

    /**
     * Remove an Teacher from a Test
     *
     * @param {number} index Index of Teacher in this.item._Teacher array
     */
    removeTeacher(index: number) {
        this.item._Teacher.splice(index, 1);
    }

    /**
     * Save Test
     *
     * @param {boolean} formValid Form validity check
     * @param Test item Test to save
     */
    save(formValid: boolean, item: Test): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.testService.update(item).subscribe(data => this.goBack());
            } else {
                this.testService.create(item).subscribe(data => this.goBack());
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



