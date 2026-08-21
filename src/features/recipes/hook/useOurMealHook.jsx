import { useQuery } from "@tanstack/react-query";
import { getAllrecipes } from "../api/RecipesApi";
import { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 8;

export const useOurMealHook = (limit) => {
  const [search, setSearch] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("All");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const [showFilters, setShowFilters] = useState(false);

  const [page, setPage] = useState(1);

  const mealTypes = ["All", "Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];

  const difficulties = ["All", "Easy", "Medium"];

  let { data, isLoading, error, isPending } = useQuery({
    queryKey: ["ourMeal", limit],
    queryFn: () => getAllrecipes(limit),
  });

  let recipes = data?.recipes || [];

  const cuisines = useMemo(() => {
    const uniqueCuisines = [
      ...new Set(recipes.map((recipe) => recipe.cuisine).filter(Boolean)),
    ];

    return ["All", ...uniqueCuisines];
  }, [recipes]);

  // =====================================================
  // FILTER RECIPES
  // =====================================================

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Search
      const matchesSearch = recipe.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      // Meal Type
      const matchesMeal =
        selectedMeal === "All" ||
        recipe.mealType?.some(
          (meal) => meal.toLowerCase() === selectedMeal.toLowerCase(),
        );

      // Cuisine
      const matchesCuisine =
        selectedCuisine === "All" || recipe.cuisine === selectedCuisine;

      // Difficulty
      const matchesDifficulty =
        selectedDifficulty === "All" ||
        recipe.difficulty === selectedDifficulty;

      return (
        matchesSearch && matchesMeal && matchesCuisine && matchesDifficulty
      );
    });
  }, [recipes, search, selectedMeal, selectedCuisine, selectedDifficulty]);

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {
    setSearch("");
    setSelectedMeal("All");
    setSelectedCuisine("All");
    setSelectedDifficulty("All");
  };

  const hasActiveFilters =
    search ||
    selectedMeal !== "All" ||
    selectedCuisine !== "All" ||
    selectedDifficulty !== "All";

  // =====================================================
  // PAGINATION
  // =====================================================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE),
  );

  const paginatedRecipes = useMemo(() => {
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * ITEMS_PER_PAGE;

    return filteredRecipes.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRecipes, page, totalPages]);

  // Reset to page 1 whenever a filter changes
  useEffect(() => {
    setPage(1);
  }, [search, selectedMeal, selectedCuisine, selectedDifficulty]);
  

  return {
    hasActiveFilters,
    filteredRecipes,
    paginatedRecipes,
    totalPages,
    page,
    setPage,
    cuisines,
    clearFilters,
    recipes,
    search,
    setSearch,
    selectedMeal,
    setSelectedMeal,
    selectedCuisine,
    setSelectedCuisine,
    selectedDifficulty,
    setSelectedDifficulty,
    mealTypes,
    difficulties,
    showFilters,
    setShowFilters,
    data,
    isLoading,
    isPending,
    error,
  };
};
