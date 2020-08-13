import React, { ReactNode } from "react";

import cx from "classnames";

import styles from "./style.module.css";

type Props = {
  children: ReactNode;
  pageCenter?: boolean;
};

const Container: React.FC<Props> = ({ children, pageCenter }) => {
  return (
    <div className={cx(styles.container, { [styles.pageCenter]: pageCenter })}>
      {children}
    </div>
  );
};

export default Container;
