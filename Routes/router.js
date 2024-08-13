const express = require('express')
const userController = require('../Controller/userController')
// const projectController = require('../Controller/projectController')
const jwtMiddleware = require("../Middleware/jwtMiddleware")
const projectController = require('../Controller/projectController')

const router = new express.Router()


// register api
router.post('/register',userController.register)

// login api
router.post('/login',userController.login)

// add project api router specific middleware
router.post('/add-project',jwtMiddleware,projectController.addProject)

// get all projects , view all project
router.get('/get-all-project',jwtMiddleware,projectController.getAllProject)


// user project
router.get('/get-user-project',jwtMiddleware,projectController.getUserProject)
// edit
router.put('/project/edit/:pid',jwtMiddleware,projectController.editProject)

// deleteproject
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)


// exporting router only in last
module.exports = router