const express = require('express')
const {authSignUp,authSignIn, AddingProducts, displayingProducts,displayingOneProduct,deleteProduct, displayingReservation, AddingReservation} = require('../Controllers/dataController')
const {isValid ,signUpValidation ,signInValidation } = require ('../Middlewares/Validator')
const {isAuthenticated} = require('../Middlewares/isAuthOrNot')
const auth = express.Router ()


auth.post('/SignUp', signUpValidation , isValid , authSignUp)
 

auth.post('/SignIn' , signInValidation , isValid , authSignIn)

auth.get('/current', isAuthenticated, (req,res)=>res.send({user:req.user}))

auth.post('/addingNewProduct' ,AddingProducts)

auth.get('/listNewProduct',displayingProducts)

auth.get('/listNewProduct/:id',displayingOneProduct) 

auth.delete('/deletePosts/:id', deleteProduct) 

auth.get('/listNewReservation', displayingReservation)

auth.post('/addingNewReservation' , AddingReservation)




module.exports = auth ;  