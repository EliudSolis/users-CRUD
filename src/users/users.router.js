const express = require('express')
const router = express.Router()
const services = require('./users.services')


const getAllUsers = router.get('/users', services.getAllUsers)
const createNewUser = router.post('/users', services.createNewUser)
const findUserById  = router.get('/users/:id', services.findUserById)
const updateUser = router.put('/users/:id', services.updateUser)
const deleteUser = router.delete('/users/:id', services.deleteUser)






module.exports = {
    getAllUsers,
    createNewUser,
    findUserById,
    updateUser,
    deleteUser
}