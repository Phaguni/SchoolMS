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
 *  TO CUSTOMIZE ClassControllerGenerated.js PLEASE EDIT ../ClassController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import ClassModel from "../../../models/SchoolMS_db/ClassModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ClassController from "../ClassController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/class`;
    router.post(baseUrl + "", authorize([]), ClassController.create);
    router.delete(baseUrl + "/:id", authorize([]), ClassController.delete);
    router.get(baseUrl + "/findBy_Teacher/:key", authorize([]), ClassController.findBy_Teacher);
    router.get(baseUrl + "/findByclass/:key", authorize([]), ClassController.findByclass);
    router.get(baseUrl + "/findByteachername/:key", authorize([]), ClassController.findByteachername);
    router.get(baseUrl + "/:id", authorize([]), ClassController.get);
    router.get(baseUrl + "/:id/get_Teacher", authorize([]), ClassController.get_Teacher);
    router.get(baseUrl + "", authorize([]), ClassController.list);
    router.post(baseUrl + "/:id", authorize([]), ClassController.update);
  },


  // CRUD METHODS


  /**
  * ClassModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await ClassModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassModel.delete
  *   @description CRUD ACTION delete
  *   @param Number class
  *   @param String id id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await ClassModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassModel.findBy_Teacher
  *   @description CRUD ACTION findBy_Teacher
  *
  */
  findBy_Teacher: async (req, res) => {
    try {
      const result = await ClassModel.findBy_Teacher(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassModel.findByclass
  *   @description CRUD ACTION findByclass
  *
  */
  findByclass: async (req, res) => {
    try {
      const result = await ClassModel.findByclass(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassModel.findByteachername
  *   @description CRUD ACTION findByteachername
  *
  */
  findByteachername: async (req, res) => {
    try {
      const result = await ClassModel.findByteachername(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassModel.get
  *   @description CRUD ACTION get
  *   @param Number class
  *   @param String id id
  *
  */
  get: async (req, res) => {
    try {
      const result = await ClassModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassModel.get_Teacher
  *   @description CRUD ACTION get_Teacher
  *   @param String teachername
  *
  */
  get_Teacher: async (req, res) => {
    try {
      const result = await ClassModel.get_Teacher(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await ClassModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * ClassModel.update
  *   @description CRUD ACTION update
  *   @param Number class
  *   @param String id id
  *
  */
  update: async (req, res) => {
    try {
      const result = await ClassModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
