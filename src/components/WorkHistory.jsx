import Card from "./Card";
import { data } from "../utils/data";
import { useEffect, useState } from "react";

function WorkHistory() {
  const [currentTab, setCurrentTab] = useState("completed");
  const [cardData, setCardData] = useState(data);
  const [tag, setTag] = useState("all");

  useEffect(() => {
    if (currentTab === "inReview") {
      setCardData((prevCardData) => [...prevCardData].reverse());
    } else {
      setCardData((prevCardData) => [...prevCardData].reverse());
    }
  }, [currentTab]);

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setTag(e.target.value);
  };
  const filteredCardData =
    tag === "all"
      ? cardData
      : cardData.filter((card) => card.tags.includes(tag));

  return (
    <div className="w-full pr-4">
      <div className="border-b-2 border-[#EBEBEB] flex divide-x-2 w-full mr-2 pb-5">
        <div className="pr-6">
          <h2 className="font-semibold text-[20px]">Work History</h2>
        </div>

        <div className="flex gap-6 flex-1 text-content px-6 ">
          <button
            className="relative px-1"
            onClick={() => setCurrentTab("completed")}
          >
            <span className={currentTab === "completed" ? "text-black" : ""}>
              Completed
            </span>
            {currentTab === "completed" && (
              <hr className=" absolute top-[53px] h-[2px] w-full bg-blue-500" />
            )}
          </button>
          <button
            className="relative px-1"
            onClick={() => setCurrentTab("inReview")}
          >
            <span className={currentTab === "inReview" ? "text-black" : ""}>
              In Review
            </span>
            {currentTab === "inReview" && (
              <hr className=" absolute top-[53px] h-[2px] w-full bg-blue-500" />
            )}
          </button>{" "}
        </div>

        <div className="flex items-center px-6">
          <span className="w-4 h-4 flex mr-2 items-center">
            <img src="src/assets/filter.svg" alt="" />
          </span>
          <label className="text-sm text-content" htmlFor="filter">
            Filter by
          </label>

          <select
            className="outline ml-4 rounded  outline-[#EBEBEB] outline-1 text-sm text-blue-600 h-[34px] px-1 w-[152px]"
            onChange={handleCategoryChange}
          >
            <option className="text-blue-400" value="all">
              All
            </option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="content">Content</option>
            <option value="blockchain">Blockchain</option>
            <option value="design">Design</option>
          </select>
        </div>
      </div>

      <div className="py-4">
        {filteredCardData.map((card, index) => (
          <Card key={index} info={card} currentTab={currentTab} />
        ))}
      </div>
    </div>
  );
}

export default WorkHistory;
