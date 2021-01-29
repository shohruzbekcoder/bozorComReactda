import React from "react";
import { Chat } from "./komponentsStyles";
import sms from "../imgs/email.png";

export default function Footer() {
  return (
    <Chat>
      <img src={sms} alt="biz bilan fog\'lanish" />
    </Chat>
  );
}
