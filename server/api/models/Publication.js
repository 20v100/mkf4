/**
* Publication.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    authKeyID : {type: 'float'},
    authorityEffectiveDate : {type: 'date'},
    authorityExpiryDate : {type: 'date'},
    marketManager : {type: 'string'},
    accountManager : {type: 'string'},
    customerPayer : {type: 'string'},
    //commodityCode : {type: 'float'},
    //commodityDescription : {type: 'string'},
    majorLocations : {type: 'string'},
    authoritySCAC : {type: 'string'},
    authorityNumber : {type: 'string'},
    authorityId : {type: 'string'},
    annualCarLoadsforthisAgreement : {type: 'float'},
    annualNetRevenueBeforeRenewal : {type: 'float'},
    avgRCRBeforerenewal : {type: 'float'},
    avgCCDForCNSuppliedEqptBeforeRenewal : {type: 'float'},
    generalComments : {type: 'string'},
    fuelSurchargeTariffapplied : {type: 'string'},
    priceIncreaseatLastRenewalActual : {type: 'float'},
    priceIncreaseforThisRenewalCN : {type: 'float'},
    priceIncreaseforThisRenewalCustomer : {type: 'float'},
    allowedtoExpire : {type: 'string'},
    authorityType : {type: 'string'},
    version : {type: 'string'},
    firstSeniorApprover : {type: 'string'},
    firstSeniorApproverApprovalStatus : {type: 'string'},
    firstSrApprSubmittedDate : {type: 'date'},
    firstSrApprApprovedRejectedDate : {type: 'date'},
    secondSrApprApprovalStatus : {type: 'string'},
    secondSrApprSubmittedDate : {type: 'date'},
    secondApprApprovedRejectedDate : {type: 'date'},
    businessTeamDescription : {type: 'string'},
    preparedbyDate : {type: 'date'},
    updatedbyDate : {type: 'date'},
    rev : {type: 'string'},
    publications : {
      collection: 'commodity',
      via: 'publications'
    }
  }
};

