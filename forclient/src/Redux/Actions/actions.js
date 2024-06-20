import {SIGNUP,SIGNIN,CURRENT,PRODUCT, GET_PRODUCT, RESERVATION, GET_RESERVATION} from "../Consts/action-type"
import axios from 'axios'



export const SignUp = (userData,History) => async (dispatch) => {
try {
    const SignUpUsers = await axios.post('http://localhost:5000/SignUp',userData)
    dispatch(
{        type : SIGNUP ,
        payload : SignUpUsers ,
})
localStorage.setItem('token', SignUpUsers.data.token)
History('/Login')
} catch (error) {
    console.log(error)  
}
}


export const SignIn = (userData,History) => async (dispatch) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*' 
    try {
        const SignInUsers = await axios.post('http://localhost:5000/SignIn',  userData )
        dispatch(
{            type : SIGNIN , 
            payload : SignInUsers.data
})
dispatch(CurrentUser(SignInUsers.data.token))
setTimeout(() => {
    window.location.replace(window.location.protocol+ '//' +window.location.host);
}, 500);
History('/')

    } catch (error) {
        console.log(error)
    }
}


export const CurrentUser = (token) => async (dispatch) => {
    const config={  
        headers:{           
        Authorization: token 
                }}
    try {
        const GetUser = await axios.get('http://localhost:5000/current',config)
        dispatch(
            {            
                type : CURRENT ,
                payload : GetUser.data
            }
            
        )
        localStorage.setItem('current_user',JSON.stringify(GetUser.data.user))
    } catch (error) {
        console.log(error)
    }
}

export const Product = (newProducts) => async (dispatch) => {
    
    try {
        const AddingProduct = await axios.post('http://localhost:5000/addingNewProduct',newProducts)
        dispatch (
            { 
                type : PRODUCT ,
                payload : AddingProduct.data
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const getProducts = () => async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:5000/listNewProduct')
dispatch(
    {            
        type : GET_PRODUCT ,
        payload : res.data.viewProduct,
    }
    
)
} catch (error) {
console.log(error)
}
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const productById = await axios.get(`http://localhost:5000/listNewProduct/${id}`)
        dispatch (
            { 
                type : 'getOneProduct' ,
                payload : productById.data.oneProduct
            }
        )
    } catch (error) {
        console.log (error)
    }

}


export const deleteProduct = (id) => async (dispatch) => {
    try {
        const productById = await axios.delete(`http://localhost:5000/deletePosts/${id}`)
        dispatch (
            { 
                type : 'deleteProduct' ,
                payload : productById.data.oneProduct
            }
        )
        
    } catch (error) {
        console.log (error)
    }

}
export const Reservation = (newReservation) => async (dispatch) => {
    
    try {
        const AddingReservation = await axios.post('http://localhost:5000/addingNewReservation',newReservation)
        dispatch (
            { 
                type : RESERVATION ,
                payload : AddingReservation.data
            }
        )
    } catch (error) {
        console.log(error)
    }
}
export const getReservation = () => async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:5000/listNewReservation')
dispatch(
    {            
        type : GET_RESERVATION ,
        payload : res.data.viewReservation,
    }
    
)
} catch (error) {
console.log(error)
}
}
