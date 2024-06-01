
function Profile() {
  return (
    <div className="h-[40px] flex gap-3">
        <div className="w-[40px] rounded-full h-[40px] bg-profile-img flex justify-center items-center relative">
            <span className="text-blue-800 font-medium">OR</span>
            <span className="absolute w-3  h-3 bg-green-900 rounded-full bottom-0 right-0"></span>
        </div>
        <div className="flex flex-col">
            <span className="font-semibold leading-5">Olivia Rhye</span>
            <span className="text-links leading-5">olivia@jiffyscan.xyz</span>


        </div>
    </div>
  )
}

export default Profile