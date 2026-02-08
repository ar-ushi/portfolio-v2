import React from "react";
import * as styles from "../../styles/callout.module.css";

const ICONS = {
  info: "fa-solid fa-circle-info",
  insight: "fa-regular fa-lightbulb",
};

const TITLES = {
  info: "Info",
  insight: "Insight",
};

export default function Callout({ type = "info", title, children }) {
  // camelCase style class
  const styleType = `callout${type.charAt(0).toUpperCase()}${type.slice(1)}`;
  const resolvedType = styles[styleType] ? styleType : "calloutInfo";

  return (
    <div className={`${styles.callout} ${styles[resolvedType]}`}>
      <div className={styles.calloutIcon}>
        <i className={ICONS[type]} aria-hidden="true" />
      </div>

      <div className={styles.calloutContent}>
        <div className={styles.calloutTitle}>{title || TITLES[type]}</div>
        <div className={styles.calloutBody}>{children}</div>
      </div>
    </div>
  );
}
