/**
* Commodity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    com : {type: 'float'},
    comDescription : {type: 'string'},
    businessUnitCode : {type: 'float'},
    businessUnitDescription : {type: 'string'},
    majorSubgroupCode : {type: 'float'},
    majorSubgroupDescription : {type: 'string'},
    subgroupCode : {type: 'float'},
    subgroupDescription : {type: 'string'},
    publications: {
      collection: "publication",
      via: "coms"
    }
  }
};

