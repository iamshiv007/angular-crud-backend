const express = require('express');
const app = express();
const employeeRoute = express.Router();
// Employee model
let Employee = require('../models/Employee');
// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
  Employee.create(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      return next(error)
    })
})
// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      return next(error)
    })
})
// Get single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      return next(error)
    })
})

// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      return next(error)
    })
})
// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
  Employee.findByIdAndDelete(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((error) => {
    return next(error)
  })
})
module.exports = employeeRoute;