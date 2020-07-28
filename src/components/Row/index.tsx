import React from "react";
import cx from "classnames";
import styles from "./style.module.css";

type Props = {
  align: "left" | "right" | "center";
};

const Row: React.FC<Props> = ({ children, align }) => {
  return <div className={cx(styles.row, styles[align])}>{children}</div>;
};

export default Row;
