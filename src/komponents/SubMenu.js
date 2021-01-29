import React from "react";
import { SubMenu } from "./komponentsStyles";

export default function Select(props) {
  return (
    <SubMenu>
      <p>{props.text}</p>
    </SubMenu>
  );
}
