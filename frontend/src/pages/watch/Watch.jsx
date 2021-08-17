import "./watch.scss";
import BackspaceIcon from "@material-ui/icons/Backspace";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <BackspaceIcon /> 
        <span>Back</span>
      </div>
      <video src="" className="video" autoPlay={false} progress controls src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
    </div>
  );
};

export default Watch;
