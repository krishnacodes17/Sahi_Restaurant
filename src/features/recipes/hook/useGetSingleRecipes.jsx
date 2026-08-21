import { useQuery } from "@tanstack/react-query"
import { getSingleRecipes } from "../api/RecipesApi"




export const useGetSingleRecipes = (id)=>{
    let {data,isLoading , isPending,error} = useQuery({
        queryKey:["singleRecipe",id],
        queryFn: () => getSingleRecipes(id)
    })




    return{
        data , 
        isLoading, 
        isPending,
        error
    }
}