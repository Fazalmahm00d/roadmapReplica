function Navigation(){
    return(
        <div className="w-full bg-slate-900 text-white py-5 flex justify-center">
            <nav className="w-[60%]  flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 283 283" fill="#000" xmlns:v="https://vecta.io/nano"><path fill="#fff" d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z"></path><path d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z"></path></svg></a>
                    <div className="flex items-center gap-5">
                        <button className="hover:text-white text-gray-400 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                        </button>
                        <a href="" className="text-gray-400 hover:text-white">Start Here</a>
                        <a href="" className="text-gray-400 hover:text-white">Teams</a>
                        <div className="relative flex items-center">
                            <button className="text-gray-400 hover:text-white ">
                                Roadmap <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down inline-block h-3 w-3"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>
                        </div>
                        <a href="" className="group relative text-blue-300 hover:text-white hidden md:block ml-0.5">Categories
                            <span class="absolute -right-[11px] top-0"> 
                                <span class="relative flex h-2 w-2"> 
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span> 
                                    <span class="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span> 
                                </span> 
                            </span>
                        </a>
                    </div>
                </div>
                <ul className=" h-8 w-[172px] items-center justify-end gap-5 flex">
                    <li className="transition-opacity duration-300">
                        <a href="" className="text-gray-400 hover:text-white">Login</a>
                        
                    </li>
                    <li className="flex items-center gap-2">
                        <button className="bg-blue-700 text-white rounded-2xl px-6 py-1 font-bold ">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;