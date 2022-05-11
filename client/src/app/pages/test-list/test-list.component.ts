import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TestService } from '../../services/test.service';
// Import Models
import { Test } from '../../domain/school-ms_db/test';

// START - USED SERVICES
/**
* TestService.delete
*	@description CRUD ACTION delete
*	@param Number class
*	@param ObjectId id Id
*	@param Number lessonno
*	@param String subjectname
*
* TestService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Test
 * @class TestListComponent
 */
@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html',
    styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
    list: Test[];
    search: any = {};
    idSelected: string;
    constructor(
        private testService: TestService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.testService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Test to remove
     *
     * @param {string} id Id of the Test to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Test
     */
    deleteItem() {
        this.testService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
