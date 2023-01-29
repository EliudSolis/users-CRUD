const express = require('express')
const app = express()
const userRouter = require('./users/users.router')
app.use(express.json())

app.use(userRouter.getAllUsers)
app.use(userRouter.createNewUser)
app.use(userRouter.findUserById)
app.use(userRouter.updateUser)
app.use(userRouter.deleteUser)



app.get('/', (req, res) =>{
    res.status(200).json({
        message: "Server Ok!"
    })
})



app.listen(9000, () =>{
    console.log("Server started at http://localhost:9000")
})

module.exports = app
