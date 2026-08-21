import { useQuery } from "@tanstack/react-query"
import { getAllrecipes } from "../api/RecipesApi"
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/state/CartSlice";



export const useAllRecipiesHook = (limit)=>{
  let dispatch = useDispatch()

const categories = [
  {
    name: "Burger",
    emoji: "🍔",
  },
  {
    name: "Pizza",
    emoji: "🍕",
  },
  {
    name: "Chicken",
    emoji: "🍗",
  },
  {
    name: "Pasta",
    emoji: "🍝",
  },
  {
    name: "Noodles",
    emoji: "🍜",
  },
  {
    name: "Sushi",
    emoji: "🍣",
  },
  {
    name: "Tacos",
    emoji: "🌮",
  },
  {
    name: "Sandwich",
    emoji: "🥪",
  },
  {
    name: "Salad",
    emoji: "🥗",
  },
  {
    name: "Desserts",
    emoji: "🍰",
  },

  {
    name: "Seafood",
    emoji: "🦐",
  },
  {
    name: "Breakfast",
    emoji: "🥞",
  },
  {
    name: "Rice",
    emoji: "🍚",
  },
];

    let {data, isLoading , error} = useQuery({
        queryKey:["recipes"],
        queryFn:()=> getAllrecipes(limit)
    })

      const handleAddToCart = (recipes)=>{
        dispatch(addToCart(recipes))
      }


    return{
      handleAddToCart,
        data ,
        isLoading,
        error,
        categories
    }

}