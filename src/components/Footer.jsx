function Footer(){
    return(
        <div>
            <div className="bg-slate-900 py-6 pb-10 text-white py-16 flex justify-center"> 
                <div className="container w-[60%]"> 
                        <p className="mb-8 flex  justify-center  font-medium text-gray-400 mb-16 flex-row gap-4"> 
                        <a className="border-b-gray-700  transition-colors hover:text-white border-b-0 px-0 py-0">Roadmaps</a> 
                        <a className=" border-b-gray-700 transition-colors hover:text-white border-b-0 px-0 py-0">Best Practices</a> 
                        <a className=" border-b-gray-700 transition-colors hover:text-white border-b-0 px-0 py-0">Guides</a> 
                        <a className="border-b-gray-700 transition-colors hover:text-white border-b-0 px-0 py-0">Videos</a> 
                        <a className="border-b-gray-700 transition-colors hover:text-white border-b-0 px-0 py-0">FAQs</a> 
                        <a className="transition-colors hover:text-white border-b-0 px-0 py-0">YouTube</a> 
                        </p> 
                        <div className="flex  justify-between gap-2 flex-row"> 
                            <div className="max-w-[425px]"> 
                                <p className="text-md flex items-center"> 
                                    <a className="inline-flex items-center text-lg font-medium text-white transition-colors hover:text-gray-400"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 283 283" fill="#000" xmlns:v="https://vecta.io/nano">
                                        <path fill="#fff" d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z"></path>
                                        <path d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z"></path>
                                        </svg> 
                                        <span className="ml-2">roadmap.sh</span> 
                                    </a> 
                                    <span className="mx-2 text-gray-400">by</span> 
                                        <a className="font-regular rounded-md bg-blue-600 px-1.5 py-1 text-sm hover:bg-blue-700"> 
                                            <span className="inline">@kamrify</span>
                                        </a> 
                                </p> 
                                <p className="my-4 text-slate-300/60">
                                    Community created roadmaps, best practices, projects, articles, resources and journeys to help
                                        you choose your path and grow in your career.
                                </p> 
                                <div className="text-sm text-gray-400"> 
                                    <p>© roadmap.sh<span className="mx-1.5">·</span> 
                                    <a href="/terms" className="hover:text-white">Terms</a> 
                                        <span className="mx-1.5">·</span> 
                                        <a  className="hover:text-white">Privacy</a> 
                                        <span className="mx-1.5">·</span> 
                                        <a  className="hover:text-white">Advertise</a> 
                                        <span className="mx-1.5">·</span>
                                        <a aria-label="Write us an email" href="mailto:info@roadmap.sh" className="hover:text-white"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="inline-block h-5 w-5" width="35" height="35" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"></path>
                                            </svg> 
                                        </a> 
                                        <a aria-label="Subscribe to YouTube channel" className="ml-2 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns:v="https://vecta.io/nano" className="inline-block h-5 w-5">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"></path>
                                            </svg> 
                                        </a> 
                                        <a aria-label="Follow on Twitter"  className="ml-2 hover:text-white"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="inline-block h-5 w-5 fill-current">
                                            <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                                            </svg> 
                                        </a> 
                                    </p> 
                                    </div> 
                                </div> 
                                    <div className="max-w-[340px] text-right"> 
                                        <a href="https://thenewstack.io" target="_blank"> <img src="https://roadmap.sh/images/tns-sm.png" alt="ThewNewStack" className="my-1.5  ml-auto mr-0" width="200" height="24.8" loading="lazy"></img>
                                        </a> 
                                        <p className="my-4 text-slate-300/60">
                                        The top DevOps resource for Kubernetes, cloud-native computing, and large-scale development and deployment.
                                        </p> 
                                        <div className="text-sm text-gray-400"> 
                                            <p> 
                                                <a className="text-gray-400 hover:text-white">DevOps</a> 
                                                <span className="mx-1.5">·</span> 
                                                <a className="text-gray-400 hover:text-white">Kubernetes</a> 
                                                <span className="mx-1.5">·</span> 
                                                <a className="text-gray-400 hover:text-white">Cloud-Native</a>
                                            </p> 
                                        </div> 
                            </div> 
                        </div> 
                </div> 
            </div>
        </div>
    )
}

export default Footer;