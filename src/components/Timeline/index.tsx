import React from "react";
import { TimelineItem } from "../../types";

import styles from "./style.module.css";

type Props = {
  data: Array<TimelineItem>;
};

const Timeline: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ul className={styles.timeline}>
        {data.map((item, index) => {
          return (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p className="text-center">{item.description}</p>
              <p>
                {item.startYear !== item.endYear
                  ? `${item.startYear} - ${item.endYear}`
                  : item.startYear}
              </p>
              {index !== data.length - 1 && <div className={styles.line}></div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
