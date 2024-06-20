const { body, validationResult } = require('express-validator');


exports.signUpValidation = [
    body('name' ).isEmpty(),
    body('email'  , 'the email must be an email format ').isEmpty().isEmail(), 
    body('password').isEmpty().isEmail(),
    body('phoneNumber', 'phone number must contain only 8 numbers').isEmpty().isLength({min:8}), 
    body('address').isEmpty() ,
]


exports.signInValidation = [
    body('email'  , 'the email must be an email format ').isEmpty().isEmail(), 
    body('password').isEmpty().isEmail()
]



exports.isValid = async (req, res, next) => {
try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    next()
} catch (error) {
    res.status(400).send({ msg : "something went wrong"})
    
}
}