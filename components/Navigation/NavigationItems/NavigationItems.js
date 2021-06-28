import classes from "./NavigationItems.module.css";
import Link from "next/link";
import Image from "next/image";
import introducingJuanPablo from "../../../static/images/albums/introducing-juan-pablo/introducing-juan-pablo-text.svg";
import laOndaDeJuanPablo from "../../../static/images/albums/la-onda-de-juan-pablo/la-onda-de-juan-pablo-text.svg";
import { SocialIcon } from "react-social-icons";

const navigationItems = () => (
  <>
    <ul className={classes.NavigationItems}>
      <Link href="/">
        <li>HOME</li>
      </Link>
      <Link href="/albums">
        <li>ALBUMS</li>
      </Link>
      <Link href="/albums">
        <li>
          INTRODUCING JUAN PABLO
          {/* <Image src={introducingJuanPablo} alt="introducing-juan-pablo" /> */}
        </li>
      </Link>
      <Link href="/">
        <li>
          LA ONDA DE JUAN PABLO
          {/* <Image src={laOndaDeJuanPablo} alt="la-onda-de-juan-pablo" /> */}
        </li>
      </Link>
      <Link href="/">
        <li>WHO ME?</li>
      </Link>
      <Link href="/">
        <li>REAL LIFE SITUATIONS</li>
      </Link>
      <Link href="/">
        <li>NAP</li>
      </Link>
      <Link href="/">
        <li>TOUR DATES</li>
      </Link>
      <Link href="/about">
        <li>ABOUT</li>
      </Link>
    </ul>
    <div className={classes.SocialIcons}>
      <ul>
        <li>
          <SocialIcon
            className={classes.SocialIcon}
            url="https://www.instagram.com/juanwautersofficial"
            target="_blank"
          />
        </li>
        <li>
          <SocialIcon
            className={classes.SocialIcon}
            url="https://www.facebook.com/juanwauters/"
            target="_blank"
          />
        </li>
        <li>
          <SocialIcon
            className={classes.SocialIcon}
            url="https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
            target="_blank"
          />
        </li>
        <li>
          <SocialIcon
            className={classes.SocialIcon}
            url="https://itunes.apple.com/us/artist/juan-wauters/619568264"
            target="_blank"
          />
        </li>
      </ul>
    </div>
  </>
);

export default navigationItems;
