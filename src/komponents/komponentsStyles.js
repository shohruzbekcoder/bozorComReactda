import styled from "styled-components";
import telImg from "../imgs/Shape1.png";
import searchImg from "../imgs/select-iconc.png";
import fl from "../imgs/fl.png";

export const TopHeader = styled.div`
  height: 44px;
  display: flex;
  color: #ffffff;
  padding: 0 30px;
  font-size: 11px;
  align-items: center;
  letter-spacing: 0px;
  font-family: "Roboto";
  justify-content: space-between;
  background-color: #014472;
`;

export const TopHeaderText = styled.p`
  font-weight: 400;
  letter-spacing: -0.1px;
  span {
    font-weight: 700;
  }
  .bgc {
    color: #fcaf17;
  }
`;

export const TopHeaderTel = styled.p`
  font-weight: 400;
  position: relative;
  ::before {
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(${telImg}) center;
    position: absolute;
    left: -25px;
    top: -4px;
  }
`;

export const BottomHeader = styled.div`
  padding: 0 30px;
`;

export const HeaderLogo = styled.div`
  padding-top: 26px;
  padding-bottom: 30px;

  @media (max-width: 1100px) {
    padding-top: 23px;
    width: 255px;
  }

  img {
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;

export const HeaderSearch = styled.div`
  padding-top: 36px;
  padding-bottom: 36px;
`;

export const HeaderIconc = styled.div`
  padding-top: 52px;
  padding-bottom: 42px;
  padding-left: 10px;

  @media (max-width: 1430px) {
    padding-left: 15px;
  }
`;

export const HeaderIconcImg = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 20px;

  @media (max-width: 1430px) {
    margin-left: 10px;
  }

  @media (max-width: 1100px) {
    margin-left: 0px;
  }
`;

export const HeaderSearchText = styled.div`
  display: inline-block;
  input {
    width: 690px;
    height: 45px;
    outline: none;
    border-radius: 0;
    border: 1px solid #e7e7e7;
    font-size: 12px;
    line-height: 26px;
    color: #202020;
    font-weight: 400;
    font-family: "Roboto";
    padding: 0 15px;

    @media (max-width: 1430px) {
      width: 500px;
    }

    @media (max-width: 1200px) {
      width: 400px;
    }

    @media (max-width: 1100px) {
      width: 380px;
    }

    @media (max-width: 1100px) {
      width: 300px;
    }
  }
`;

export const HeaderSearchSelect = styled.div`
  display: inline-block;
`;

export const Selects = styled.div`
  width: 185px;
  height: 45px;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  position: relative;
  display: flex;
  align-items: center;
  ::after {
    content: "";
    width: 9px;
    height: 9px;
    background: transparent url(${searchImg}) no-repeat center / contain;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  :hover ul {
    display: block;
  }
`;

export const Selected = styled.p`
  cursor: pointer;
  padding-left: 20px;
  font-size: 13px;
  color: #191a1c;
  font-weight: 500;
  font-family: "Roboto";
`;

export const SelectList = styled.ul`
  display: none;
  position: absolute;
  background-color: #ffffff;
  top: 100%;
  left: 0;
`;

export const SelectItem = styled.li`
  cursor: pointer;
  padding: 15px 20px;
  font-size: 13px;
  color: #191a1c;
  font-weight: 500;
  font-family: "Roboto";
  border: 1px solid #e7e7e7;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fcaf17;
  }
`;

export const SearchIconc = styled.div`
  width: 45px;
  height: 45px;
  background: #fcaf17 url(${fl}) no-repeat center;
`;

export const MenuHeader = styled.div`
  padding: 0 30px;
  background-color: #fcfcfc;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;
`;

export const Catigories = styled.div`
  position: relative;
`;

export const CatigoriyChenged = styled.div`
  width: 278px;
  background-color: #014472;
  height: 53px;
  color: #ffffff;
  padding: 0 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  p {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }
  img {
    padding-right: 6px;
  }
`;

export const CatigoriList = styled.ul`
  width: 278px;
  background-color: #ffffff;
  position: absolute;
  top: 100%;
  left: 0;
`;

export const CatigoriItem = styled.li`
  height: 48px;
  width: 100%;
  border: 1px solid #e7e7e7;
  padding: 0 20px;
  display: flex;
  align-items: center;
  transition: all 0.6s ease;
  img {
    display: inline-block;
  }
  div {
    display: none;
  }
  :hover {
    span {
      color: #ffffff;
    }
    div {
      display: inline-block;
      color: #ececec; //bu hozircha quyildi
    }
    background-color: #fcaf17;
  }
`;

export const CatigoriItemTitle = styled.span`
  color: #231f20;
  font-size: 13px;
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 800px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: #efefef 0px 2px 24px 0px; //bu hozircha quyildi
  @media (max-width: 1150px) {
    min-width: auto;
  }
`;

////////////////////////////////////menu list//////////////////////////////////////////////////

export const MenuList = styled.div``;

export const MenuUl = styled.ul``;

export const MenuLi = styled.li`
  font-family: "roboto";
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #191a1c;
  padding: 0 15px;
  cursor: pointer;
  transition: all 0.6s ease;
  :hover {
    color: #fcaf17;
  }
  :last-child {
    padding-right: 0;
  }
`;
/////////////////////////////////menu list//////////////////////////////////////////////////////

export const FooterTop = styled.div`
  padding: 0 20px;
  min-height: 100px;
  background-color: #014472;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterTopLeft = styled.div`
  display: flex;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
  @media (max-width: 1035px) {
    padding-right: 15px;
  }
`;

export const ContactImg = styled.div`
  display: inline-block;
`;

export const ContactText = styled.div`
  display: inline-block;
  font-family: Roboto;
  font-weight: 500;
  padding-left: 16px;
  @media (max-width: 1035px) {
    padding-left: 5px;
  }
`;

export const ContactTextHeader = styled.span`
  color: #fcaf17;
  font-size: 12px;
  display: block;
  margin-bottom: 2px;
`;

export const ContactTextBody = styled.span`
  font-size: 16px;
  color: #ffffff;
  display: block;
  @media (max-width: 1140px) {
    width: 140px;
    line-height: 1.3;
  }
`;

export const FooterTopRight = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border-left: 1px solid #276087;
`;

export const FooterLinksText = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-family: Roboto;
  font-weight: 500;
  text-transform: uppercase;
  display: inline-block;
  padding: 0 20px;
  @media (max-width: 1210px) {
    width: 130px;
  }
  @media (max-width: 1035px) {
    width: 75px;
    padding: 0 10px;
  }
`;

export const FooterLinksImgs = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLinkImg = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 0 2px;
  transition: all 0.6s ease;
  :hover {
    background-color: #fcaf17;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding: 29px;
`;

export const FooterBottomImg = styled.div`
  display: inline-block;
  padding-bottom: 29px;
`;

export const FooterBottomText = styled.p`
  font-size: 13px;
  color: #343434;
`;

export const Chat = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fcaf17;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: fixed;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 5px 8px 1px #0003;
  cursor: pointer;
`;
