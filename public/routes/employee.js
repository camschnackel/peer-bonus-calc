var router = require('express').Router();
var path = require('path');

router.post('/', function (req, res) {
    var anEmployee = req.body;
    theCompany.addEmployee(anEmployee.name, anEmployee.startDate, anEmployee.salary, anEmployee.rating);
    console.log('Company.employeeList ->', Company.employeeList);
    
}); // end GET

module.exports = router;