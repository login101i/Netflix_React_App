import { useRef, useState } from "react";

import "./list.scss";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItems from "../listitems/Listitems";

const List = () => {
  const listRef = useRef();
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(0);

  const handleClick = (direction) => {
    setIsMoved(true)
    console.log(isMoved)
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === "left" && sliderNumber > 0) {
      listRef.current.style.transform = `translateX(${distance + 345}px)`;
      setSliderNumber(sliderNumber - 1);
      console.log(sliderNumber);

    }
    if (direction === "right" && sliderNumber < 4) {
      console.log(sliderNumber);
      listRef.current.style.transform = `translateX(${distance - 435}px)`;
      setSliderNumber(sliderNumber + 1);
    }
  };

  return (
    <div className="Lcontainer">
      <div className="containerTitle">Continue to watch</div>

      <div className="wrapper">
        <ChevronLeftIcon className="sliderIcon left" onClick={() => handleClick("left")}
        style={{display: isMoved ? "block":'none'}}
        />
        <div className="listContainer" ref={listRef}>
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
        </div>

        <ChevronRightIcon className="sliderIcon right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
};

export default List;
