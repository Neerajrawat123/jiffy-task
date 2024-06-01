
function SearchBox() {
  return (
    <div className="border border-search-b h-[40px] rounded-[40px] px-[24px] flex items-center">
        <div className="divide-x-2 flex ">
            <div className="flex">
                <span className="w-[25px] h-[25px] flex items-center"> 

                <img src="src/assets/search-icon.svg" alt="" />
                </span>
                <span className="w-[25px] h-[25px] flex items-center"> 
                    <img src="src/assets/arrow.svg" alt="" />

                </span>
 
            </div>

            <div className="pl-4">
                <input className="focus:outline-none" type="text" name="" id="" placeholder="Search an userOp" />
            </div>
        </div>
    </div>
  )
}

export default SearchBox