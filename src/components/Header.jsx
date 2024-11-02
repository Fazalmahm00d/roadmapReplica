function Header(){
    return(
        <div className="min-h-auto relative h-[306px] border-b border-b-[#1e293c] flex justify-center">
            <div className="container px-5 py-6 pb-14 text-left transition-opacity duration-300 w-[60%] flex flex-col items-center ">
                <p className="-mt-4 mb-7" >
                    <button className="rounded-md border border-dashed border-purple-600 px-3 py-1.5 text-purple-400 transition-colors hover:border-purple-400 hover:text-purple-200">
                        <span className="relative mr-1 text-xs font-semibold uppercase text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-play inline-block h-4 w-4 relative -top-[2px] mr-1"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        Watch
                        </span>
                        <span>Practice your skills with projects</span>
                    </button>
                </p>
                <h1 className="mb-2 bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:mb-4 sm:text-5xl sm:leading-tight">
                    Developer Roadmaps
                </h1>
                <p class=" px-4 text-lg text-gray-400 text-center "> <span class="font-medium text-gray-400">roadmap.sh</span> is a community effort
                    to create roadmaps, guides and other educational content to help guide developers
                    in picking up a path and guide their learnings.
                </p>
            </div>
        </div>
    )
}

export default Header