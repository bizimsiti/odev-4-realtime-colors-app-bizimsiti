import React from "react";
import styles from "./styles.module.css";
function PickColor() {
  return (
    <div className={styles.wrapper}>
      <input type="color" />
      <button>Change Color</button>
    </div>
  );
}

export default PickColor;
