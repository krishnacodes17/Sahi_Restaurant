function PageHeader({isLoading,filteredRecipes}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
    
            {/* Orange Glow */}
    
            <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#ff5a00]/10 blur-[120px]" />
    
            <div className="absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-[#ff5a00]/5 blur-[100px]" />
    
    
            <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

              <div className=" flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
    
                <div>
    
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
                    Explore our food
                  </p>
    
                  <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    Our Menu
                  </h1>
    
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
                    Explore delicious recipes from different cuisines
                    and find something perfect for your next meal.
                  </p>
    
                </div>
    
    
                {/* Recipe Count */}
    
                {!isLoading && (
                  <div className="flex items-center gap-2 self-start rounded-xl border border-white/10 bg-[#141414] px-4 py-2.5 sm:self-auto">
    
                    <span className="text-lg font-bold text-[#ff5a00]">
                      {filteredRecipes.length}
                    </span>
    
                    <span className="text-xs text-white/40">
                      recipes found
                    </span>
    
                  </div>
                )}
    
              </div>
    
            </div>
    
          </section>
  )
}

export default PageHeader
