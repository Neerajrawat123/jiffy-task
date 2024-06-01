import WorkHistory from "./WorkHistory"

function Content() {
  return (
    <div className="px-[11.25rem] w-full flex items-center py-4">
        <div className="w-full h-[80vh] flex divide-x-2">
            <div className="w-[70%] h-full ">
                <WorkHistory />

            </div>
            <div className="h-full"></div>
        </div>
    </div>
  )
}

export default Content