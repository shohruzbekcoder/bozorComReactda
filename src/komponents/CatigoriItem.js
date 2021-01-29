import React from "react";
import {
  CatigoriList,
  CatigoriItem,
  CatigoriItemTitle
} from "./komponentsStyles";
import SubMenu from "./SubMenu";
import tv from "../imgs/televizor.png";
import komp from "../imgs/kompyuter.png";
import mt from "../imgs/maishiy-texnika.png";
import tel from "../imgs/telefon.png";
import oshxona from "../imgs/oshxona-tenikasi.png";
import sport from "../imgs/sport-anjomlari.png";
import salomatlik from "../imgs/guzallik-salomatlik.png";
import avtoJihozlar from "../imgs/avto-jihozlar.png";
import ofisUy from "../imgs/ofis-uy.png";

export default function Select() {
  return (
    <CatigoriList>
      <CatigoriItemOne img={tv} text="Телевизор, фото-видео ва аудио" />
      <CatigoriItemOne img={komp} text="Ноутбук, принтер, компьютерлар" />
      <CatigoriItemOne img={tel} text="Телефон, гаджет, аксессуарлар" />
      <CatigoriItemOne img={mt} text="Маиший техника" />
      <CatigoriItemOne img={oshxona} text="Ошхона техникаси" />
      <CatigoriItemOne img={sport} text="Спорт анжомлари" />
      <CatigoriItemOne img={salomatlik} text="Гўзаллик ва саломатлик" />
      <CatigoriItemOne img={avtoJihozlar} text="Авто жиҳозлар" />
      <CatigoriItemOne img={ofisUy} text="Барчаси офис, уй ва боғ учун" />
      <CatigoriItemOne img={mt} text="Болалар учун ўйинчоқ ва маҳсулотлар" />
    </CatigoriList>
  );
}

const CatigoriItemOne = (props) => {
  return (
    <CatigoriItem>
      <CatigoriItemTitle>
        <img src={props.img} alt={props.text} />
        {props.text}
      </CatigoriItemTitle>
      <SubMenu text={props.text}/>
    </CatigoriItem>
  );
};
