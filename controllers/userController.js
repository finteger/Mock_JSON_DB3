const fs = require('fs');
const filePath = './database.json';
const { readData, writeData } = require('../utils/file');

//async function to add a user
async function createUser(req, res){
    try{
      const data = await readData();

      //determine last user id
      const lastUser = data.users[data.users.length - 1];

      //last user id is checked.  defaults to one if last user does not exist.
      const nextId = lastUser ? lastUser + 1 : 1;

      //Created a new user object
      const newUser = {
        id: nextId,
        username: req.body.username,
        first_name: req.body.first_name,
        email: req.body.email,
      };

      //push the new data record to the users object
      data.users.push(newUser);

      //write this data to finalize it
      await writeData(data);

      //refresh the page
      res.redirect('/');

    }catch(error){
        res.status(500).json(`Internal Server Error: ${error}`);
    }
}

//async function to update a user
async function updateUser(req, res){
    try{
      
    }catch(error){

    }
}

//async function to delete a user
async function deleteUser(req, res){
    try{
      
    }catch(error){

    }
}

module.exports = {
   createUser,
   updateUser,
   deleteUser
}

