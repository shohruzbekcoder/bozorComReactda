import React from "react";
import "./komponentsCss.css";
import CatigoriItem from "./CatigoriItem";
import {
  BottomHeader,
  HeaderIconc,
  HeaderIconcImg,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchSelect,
  TopHeader,
  TopHeaderTel,
  TopHeaderText,
  HeaderSearchText,
  SearchIconc,
  MenuHeader,
  CatigoriyChenged,
  MenuList,
  MenuUl,
  MenuLi
} from "./komponentsStyles";
import logoImg from "../imgs/logo1.png";
import forma1 from "../imgs/Forma1.png";
import forma2 from "../imgs/Forma2.png";
import Select from "./Select";
import katigory from "../imgs/katigory.png";

export default function Header() {
  return (
    <div>
      <TopHeader>
        <TopHeaderText>
          <span>Bozor.</span>
          <span className="bgc">com</span>га Хуш келибсиз. Иш вақти:
          <span className="bgc"> Душ-Якш 9:00 - 17:00</span>
        </TopHeaderText>
        <TopHeaderTel>Телефон: (+99) 830 00 01 - (+99) 830 00 02</TopHeaderTel>
      </TopHeader>
      <BottomHeader className="cf">
        <HeaderLogo className="left">
          <img src={logoImg} alt="bozorkom logo" />
        </HeaderLogo>
        <HeaderIconc className="right">
          <HeaderIconcImg>
            <img src={forma2} alt="form2" />
          </HeaderIconcImg>
          <HeaderIconcImg className="dib header-iconc-two">
            <img src={forma1} alt="form1" />
          </HeaderIconcImg>
        </HeaderIconc>
        <HeaderSearch className="right cf">
          <HeaderSearchText className="left">
            <input
              type="text"
              placeholder="Kидириш"
              name="search produkt"
              id="search"
            />
          </HeaderSearchText>
          <HeaderSearchSelect className="left">
            <Select />
          </HeaderSearchSelect>
          <SearchIconc className="left" />
        </HeaderSearch>
      </BottomHeader>
      <MenuHeader>
        <CatigoriyChenged>
          <p>Категориялар</p>
          <img src={katigory} alt="katigoriya iconc" />
          <CatigoriItem />
        </CatigoriyChenged>
        <MenuList>
          <MenuUl>
            <MenuLi>Бош саҳифа</MenuLi>
            <MenuLi>Биз ҳақимизда</MenuLi>
            <MenuLi>Чегирмалар</MenuLi>
            <MenuLi>Биз билан алоқа</MenuLi>
          </MenuUl>
        </MenuList>
      </MenuHeader>
    </div>
  );
}
