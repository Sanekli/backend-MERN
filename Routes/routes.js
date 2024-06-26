const express = require('express')
const {authSignUp,authSignIn, AddingProducts, displayingProducts,displayingOneProduct,deleteProduct, displayingReservation, AddingReservation, deleteReservation} = require('../Controllers/dataController')
const {isValid ,signUpValidation ,signInValidation } = require ('../Middlewares/Validator')
const {isAuthenticated} = require('../Middlewares/isAuthOrNot')
const auth = express.Router ()
const product = express.Router()



auth.post('/SignUp', signUpValidation , isValid , authSignUp)
 
    
auth.post('/SignIn' , signInValidation , isValid , authSignIn)

auth.get('/current', isAuthenticated, (req,res)=>res.send({user:req.user}))

product.post('/addingNewProduct' ,AddingProducts)

product.get('/listNewProduct',displayingProducts)

product.get('/listNewProduct/:id',displayingOneProduct) 

product.delete('/deletePosts/:id', deleteProduct) 

product.get('/listNewReservation', displayingReservation)

product.post('/addingNewReservation' , AddingReservation)

product.delete('/deleteReservation/:id', deleteReservation);


module.exports = {auth, product,} ;  
