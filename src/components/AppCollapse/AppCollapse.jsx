import React, { useState } from "react";
import styles from "./appcollapse.module.scss";

function AppCollapse({ children }) {
  const [label, setLabel] = useState("See more");

  return (
    <div className={styles.collapse}>
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        className={styles.button}
        onClick={() => setLabel(label === "See more" ? "Close" : "See more")}
      >
        {label}
      </button>
      <div className="collapse" id="collapseExample">
        {children}
      </div>
    </div>
  );
}

export default AppCollapse;
