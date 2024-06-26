const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerSchema = require('../Models/models')
const Product = require('../Models/Product')
const Reservation = require('../Models/Reservation')


//register
exports.authSignUp =  async (req, res) =>{
    const {password,email} = req.body
    try {
       const find = await registerSchema.findOne({email :email}) ;
       if (find)
       res.status(200).send({msg: 'user exist'})
       const user = new registerSchema(req.body) 
       console.log(user)
       // bcrypt method for getting a hashed password for more security 
       const salt = 10 ;
       const passwordHashed = bcrypt.hashSync(password , salt)
       const userID = {id:user._id}
        // jwt method for getting a unique token for every user 
        const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
       user.password = passwordHashed ;
       
       await user.save()
       res.status(200).send({msg: 'registred successfully' , token})
    } catch (error) {
console.log(error.toString())        
    }
}

exports.authSignIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await registerSchema.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist' });
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const userID = { id: user._id };
        const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
        return res.status(200).json({ msg: 'Login successful', token });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ msg: 'Server error' });
    }
};


exports.AddingProducts = async (req, res)  => {
    
    try {
        const addingNewProduct = new Product (req.body) 
        await addingNewProduct.save()
        return res.status (200).send({msg: "product added" , addingNewProduct})
         
    } catch (error) {
        return res.status (400).send({msg: "failed to add"}, error)
        
    }
}
exports.AddingReservation = async (req, res)  => {
    const reservation = req.body;
    const newReservation = new Reservation ({...reservation})
    try {
        await newReservation.save()
        res.status(201).json(newReservation)
         
    } catch (error) {
        return res.status(400).json({msg: error.message})
        
    }
}


exports.displayingProducts = async (req, res)  => {
    try {
        const viewProduct =  await Product.find();
      
        return res.status (200).send({msg: "product added" , viewProduct})
        
    } catch (error) {
        return res.status (400).send({msg: "failed to add"}, error)
        
    }
}
exports.displayingReservation = async (req, res)  => {
    try {
        const viewReservation = await Reservation.find();
      
        return res.status (200).send({msg: "reservation added" , viewReservation})
        
    } catch (error) {
        return res.status (400).send({msg: "failed to add"}, error)
        
    }
}


exports.displayingOneProduct = async (req, res)  => {
    const {id} = req.params
    try {
        const oneProduct =  await Product.findById(id);
      
        return res.status (200).send({msg: "product added" , oneProduct})
        
    } catch (error) {
        return res.status (400).send({msg: "failed to add"}, error)
        
    }
}


exports.deleteProduct = async (req, res)  => {
    const {id} = req.params
    try {
        const oneProduct =  await Product.findByIdAndDelete(id);
    
        return res.status (200).send({msg: "product deleted"})
        
    } catch (error) {
        return res.status (400).send({msg: "failed to delete"}, error)
        
    }
}

exports.deleteReservation = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReservation = await Reservation.findByIdAndDelete(id);
        if (!deletedReservation) {
            return res.status(404).send({ msg: 'Reservation not found' });
        }
        res.status(200).send({ msg: 'Reservation deleted successfully' });
    } catch (error) {
        console.error('Error deleting reservation:', error.message);
        res.status(500).send({ msg: 'Failed to delete reservation', error: error.message });
    }
};


