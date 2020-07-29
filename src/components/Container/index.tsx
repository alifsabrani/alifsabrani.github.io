import React, { ReactNode } from "react";

import cx from "classnames";

import styles from "./style.module.css";

type Props = {
  children: ReactNode;
  pageCenter?: boolean;
};

export default function Container({ children, pageCenter }: Props) {
  return (
    <div className={cx(styles.container, { [styles.pageCenter]: pageCenter })}>
      {children}
    </div>
  );
}
