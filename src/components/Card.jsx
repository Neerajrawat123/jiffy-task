import Tag from "./Tag";

function Card({info , currentTab}) {
  const { name, creator, date, participants, tags, price, rank , img} = info;

  return (
    <div className="px-8 py-[18px] hover:bg-[#EDF2F7]">
      <div className="flex gap-4">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[20px]">{name} </p>{" "}
            <span className="font-sm text-content">by </span>{" "}
            <span className="font-semibold text-[20px] text-content">
              {creator}
            </span>
          </div>
          <div className="flex divide-x-2 ">
            {price && currentTab === 'completed' && (
              <div className="flex items-center gap-1 pr-4">
                <span className="flex items-center w-6 h-6">
                  <img src="src/assets/coin.svg" alt="" />
                </span>
                <span className="font-semibold text-xl ">700</span>
                <span className="uppercase text-content text-lg">usdc</span>
              </div>
            )}

            <div className="flex items-center gap-4">
              {rank && currentTab === 'completed' &&(
                <div className="pl-4 flex text-content items-center gap-1">
                  <span>
                    <img src="src/assets/trophy.svg" alt="" />
                  </span>
                  <span className="text-lg">1st place</span>
                </div>
              )}

              <div className="flex gap-4 items-center">
                {
                    tags.map((tag, index) => (

                        <Tag key={index} name={tag}/>
                    ))
                    
                }
              </div>
            </div>
          </div>
        </div>

        <div className="text-[18px] text-content flex flex-col gap-[6px] items-end pt-2">
          <p>{date}</p>
          <p>
            {" "}
    <span className="text-black">{participants}</span> {' '}Participants
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
