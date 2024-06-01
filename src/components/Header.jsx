import Profile from "./Profile";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <div className="px-[11.25rem] h-[5rem] flex items-center">
      <div className=" w-full flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img src="src/assets/logo.svg" alt="logo" />
          <img src="src/assets/logo-name.svg" alt="logo" />
        </div>
        <div>
          <ul className="flex justify-between gap-2">
            <li>
              <a className="text-links" href="">
                Home
              </a>
            </li>
            <li>
              <a className="flex text-links items-center gap-[6px]" href="">
                Blockchain{" "}
                <span className="w-[25px] h-[25px] flex items-center ">
                  <img src="src/assets/arrow.svg" alt="" />{" "}
                </span>{" "}
              </a>
            </li>
            <li>
              <a className="flex text-links items-center gap-[6px]" href="">
                Developer{" "}
                <span className="w-[25px] h-[25px] flex items-center">
                  <img src="src/assets/arrow.svg" alt="" />{" "}
                </span>{" "}
              </a>
            </li>
            <li>
              <a className="flex text-links items-center gap-[6px]" href="">
                More{" "}
                <span className="w-[25px] h-[25px] flex items-center">
                  <img src="src/assets/arrow.svg" alt="" />{" "}
                </span>{" "}
              </a>
            </li>
            <li>
              <a className="text-links" href="">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
            <SearchBox />
        </div>
        <div>
            <Profile/>
        </div>
        <div>
            <span className="w-[24px] h-[24px]">

            <img src="src/assets/moon.svg" alt="" />
            </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
