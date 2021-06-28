import { useState, useEffect } from "react";
import Link from "next/link";
import $ from "jquery";
import Image from "next/image";
import NavRow from "../../components/UI/NavRow/navRow";
import AlbumCover from "../../components/Slider/AlbumCover";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import classes from "./index.module.css";

import chooseAlbum from "../../static/images/albums/choose-an-album.svg";
import introducingJuanPabloCover from "../../static/images/albums/introducing-juan-pablo/introducing-juan-pablo-cover.png";
import laOndaDeJuanPabloCover from "../../static/images/albums/la-onda-de-juan-pablo/la-onda-de-juan-pablo-cover.png";
import napCover from "../../static/images/albums/nap-edited/22D6949C.png";
import whoMeCover from "../../static/images/albums/who-me-edited/200A31D5.png";
import realLifeSituationsCover from "../../static/images/albums/real-life-situations-edited/Real-Life-Situations.jpg";

function Albums() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    $(document).ready(function () {
      $("#arrow2").click(function () {
        $("#content1").scrollLeft($("#content1").scrollLeft() + 600);
      });
    });
    $("#arrow1").click(function () {
      $("#content1").scrollLeft($("#content1").scrollLeft() - 600);
    });

    // $(document).ready(function () {
    //   $("#arrow4").click(function () {
    //     $("#content2").scrollLeft($("#content2").scrollLeft() + 600);
    //   });
    // });
    // $("#arrow3").click(function () {
    //   $("#content2").scrollLeft($("#content2").scrollLeft() - 600);
    // });

    // $(document).ready(function () {
    //   $("#arrow6").click(function () {
    //     $("#content3").scrollLeft($("#content3").scrollLeft() + 600);
    //   });
    // });
    // $("#arrow5").click(function () {
    //   $("#content3").scrollLeft($("#content3").scrollLeft() - 600);
    // });
  });

  const showModalHandler = () => {
    setShowModal(true);
  }

  const hideModalHandler = () => {
    setShowModal(false);
  }

  return (
    <>
      {showModal && <LanguageSelector onClose={hideModalHandler} />}
      <div className="container-fluid">
        <div className={classes.AlbumsTitle}>
          <Image src={chooseAlbum} alt="choose-album" />
        </div>
        <div className="row">
          <NavRow idOne="arrow1" idTwo="arrow2" />
        </div>
        <div className={classes.AlbumSlider} id="content1">
          <AlbumCover
            src={realLifeSituationsCover}
            alt="real-Life-Situations-Cover"
            caption="Real Life Situations"
          />
          <Link href="/albums/introducingJuanPablo">
            <AlbumCover
              src={introducingJuanPabloCover}
              alt="introducing-Juan-Pablo-Cover"
              caption="Introducing Juan Pablo"
            />
          </Link>

          <AlbumCover
            src={laOndaDeJuanPabloCover}
            alt="la-Onda-De-Juan-Pablo-Cover"
            caption="la Onda De Juan Pablo"
            onClick={showModalHandler}
          />

          <AlbumCover
            src={napCover}
            alt="nap-cover"
            caption="NAP"
            className={classes.nap}
          />
          <AlbumCover src={whoMeCover} alt="who-me-Cover" caption="Who Me?" />
        </div>
        {/* <div className="row">
        <NavRow idOne="arrow3" idTwo="arrow4" />
      </div> */}
      </div>
    </>
  );
}

export default Albums;
