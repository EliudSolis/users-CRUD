const express = require('express')
const app = express()
app.use(express.json())


app.get('/', (req, res) =>{
    res.status(200).json({
        message: "Server Ok!"
    })
})

const usersDB = [
    {
        id :1,
        firstName: "Sahid",
        lastName: "Kick",
        email: "sahid.kick@academlo.com",
        password: "root",
        age: 22
    }
]

let baseID = 2

const findAllUsers = async () =>{
    return  await usersDB
}

const createNewUser = async (data) =>{
    
    const  newUser =  {
        id :baseID++,
        firstName: data.firstName,
        lastName: data.lastName,
        email:data.email,
        password: data.password,
        age: data.age
    }     
    await usersDB.push(newUser) 

    return newUser
}

const findUserById = async (id) =>{
    const filteredUser = await usersDB.find(user => user.id === id)
    return filteredUser
}

const updateUser = async (id, data) =>{
    const filteredUser = await usersDB.find(user => user.id === id)

    for (let i = 0; i < usersDB.length ; i++){
        if(usersDB[i] == filteredUser){
            usersDB[i] = {
                firstName: data.firstName,
                lastName: data.lastName,
                email:data.email,
                password: data.password,
                age: data.age
            }
        }

        return usersDB
    }


}

const deleteUserById = async (id) => {
    const filteredUser = await usersDB.find(user => user.id === id)
    
    for (let i = 0; i < usersDB.length ; i++){
        if(usersDB[i] == filteredUser){
            usersDB.splice(i,1)
        }
    }
    return usersDB 
}

app.get('/users', (req, res) =>{
    findAllUsers()
    .then((data) =>{
        res.status(200).json(data)
    })
    .catch((err) =>{
        res.status(404).json({message: err.message})
    })
})

app.post('/users', (req, res) =>{
    const data = req.body
    createNewUser(data)
    .then((data) =>{
        res.status(201).json(data)
    })
    .catch((err) =>{
        res.status(404).json({message: err.message})
    })
})

app.get('/users/:id', (req, res) =>{
    const id = Number(req.params.id)
    findUserById(id)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) =>{
        res.status(404).json({message: err.message})
    })
})

app.put('/users/:id', (req, res) =>{
    const id = Number(req.params.id)
    const data = req.body

    updateUser(id, data)
    .then((data) => {
        res.status(202).json(data)
    })
    .catch((err) =>{
        res.status(404).json({message: err.message})
    })
})

app.delete('/users/:id', (req, res) =>{
    const id = Number(req.params.id)
    const data = req.body
    deleteUserById(id, data)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) =>{
        res.status(404).json({message: err.message})
    })
})

app.listen(9000, () =>{
    console.log("Server started at http://localhost:9000")
})

module.exports = app
