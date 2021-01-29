import React from "react";
import {
  FooterTop,
  Contact,
  ContactImg,
  ContactText,
  ContactTextHeader,
  ContactTextBody,
  FooterTopLeft,
  FooterTopRight,
  FooterLinksText,
  FooterLinksImgs,
  FooterLinkImg,
  FooterBottom,
  FooterBottomImg,
  FooterBottomText
} from "./komponentsStyles";
import manzilImg from "../imgs/manzil.png";
import emailImg from "../imgs/email.png";
import telImg from "../imgs/contact-tel.png";
import t from "../imgs/t.png";
import i from "../imgs/i.png";
import f from "../imgs/f.png";
import p from "../imgs/p.png";
import bf from "../imgs/footer-logo.png";

export default function Footer() {
  return (
    <>
      <FooterTop style={{ marginTop: 600 }}>
        <FooterTopLeft>
          <ContactElement
            img={manzilImg}
            textHeader="Манзил"
            textBody="Тошкент ш., Шота Р. 12"
          />
          <ContactElement
            img={emailImg}
            textHeader="Email"
            textBody="info@bozor.com"
          />
          <ContactElement
            img={telImg}
            textHeader="Телефон"
            textBody="(+99) 830 00 01 - (+99) 830 00 02"
          />
        </FooterTopLeft>
        <FooterTopRight>
          <FooterLinksText>Бизни кузатиб боринг</FooterLinksText>
          <FooterLinksImgs>
            <FooterLinkImg>
              <img src={t} alt="twitter" />
            </FooterLinkImg>
            <FooterLinkImg>
              <img src={f} alt="twitter" />
            </FooterLinkImg>
            <FooterLinkImg>
              <img src={i} alt="imstagram" />
            </FooterLinkImg>
            <FooterLinkImg>
              <img src={p} alt="twitter" />
            </FooterLinkImg>
          </FooterLinksImgs>
        </FooterTopRight>
      </FooterTop>
      <FooterBottom>
        <FooterBottomImg>
          <img src={bf} alt="footer bottom img" />
        </FooterBottomImg>
        <FooterBottomText>
          © 2019 Bozor.com. Барча ҳуқуқлар ҳимояланган.
        </FooterBottomText>
      </FooterBottom>
    </>
  );
}

const ContactElement = (props) => {
  return (
    <Contact>
      <ContactImg>
        <img src={props.img} alt="manzil img" />
      </ContactImg>
      <ContactText>
        <ContactTextHeader>{props.textHeader}</ContactTextHeader>
        <ContactTextBody>{props.textBody}</ContactTextBody>
      </ContactText>
    </Contact>
  );
};
