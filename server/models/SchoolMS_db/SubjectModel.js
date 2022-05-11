import SubjectModelGenerated from "./generated/SubjectModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SubjectModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await SubjectModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SubjectModelGenerated,
  ...customModel
};
