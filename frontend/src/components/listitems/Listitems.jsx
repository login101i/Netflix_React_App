import { useState } from "react";

import "./listItems.scss";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";

const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 225 - 250 + index * 2.5 }}>
        <img src="https://deadline.com/wp-content/uploads/2017/02/lotr.jpg?w=681&h=383&crop=1" alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbDownIcon className="icon" />
                <ThumbUpIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 11 minutes</span>
                <div className="limit">+17</div>
                <span>1999</span>
              </div>
              <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam laudantium natus incidunt numquam quasi possimus expedita? .</div>
            </div>
            <div className="genre">Comedy</div>
          </>
        )}
      </div>
    </>
  );
};

export default ListItems;
