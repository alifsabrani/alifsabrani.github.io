import React from "react";
import cx from "classnames";

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
          const align = index % 2 === 0 ? "right" : "left";
          return (
            <li
              key={item.title}
              className={cx(styles.timelineItem, styles[align])}
            >
              <div className={styles.timelineItemImage}>
                {item.imageURL && (
                  <a href={item.imageURL}>
                    <img src={item.imageURL} alt={item.description}></img>
                  </a>
                )}
              </div>
              <div className={cx(styles.timelineItemBody, styles[align])}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>
                  {item.startYear !== item.endYear
                    ? `${item.startYear} - ${item.endYear}`
                    : item.startYear}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="text-center">Hello People</div>
    </div>
  );
};

export default Timeline;
