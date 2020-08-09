import React, { ReactNode } from "react";

import styles from "./style.module.css";

type Props = {
  children: ReactNode;
};

export default function Paper({ children }: Props) {
  return <div className={styles.paper}>{children}</div>;
}
