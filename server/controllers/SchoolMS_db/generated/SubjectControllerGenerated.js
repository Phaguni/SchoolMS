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
 *  TO CUSTOMIZE SubjectControllerGenerated.js PLEASE EDIT ../SubjectController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import SubjectModel from "../../../models/SchoolMS_db/SubjectModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import SubjectController from "../SubjectController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/subject`;
    router.post(baseUrl + "", authorize([]), SubjectController.create);
    router.delete(baseUrl + "/:id", authorize([]), SubjectController.delete);
    router.get(baseUrl + "/findBy_Class/:key", authorize([]), SubjectController.findBy_Class);
    router.get(baseUrl + "/findBy_Teacher/:key", authorize([]), SubjectController.findBy_Teacher);
    router.get(baseUrl + "/findByclass/:key", authorize([]), SubjectController.findByclass);
    router.get(baseUrl + "/findBysubjectname/:key", authorize([]), SubjectController.findBysubjectname);
    router.get(baseUrl + "/findByteachername/:key", authorize([]), SubjectController.findByteachername);
    router.get(baseUrl + "/:id", authorize([]), SubjectController.get);
    router.get(baseUrl + "/:id/get_Class", authorize([]), SubjectController.get_Class);
    router.get(baseUrl + "/:id/get_Teacher", authorize([]), SubjectController.get_Teacher);
    router.get(baseUrl + "", authorize([]), SubjectController.list);
    router.post(baseUrl + "/:id", authorize([]), SubjectController.update);
  },


  // CRUD METHODS


  /**
  * SubjectModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await SubjectModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.delete
  *   @description CRUD ACTION delete
  *   @param String id id
  *   @param String subjectname
  *
  */
  delete: async (req, res) => {
    try {
      const result = await SubjectModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.findBy_Class
  *   @description CRUD ACTION findBy_Class
  *
  */
  findBy_Class: async (req, res) => {
    try {
      const result = await SubjectModel.findBy_Class(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.findBy_Teacher
  *   @description CRUD ACTION findBy_Teacher
  *
  */
  findBy_Teacher: async (req, res) => {
    try {
      const result = await SubjectModel.findBy_Teacher(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.findByclass
  *   @description CRUD ACTION findByclass
  *
  */
  findByclass: async (req, res) => {
    try {
      const result = await SubjectModel.findByclass(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.findBysubjectname
  *   @description CRUD ACTION findBysubjectname
  *
  */
  findBysubjectname: async (req, res) => {
    try {
      const result = await SubjectModel.findBysubjectname(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.findByteachername
  *   @description CRUD ACTION findByteachername
  *
  */
  findByteachername: async (req, res) => {
    try {
      const result = await SubjectModel.findByteachername(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.get
  *   @description CRUD ACTION get
  *   @param String id id
  *   @param String subjectname
  *
  */
  get: async (req, res) => {
    try {
      const result = await SubjectModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.get_Class
  *   @description CRUD ACTION get_Class
  *   @param Number class
  *
  */
  get_Class: async (req, res) => {
    try {
      const result = await SubjectModel.get_Class(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.get_Teacher
  *   @description CRUD ACTION get_Teacher
  *   @param String teachername
  *
  */
  get_Teacher: async (req, res) => {
    try {
      const result = await SubjectModel.get_Teacher(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * SubjectModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await SubjectModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * SubjectModel.update
  *   @description CRUD ACTION update
  *   @param String id id
  *   @param String subjectname
  *
  */
  update: async (req, res) => {
    try {
      const result = await SubjectModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
