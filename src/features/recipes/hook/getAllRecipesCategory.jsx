import { useQuery } from "@tanstack/react-query"
import { getAllRecipesCategory } from "../api/RecipesApi"

export const useRecipesCategoryHook = ()=>{

    let {data,isLoading , isPending ,error} = useQuery({
        queryKey:['category'],
        queryFn: getAllRecipesCategory
    })

    return{
        data,
        isLoading,
        isPending,
        error
    }
}