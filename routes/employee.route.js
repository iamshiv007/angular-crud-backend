const express = require('express');
const employeeRoute = express.Router();
// Employee model
let Employee = require('../models/Employee');
// Add Employee
employeeRoute.route('/create').post((req, res) => {
  Employee.create(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json(error)
    })
})
// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json(error)
    })
})
// Get single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json(error)
    })
})

// Update employee
employeeRoute.route('/update/:id').put((req, res) => {
  Employee.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json(error)
    })
})
// Delete employee
employeeRoute.route('/delete/:id').delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json(error)
    })
})
module.exports = employeeRoute;