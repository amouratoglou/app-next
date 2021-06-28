import Link from "next/link";
import Image from "next/image";
import titleImage from "../static/images/juan-wauters.png";
import continueImage from "../static/images/lets-go.png";
import classes from "./index.module.css";

function HomePage() {
  return (
    <div className={classes.HomePage}>
      <div className={classes.Title}>
        <Image src={titleImage} alt="juan-wauters" />
      </div>
      <div className={classes.Continue}>
        <Link href="/albums">
          <Image src={continueImage} alt="lets-go" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
