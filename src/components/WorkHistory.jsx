import { useState } from "react"

function WorkHistory() {
    const [isActive, setIsActive] = useState(true)
  return (
    <div className="w-full pr-4">
        <div className="border-b-2 flex divide-x-2 w-full pb-5 mr-2">
            <div className="pr-6">
                <h2 className="font-semibold text-[20px]">Work History</h2>
            </div>

            <div className="flex gap-6 flex-1 text-content px-6 h-full">
                <button className={isActive ? 'text-black border-b-2 border-[#6366F1]': ''}>Completed</button>
                <button>Review</button>
            </div>

            <div className="flex items-center px-6">
                <span className="w-4 h-4 flex mr-2 items-center"><img src="src/assets/filter.svg" alt="" />

                </span>
                <label className="text-sm text-content" htmlFor="filter">Filter by</label>

                <select className="outline ml-4 rounded  outline-[#EBEBEB] outline-1 text-sm text-green-600 h-[34px] px-1 w-[152px]" name="" id="">
                    <option className="text-blue-400" value="">All</option>
                    <option value="">Frontend</option>
                    <option value="">Backend</option>
                    <option value="">Content</option>
                    <option value="">Blockchain</option>



                </select>
            </div>

        </div>
    </div>
  )
}

export default WorkHistory