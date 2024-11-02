function Banner(){
    return(
        <div className="bg-white flex justify-center items-center border-y border-slate-200">
            <div className="w-[50%] flex flex-col justify-center items-center py-20">
            <p className="text-5xl font-bold flex "> 
                <img src="https://media.tenor.com/CsCtNHFcjnIAAAAM/nova-cartoon.gif" alt="Rocket" className="mr-2  h-12 w-12"></img>
                Actively Maintained
            </p>
            <p className="mt-4 mb-2 text-lg my-5 leading-relaxed text-gray-600 text-center">
            We are always improving our content, adding new resources and adding
                features to enhance your learning experience.
            </p>
            <div className="relative mt-8 text-left"> 
                <div className="absolute inset-y-0 left-[120px] hidden w-px -translate-x-[0.5px] translate-x-[5.75px] bg-gray-300 sm:block"></div> 
                <ul className="relative flex flex-col gap-4 py-4"> 
                    <li classNamw="relative"> 
                        <a  className="flex flex-row items-start items-center"> 
                            <span className="w-[120px] flex-shrink-0 pr-0 pr-4 text-right text-sm tracking-wide text-gray-400"> 16 Oct, 2024 </span> 
                            <span className="h-3 w-3 flex-shrink-0 rounded-full bg-gray-300 hidden sm:block"></span> 
                            <span className="text-balance pl-8 text-base font-medium text-gray-900"> DevOps Project Ideas, Team Dashboard, Redis Content </span> 
                        </a> 
                    </li>
                    <li class="relative"> 
                        <a  class="flex flex-row items-start items-center"> 
                            <span className="w-[120px] flex-shrink-0 pr-0 pr-4 text-right text-sm tracking-wide text-gray-400"> 04 Oct, 2024 </span> 
                            <span className="h-3 w-3 flex-shrink-0 rounded-full bg-gray-300 hidden sm:block"></span> 
                            <span className="text-balance pl-8 text-base font-medium text-gray-900"> AI Engineer Roadmap, Leaderboards, Editor AI, and more </span> 
                        </a> 
                    </li>
                    <li class="relative"> 
                        <a  className="flex flex-row items-start items-center"> 
                            <span className="w-[120px] flex-shrink-0 pr-0 sm:pr-4 text-right text-sm tracking-wide text-gray-400"> 23 Sep, 2024 </span>
                             <span className="h-3 w-3 flex-shrink-0 rounded-full bg-gray-300 hidden sm:block"></span> 
                             <span className="text-balance sm:pl-8 text-base font-medium text-gray-900"> Redis Roadmap, Dashboard Changes, Bookmarks </span> 
                        </a> 
                    </li>
                    <li className="relative"> 
                        <a  className="flex flex-row items-start items-center"> 
                            <span className="w-[120px] flex-shrink-0 pr-0 sm:pr-4 text-right text-sm tracking-wide text-gray-400"> 17 Sep, 2024 </span>
                             <span class="h-3 w-3 flex-shrink-0 rounded-full bg-gray-300 hidden sm:block"></span> 
                             <span class="text-balance sm:pl-8 text-base font-medium text-gray-900"> New Dashboard, Leaderboards and Projects </span> 
                        </a> 
                    </li> 
                </ul>
            </div>
            <div className="mt-8 text-center"> 
                <a  className="inline-block  rounded-full bg-gray-800 px-4  py-2 text-white transition-colors hover:bg-gray-700">
                View Full Changelog
                </a> 
            </div>
        </div>
        </div>
        
    )
}

export default Banner;