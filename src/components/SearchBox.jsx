
function SearchBox() {
  return (
    <div className="border border-search-b h-[40px] rounded-[40px] px-[24px] flex items-center shadow-search hover:shadow-search-hover">
        <div className="divide-x-2 flex ">
            <div className="flex">
                <span className="w-[25px] h-[25px] flex items-center"> 

                <img src="src/assets/boost.svg" alt="" />
                </span>
                <span className="w-[25px] h-[25px] flex items-center"> 
                    <img src="src/assets/arrow.svg" alt="" />

                </span>
 
            </div>

            <div className="pl-4">
                <input className="focus:outline-none text-[#1F1F1F]" type="text" name="" id="" placeholder="Search an userOp" />
            </div>
        </div>
    </div>
  )
}

export default SearchBox