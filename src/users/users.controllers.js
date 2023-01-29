// const usersDB = [
//     {
//         id :1,
//         firstName: "Sahid",
//         lastName: "Kick",
//         email: "sahid.kick@academlo.com",
//         password: "root",
//         age: 22
//     }
// ]

// let baseID = 1

// const findAllUsers = async () =>{
//     return  await usersDB
// }

// const findUserById = async (id) =>{
//     const filteredUser = await usersDB.find(user => user.id === id)
//     return filteredUser
// }
// const creatreNewUser = async (data) =>{
//     const  newUser =  {
//         id :baseID++,
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email:data.email,
//         password: data.password,
//         age: data.age
//     }     
//    await usersDB.push(newUser) 

//     return newUser
// }

// const updateUser = async (id, data) =>{
//     const filteredUser = await usersDB.find(user => user.id === id)

//     for (let i = 0; i < usersDB.length ; i++){
//         if(usersDB[i] == filteredUser){
//             usersDB[i] = {
//                 firstName: data.firstName,
//                 lastName: data.lastName,
//                 email:data.email,
//                 password: data.password,
//                 age: data.age
//             }
//         }

//         return usersDB
//     }


// }

// const deleteUser = async (id) => {
//     const filteredUser = await usersDB.find(user => user.id === id)
    
//     for (let i = 0; i < usersDB.length ; i++){
//         if(usersDB[i] == filteredUser){
//             usersDB.splice(i,1)
//         }
//     }
//     return usersDB 
// }
    


// module.exports = {
//     findAllUsers,
//     findUserById,
//     creatreNewUser, 
//     updateUser,
//     deleteUser
// }
