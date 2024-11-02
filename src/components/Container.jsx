import ProductDisplay from "./ProductDisplay";

function Container(props){
    const rolemaps=props.dataArray;
    return(
        <div className="relative border-b border-b-[#1e293c] py-10 flex justify-center">
            <div className="w-[60%]">
                <h2 className="text-md font-regular absolute -top-[17px] flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2">{props.mapsData}</h2>
                <ul className="grid grid-cols-3 gap-2">
                    {
                        rolemaps.map((items)=>{
                          return <ProductDisplay data={items}/>
                        })
                    }
                    <li className={props.createbtn}>
                    <button class="flex h-full w-full items-center justify-center gap-1 overflow-hidden rounded-md border border-dashed border-gray-800 p-3 text-sm text-gray-400 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-300 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Create your own Roadmap</button>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Container;