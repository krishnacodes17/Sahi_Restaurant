import { useSelector } from "react-redux";



export const useGetUserDetails =  ()=>{

    let {user} = useSelector(store=> store.auth)


    return{
        user
    }

}