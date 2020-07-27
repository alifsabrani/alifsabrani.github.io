import React from "react";
import style from "./style.module.css";

type Props = {
  children: Element;
};

export default function Button({ children }: Props) {
  return <button className={style["button"]}>{children}</button>;
}
