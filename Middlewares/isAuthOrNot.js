const jwt = require('jsonwebtoken')
const registerSchema = require('../Models/models')


exports.isAuthenticated = async (req ,res ,next) => {
    const token = req.header('authorization')
    console.log(token)
     try {
    if (!token) {
        return res.status(400).send({msg :"sorry you are not authorized "})
    }

    const decoded = jwt.verify (token , process.env.SECRET_OR_KEY )
    //console.log(decoded)
    if (!decoded) {
        return res.status(400).send({msg :"sorry you are not authorized "})
    }
    
    const user = await registerSchema.findById(decoded.id) 
    //console.log(user)
    req.user = user ; 
        next()
    } catch (error) {
    res.status(400).send({msg : error}) 
    }
}

