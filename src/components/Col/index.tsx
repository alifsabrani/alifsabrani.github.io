import React from "react";
import cx from "classnames";

import style from "./style.module.css";

type Props = {
  size: number;
};

const Col: React.FC<Props> = ({ children, size }) => {
  return <div className={cx(style.col, style[`col-${size}`])}>{children}</div>;
};

export default Col;
