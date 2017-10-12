var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;

var Employee = require('./public/modules/employee.module.js');
var Company = require('./public/modules/company.module.js');

var thePerson = new Employee('Bill', '2017, 01, 12', 65000, 4);
thePerson.tenure();
console.log(thePerson);

var theCompany = new Company('Ethan INC');
theCompany.addEmployee(thePerson);
console.log('theCompany', theCompany);

theCompany.employeeBonus(thePerson.rating, thePerson.tenure, thePerson.salary);

console.log('theBonus ->', theCompany.bonus);


app.use(express.static('public'));

app.listen(port, function () {
    console.log('localhost running on port', port);
});