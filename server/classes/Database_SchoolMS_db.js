// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import ClassModel from "../models/SchoolMS_db/ClassModel";
import ExamModel from "../models/SchoolMS_db/ExamModel";
import LessonModel from "../models/SchoolMS_db/LessonModel";
import StudentModel from "../models/SchoolMS_db/StudentModel";
import SubjectModel from "../models/SchoolMS_db/SubjectModel";
import TeacherModel from "../models/SchoolMS_db/TeacherModel";
import TestModel from "../models/SchoolMS_db/TestModel";
import UserModel from "../models/SchoolMS_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.SchoolMS_db_dbUrl);

    // Start Init Models

		ClassModel.init();
		ExamModel.init();
		LessonModel.init();
		StudentModel.init();
		SubjectModel.init();
		TeacherModel.init();
		TestModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_SchoolMS_db = await mongoose.connect(
        "mongodb://" + properties.SchoolMS_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_SchoolMS_db;
  }
}

export default new Database();
