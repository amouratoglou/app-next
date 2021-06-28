import Image from "next/image";
import classes from "./AlbumCover.module.css";

const albumCover = (props) => (
  <div className={classes.AlbumCover} onClick={props.onClick}>
    <div
      className="card"
      style={{ border: "none", backgroundColor: "transparent", margin: "15px" }}
    >
      <div className={props.className}>
        <Image src={props.src} alt={props.alt} />
      </div>
      <span>{props.caption}</span>
    </div>
  </div>
);

export default albumCover;
