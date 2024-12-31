const express = require('express')
const User = require('../Model/UserModel')

const getAllUsers = async(req, res)=> {
    
    try
    {
        const allUsers = await User.find()
        res.status(200).json(allUsers);
    }
    catch(error)
    {
        res.status(400)
        throw new Error("Failed to fetch !!")
    }
    

}

const addUser = async(req , res) => {

    const { name , email ,password,  graduation , phone   } = req.body ; 

    if(!name || !email )
    {
        res.status(400)
        throw new Error("Name and emil is mandatory !!")
    }

    const userExits = await User.findOne({ email });

    if(userExits){
        res.status(400);
        throw new Error("User Already exits !!")
    }

    const userDetail = await User.create({
        name , 
        email , 
        password,
        graduation , 
        phone 
    })

    if(userDetail)
    {
        res.status(201).json({
            
            _id:userDetail._id,
            name:userDetail.name,
            email:userDetail.email,
            password:userDetail.password,
            graduation:userDetail.graduation,
            phone:userDetail.phone,
        })
    }
    else
    {
        res.status(400)
        throw new Error("Failed to create the user ".red.bold)
    }
}

module.exports = { addUser , getAllUsers }