import React from "react";

import cx from "classnames";

import styles from "./style.module.css";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "fill" | "transparent";
  size: "s" | "m" | "l";
  color: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant,
  size,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        styles.button,
        styles[variant],
        styles[size],
        styles[color]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
