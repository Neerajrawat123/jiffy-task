function Tag({ name }) {
  let col, bg;
  switch (name) {
    case "backend":
      col = "#FF8370";
      bg = "#FFF2EB";
      break;


    case "design":
      col = "#8948F2";
      bg = "#F2EDFF";
      break


    case "blockchain":
      col = "#FF3EC9";
      bg = "#FFEBF9";
      break;

    case "frontend":
      col = "#3EA7FF";
      bg = "#EBF3FF";
      break;

    case 'content':
        col = '#5EA8C4'
        bg = '#EFF6F8'
        break;


   
  }

  return (
    <div
      className="px-3 py-[2px] rounded flex justify-center items-center"
      style={{ backgroundColor: bg }}
    >
      <span className="text-[12px]" style={{ color: col }}>
        {name}
      </span>
    </div>
  );
}

export default Tag;
