import React, { useState } from "react";
import styles from "./appcollapse.module.scss";

function AppCollapse({ children }) {
  const initialLabel = "See more";

  const [label, setLabel] = useState(initialLabel);

  return (
    <div className={styles.collapse}>
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#appCollapse"
        aria-expanded="false"
        aria-controls="appCollapse"
        className={styles.button}
        onClick={() =>
          setLabel(label === initialLabel ? "Close" : initialLabel)
        }
      >
        {label}
      </button>
      <div className="collapse" id="appCollapse">
        {children}
      </div>
    </div>
  );
}

export default AppCollapse;
