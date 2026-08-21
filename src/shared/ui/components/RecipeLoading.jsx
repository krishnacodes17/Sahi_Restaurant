function RecipeLoading() {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="shrink-0 w-[260px] sm:w-[280px] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 animate-pulse"
                >
                  {/* Image Skeleton */}
                  <div className="h-[175px] sm:h-[190px] bg-[#1d1d1d]" />

                  {/* Content Skeleton */}
                  <div className="p-4 space-y-3">
                    <div className="h-4 w-3/4 rounded bg-[#1d1d1d]" />

                    <div className="h-3 w-1/2 rounded bg-[#1d1d1d]" />

                    <div className="flex justify-between items-center pt-2">
                      <div className="h-5 w-16 rounded bg-[#1d1d1d]" />

                      <div className="h-10 w-10 rounded-xl bg-[#1d1d1d]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
  )
}

export default RecipeLoading
