// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ExamService } from '../../services/exam.service';
// Import Models
import { Exam } from '../../domain/school-ms_db/exam';
import { Class } from '../../domain/school-ms_db/class';
import { Teacher } from '../../domain/school-ms_db/teacher';
import { Student } from '../../domain/school-ms_db/student';
import { Subject } from '../../domain/school-ms_db/subject';

// START - USED SERVICES
/**
* ExamService.create
*	@description CRUD ACTION create
*
* ExamService.update
*	@description CRUD ACTION update
*	@param String examname
*	@param String id Id
*
* ExamService.get
*	@description CRUD ACTION get
*	@param String examname
*	@param String id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Exam
 */
@Component({
    selector: 'app-exam-edit',
    templateUrl: 'exam-edit.component.html',
    styleUrls: ['exam-edit.component.css']
})
export class ExamEditComponent implements OnInit {
    item: Exam;
    list_Class: Class[];
    list_Subject: Subject[];
    list_Teacher: Teacher[];
    externalTeacher__Exam: Teacher[];
    externalStudent__Exam: Student[];
    model: Exam;
    formValid: Boolean;

    constructor(
    private examService: ExamService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Exam();
        this.externalTeacher__Exam = [];
        this.externalStudent__Exam = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.examService.get(id).subscribe(item => this.item = item);
                this.teacherService.findBy_Exam(id).subscribe(list => this.externalTeacher__Exam = list);
                this.studentService.findBy_Exam(id).subscribe(list => this.externalStudent__Exam = list);
            }
            // Get relations
            this.classService.list().subscribe(list => this.list_Class = list);
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
     * Add Class from Exam
     *
     * @param {string} id Id of Class to add in this.item._Class array
     */
    addClass(id: string) {
        if (!this.item._Class)
            this.item._Class = [];
        this.item._Class.push(id);
    }

    /**
     * Remove an Class from a Exam
     *
     * @param {number} index Index of Class in this.item._Class array
     */
    removeClass(index: number) {
        this.item._Class.splice(index, 1);
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
     * Add Subject from Exam
     *
     * @param {string} id Id of Subject to add in this.item._Subject array
     */
    addSubject(id: string) {
        if (!this.item._Subject)
            this.item._Subject = [];
        this.item._Subject.push(id);
    }

    /**
     * Remove an Subject from a Exam
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
     * Add Teacher from Exam
     *
     * @param {string} id Id of Teacher to add in this.item._Teacher array
     */
    addTeacher(id: string) {
        if (!this.item._Teacher)
            this.item._Teacher = [];
        this.item._Teacher.push(id);
    }

    /**
     * Remove an Teacher from a Exam
     *
     * @param {number} index Index of Teacher in this.item._Teacher array
     */
    removeTeacher(index: number) {
        this.item._Teacher.splice(index, 1);
    }

    /**
     * Save Exam
     *
     * @param {boolean} formValid Form validity check
     * @param Exam item Exam to save
     */
    save(formValid: boolean, item: Exam): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.examService.update(item).subscribe(data => this.goBack());
            } else {
                this.examService.create(item).subscribe(data => this.goBack());
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



