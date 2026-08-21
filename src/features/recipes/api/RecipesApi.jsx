import { api } from "../../../config/api"

export const getAllRecipesCategory = async()=>{
    try {
        let  res =  await api.get("/recipes/tags")
        return res.data
    } catch {
        return []
    }
}

export const getAllrecipes = async (limit)=>{
    try {
        let res = await api.get("/recipes", { params: { limit } })
        return res.data
    } catch {
        return { recipes: [] }
    }
}

export const getSingleRecipes = async(id)=>{
    try {
        let res = await api.get(`/recipes/${id}`)
        return res.data
    } catch {
        return null
    }
}