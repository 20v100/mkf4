/**
* Raw-publication.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    authKeyID : {type: 'number'},
    authorityEffectiveDate : {type: 'date'},
    authorityExpiryDate : {type: 'date'},
    marketManager : {type: 'string'},
    accountManager : {type: 'string'},
    customerPayer : {type: 'string'},
    comodityCode : {type: 'number'},
    commodityDescription : {type: 'string'},
    majorLocations : {type: 'string'},
    authoritySCAC : {type: 'string'},
    authorityNumber : {type: 'string'},
    annualCarLoadsforthisAgreement : {type: 'number'},
    annualNetRevenueBeforeRenewal : {type: 'number'},
    avgRCRBeforerenewal : {type: 'number'},
    avgCCDForCNSuppliedEqptBeforeRenewal : {type: 'number'},
    generalComments : {type: 'string'},
    fuelSurchargeTariffapplied : {type: 'string'},
    priceIncreaseatLastRenewalActual : {type: 'number'},
    priceIncreaseforThisRenewalCN : {type: 'number'},
    priceIncreaseforThisRenewalCustomer : {type: 'number'},
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
  }
};

