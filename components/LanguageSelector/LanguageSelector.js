import Image from "next/image";
import Link from "next/link";
import Modal from "../UI/Modal/Modal";
import spanish from "../../static/images/language-es.png";
import english from "../../static/images/language-en.png";
import classes from "./LanguageSelector.module.css";

const LanguageSelector = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.LangSel}>
        <Link href="/">
          <Image src={spanish} alt="spanish" />
        </Link>
        <Link href="/">
          <Image src={english} alt="english" />
        </Link>
      </div>
      <div className={classes.button}>
        <button onClick={props.onClose}>GO BACK!</button>
      </div>
    </Modal>
  );
};

export default LanguageSelector;
