import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { SubjectService } from '../../services/subject.service';
// Import Models
import { Subject } from '../../domain/school-ms_db/subject';

// START - USED SERVICES
/**
* SubjectService.delete
*	@description CRUD ACTION delete
*	@param String id id
*	@param String subjectname
*
* SubjectService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Subject
 * @class SubjectListComponent
 */
@Component({
    selector: 'app-subject-list',
    templateUrl: './subject-list.component.html',
    styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
    list: Subject[];
    search: any = {};
    idSelected: string;
    constructor(
        private subjectService: SubjectService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.subjectService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Subject to remove
     *
     * @param {string} id Id of the Subject to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Subject
     */
    deleteItem() {
        this.subjectService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
