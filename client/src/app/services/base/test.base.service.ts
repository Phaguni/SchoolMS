/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE testBaseService PLEASE EDIT ../test.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Test } from '../../domain/school-ms_db/test';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Test.service.ts
 */

/*
 * SCHEMA DB Test
 *
	{
		averageresult: {
			type: 'Decimal'
		},
		class: {
			type: 'Number',
			required : true
		},
		date: {
			type: 'Date',
			required : true
		},
		lessonno: {
			type: 'Number',
			required : true
		},
		maxmarks: {
			type: 'Number'
		},
		period: {
			type: 'Number'
		},
		subjectname: {
			type: 'String',
			required : true
		},
		teachername: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_Class: [{
			type: Schema.ObjectId,
			ref : "Test"
		}],
		_Lesson: [{
			type: Schema.ObjectId,
			ref : "Test"
		}],
		_Subject: [{
			type: Schema.ObjectId,
			ref : "Test"
		}],
		_Teacher: [{
			type: Schema.ObjectId,
			ref : "Test"
		}],
	}
 *
 */
@Injectable()
export class TestBaseService {

    contextUrl: string = environment.endpoint + '/test';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * TestService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Test): Observable<Test> {
        return this.http
            .post<Test>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * TestService.delete
    *   @description CRUD ACTION delete
    *   @param Number class
    *   @param ObjectId id Id
    *   @param Number lessonno
    *   @param String subjectname
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TestService.findBy_Class
    *   @description CRUD ACTION findBy_Class
    *
    */
    findBy_Class(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findBy_Class/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findBy_Lesson
    *   @description CRUD ACTION findBy_Lesson
    *
    */
    findBy_Lesson(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findBy_Lesson/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findBy_Subject
    *   @description CRUD ACTION findBy_Subject
    *
    */
    findBy_Subject(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findBy_Subject/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findBy_Teacher
    *   @description CRUD ACTION findBy_Teacher
    *
    */
    findBy_Teacher(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findBy_Teacher/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findByclass
    *   @description CRUD ACTION findByclass
    *
    */
    findByClass(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findByclass/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findBydate
    *   @description CRUD ACTION findBydate
    *
    */
    findByDate(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findBydate/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findBylessonno
    *   @description CRUD ACTION findBylessonno
    *
    */
    findByLessonno(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findBylessonno/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findBysubjectname
    *   @description CRUD ACTION findBysubjectname
    *
    */
    findBySubjectname(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findBysubjectname/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.findByteachername
    *   @description CRUD ACTION findByteachername
    *
    */
    findByTeachername(id: string): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl + '/findByteachername/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TestService.get
    *   @description CRUD ACTION get
    *   @param Number class
    *   @param ObjectId id Id resource
    *   @param Number lessonno
    *   @param String subjectname
    *
    */
    get(id: string): Observable<Test> {
        return this.http
            .get<Test>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TestService.get_Class
    *   @description CRUD ACTION get_Class
    *   @param Number class
    *
    */
    get_Class(id: string): Observable<any[]> {
        return this.http
            .get<any[]>(this.contextUrl + '/' + id + 'get_Class')
            .pipe(
                map(response => response)
            );
     }

    /**
    * TestService.get_Lesson
    *   @description CRUD ACTION get_Lesson
    *   @param String lessonname
    *
    */
    get_Lesson(id: string): Observable<any[]> {
        return this.http
            .get<any[]>(this.contextUrl + '/' + id + 'get_Lesson')
            .pipe(
                map(response => response)
            );
     }

    /**
    * TestService.get_Subject
    *   @description CRUD ACTION get_Subject
    *   @param String subjectname
    *
    */
    get_Subject(id: string): Observable<any[]> {
        return this.http
            .get<any[]>(this.contextUrl + '/' + id + 'get_Subject')
            .pipe(
                map(response => response)
            );
     }

    /**
    * TestService.get_Teacher
    *   @description CRUD ACTION get_Teacher
    *   @param String teachername
    *
    */
    get_Teacher(id: string): Observable<any[]> {
        return this.http
            .get<any[]>(this.contextUrl + '/' + id + 'get_Teacher')
            .pipe(
                map(response => response)
            );
     }

    /**
    * TestService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Test[]> {
        return this.http
            .get<Test[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * TestService.update
    *   @description CRUD ACTION update
    *   @param Number class
    *   @param ObjectId id Id
    *   @param Number lessonno
    *   @param String subjectname
    *
    */
    update(item: Test): Observable<Test> {
        return this.http
            .post<Test>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}