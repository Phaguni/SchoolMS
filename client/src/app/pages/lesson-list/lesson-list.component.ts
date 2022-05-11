import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LessonService } from '../../services/lesson.service';
// Import Models
import { Lesson } from '../../domain/school-ms_db/lesson';

// START - USED SERVICES
/**
* LessonService.delete
*	@description CRUD ACTION delete
*	@param String id id
*	@param String lessonname
*
* LessonService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Lesson
 * @class LessonListComponent
 */
@Component({
    selector: 'app-lesson-list',
    templateUrl: './lesson-list.component.html',
    styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
    list: Lesson[];
    search: any = {};
    idSelected: string;
    constructor(
        private lessonService: LessonService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.lessonService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Lesson to remove
     *
     * @param {string} id Id of the Lesson to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Lesson
     */
    deleteItem() {
        this.lessonService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
