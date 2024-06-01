import { useState } from "react"

function Profile() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();

    setIsActive(!isActive)

  }
  return (
    
    <div className="h-[40px] flex gap-3" onClick={handleClick}>
      <div className="relative flex gap-3">
        <div className="w-[40px] rounded-full h-[40px] bg-profile-img flex justify-center items-center relative">
            <span className="text-blue-800 font-medium">OR</span>
            <span className="absolute w-3  h-3 bg-green-900 rounded-full bottom-0 right-0"></span>
        </div>
        <div className="flex flex-col">
            <span className="font-semibold leading-5">Olivia Rhye</span>
            <span className="text-links leading-5">olivia@jiffyscan.xyz</span>


        </div>

      </div>
      <div className={isActive ? 'absolute top-20' : 'hidden'}>

      <div className=" absolute  rounded-lg border-[1px] bg-white z-10  text-links font-medium border-[#DADCE0] w-[208px]">
        <div className="px-[16px] py-[10px] flex items-center gap-3">
          <span>
            <img src="src/assets/profile (1).svg" alt="" />
          </span>
          <button className="text-sm">View Profile</button>

        </div>
        <div className="px-[16px] py-[10px] flex items-center gap-3">
          <span>
            <img src="src/assets/profile (4).svg" alt="" />
          </span>
          <button className="text-sm">Dashboard</button>

        </div>
        <div className="px-[16px] py-[10px] flex items-center gap-3">
          <span>
            <img src="src/assets/profile (3).svg" alt="" />
          </span>
          <button className="text-sm">Api</button>

        </div>
        <div className="px-[16px] py-[10px] flex items-center gap-3">
          <span>
            <img src="src/assets/profile (2).svg" alt="" />
          </span>
          <button className="text-sm">Log out</button>

        </div>


        
      </div>
      </div>

    </div>
  )
}

export default Profile