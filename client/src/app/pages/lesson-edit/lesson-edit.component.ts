// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { LessonService } from '../../services/lesson.service';
// Import Models
import { Lesson } from '../../domain/school-ms_db/lesson';
import { Test } from '../../domain/school-ms_db/test';
import { Subject } from '../../domain/school-ms_db/subject';
import { Teacher } from '../../domain/school-ms_db/teacher';

// START - USED SERVICES
/**
* LessonService.create
*	@description CRUD ACTION create
*
* LessonService.update
*	@description CRUD ACTION update
*	@param String id id
*	@param String lessonname
*
* LessonService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*	@param String lessonname
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Lesson
 */
@Component({
    selector: 'app-lesson-edit',
    templateUrl: 'lesson-edit.component.html',
    styleUrls: ['lesson-edit.component.css']
})
export class LessonEditComponent implements OnInit {
    item: Lesson;
    list_Subject: Subject[];
    list_Teacher: Teacher[];
    externalTest__Lesson: Test[];
    model: Lesson;
    formValid: Boolean;

    constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Lesson();
        this.externalTest__Lesson = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.lessonService.get(id).subscribe(item => this.item = item);
                this.testService.findBy_Lesson(id).subscribe(list => this.externalTest__Lesson = list);
            }
            // Get relations
            this.subjectService.list().subscribe(list => this.list_Subject = list);
            this.teacherService.list().subscribe(list => this.list_Teacher = list);
        });
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
     * Add Subject from Lesson
     *
     * @param {string} id Id of Subject to add in this.item._Subject array
     */
    addSubject(id: string) {
        if (!this.item._Subject)
            this.item._Subject = [];
        this.item._Subject.push(id);
    }

    /**
     * Remove an Subject from a Lesson
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
     * Add Teacher from Lesson
     *
     * @param {string} id Id of Teacher to add in this.item._Teacher array
     */
    addTeacher(id: string) {
        if (!this.item._Teacher)
            this.item._Teacher = [];
        this.item._Teacher.push(id);
    }

    /**
     * Remove an Teacher from a Lesson
     *
     * @param {number} index Index of Teacher in this.item._Teacher array
     */
    removeTeacher(index: number) {
        this.item._Teacher.splice(index, 1);
    }

    /**
     * Save Lesson
     *
     * @param {boolean} formValid Form validity check
     * @param Lesson item Lesson to save
     */
    save(formValid: boolean, item: Lesson): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.lessonService.update(item).subscribe(data => this.goBack());
            } else {
                this.lessonService.create(item).subscribe(data => this.goBack());
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



