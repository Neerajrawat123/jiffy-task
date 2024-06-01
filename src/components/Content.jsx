import WorkHistory from "./WorkHistory"

function Content() {
  return (
    <div className="px-[10rem] w-full flex items-center py-4">
        <div className="w-full h-[80vh] flex divide-x-2">
            <div className="w-[70%] h-full ">
                <WorkHistory />

            </div>
            <div className="h-full ">
                <div className="bg-[#F1F5F9] ml-12 px-7 py-4 rounded-[42px] flex gap-5 items-center">
                    <span>
                        <img src="src/assets/search.svg" alt="" />
                    </span>
                    <input className="text-[18px] bg-transparent focus:outline-none" type="text" name="" id="" placeholder="Search Bounties, Profiles, and more..." />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Content