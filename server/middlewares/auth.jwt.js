import jwt from "jsonwebtoken";
import Role from "../models/Role";
import User from "../models/User";

export const verifyToken = async (req, res, next) =>{
    try {
        const token = req.headers["x-access-token"]
        console.log(token)
        if (!token) return res.status(403).json({message: "No token provided"})

        const decoded = jwt.verify(token, process.env.SECRET)
        console.log(decoded);
        req.userId = decoded.id

        const user = await User.findById(req.userId, {password: 0})
        console.log(user);
        if (!user) return res.status(404).json({message: 'User not found'})

        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}

export const isModerator = async(req, res, next)=>{
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for (let i = 0; i< roles.length; i++){
        if(roles[i].name === "moderator"){
            next()
            return
        }
    }

    return res.status(403).json({message: 'Moderator rol is required'})
}

export const isAdmin = async(req, res, nect)=>{
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for (let i = 0; i< roles.length; i++){
        if(roles[i].name === "Admin"){
            next()
            return
        }
    }

    return res.status(403).json({message: 'Admin rol is required'})
}