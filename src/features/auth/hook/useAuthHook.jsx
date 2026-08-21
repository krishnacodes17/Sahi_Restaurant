
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { loginUserAction, registerUserAction } from "../state/authAction"




export const useAuthHook = ()=>{
    let {register , handleSubmit,watch , formState:{errors}} = useForm()
    let dispatch = useDispatch()

    // ! Login form  handeler
    let loginForm = (data)=>{
        dispatch(loginUserAction(data))
    }



    // ! Register Form handeler 
    let registerForm = (data)=>{
        dispatch(registerUserAction(data))
    }












    return{
        register,
        handleSubmit,
        errors,
        watch,
        loginForm,
        registerForm
    }



}