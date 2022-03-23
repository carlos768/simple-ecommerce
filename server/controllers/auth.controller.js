import User from '../models/User'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import Role from '../models/Role'
dotenv.config()

export const signUp = async(req, res) =>{
    try {
        const { username, email, password, roles } = req.body
        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })

        if (roles) {
            const foundRoles = await Role.find({name: {$in: roles}})
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({name: "user"})
            newUser.roles = [role._id]
        }

        const savedUser = await newUser.save()
        console.log(savedUser)

        const token = jwt.sign({id: savedUser._id}, process.env.SECRET, {expiresIn: 86400})
        
        res.send('registrado')
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async (req, res) =>{
    const userFound = await User.findOne({email: req.body.email}).populate("roles");

    if (!userFound) return res.status(400).json({message: "User not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: "Invalid password"})

    const token = jwt.sign({id: userFound._id}, process.env.SECRET, {
        expiresIn: 86400
    })

    console.log(userFound)

    res.json({ status: 'ok', data: token })
}