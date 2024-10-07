const { tryCatch } = require("bullmq");
const {Users} = require("../models/users");

async function createUser(req, res){
    try {
        const { name, email, password, birthdate } = req.body;
        const user = await Users.create({ name, email, password, birthdate });
        return res.status(200).json("user created",user);  
    } catch (error) {
        return res.status(500).json("error in the api",error.message);
    }
}


module.exports = {createUser}