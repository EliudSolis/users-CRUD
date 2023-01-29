const usersController = require('./users.controllers')



const getAllUsers = (req, res) =>{
    usersController
    .findAllUsers()
    .then((data) =>{
        res.status(200).json(data)
    })
    .catch((err) =>{
        res.status(404).json({message: err.message})
    })
}

 const createNewUser =  (req, res) =>{
        const data = req.body
        usersController
        .createNewUser(data)
        .then((data) =>{
            res.status(201).json(data)
        })
        .catch((err) =>{
            res.status(404).json({message: err.message})
        })

    }

const findUserById = (req, res) =>{
        const id = Number(req.params.id)
        usersController
        .findUserById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
              } else {
                res.status(404).json({message: 'Invalid Id'})
              }
        })
        .catch((err) =>{
            res.status(404).json({message: err.message})
        })
    }

const updateUser = (req, res) =>{
        const id = Number(req.params.id)
        const data = req.body
        usersController
        .updateUser(id, data)
        .then((data) => {
            if(id){
                res.status(202).json(data) 
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
           
        })
        .catch((err) =>{
            res.status(404).json({message: err.message})
        })
    }

const deleteUser =  (req, res) =>{
        const id = Number(req.params.id)
        const data = req.body
        usersController
        .deleteUser(id, data)
        .then((data) => {
            if(id){
                res.status(202).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
            
        })
        .catch((err) =>{
            res.status(404).json({message: err.message})
        })
    }

module.exports =  {
    getAllUsers,
    createNewUser, 
    findUserById, 
    updateUser,
    deleteUser
}
