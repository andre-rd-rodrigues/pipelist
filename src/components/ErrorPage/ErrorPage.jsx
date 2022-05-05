import React from "react";
import Button from "components/AppButton/AppButton";
import styles from "./errorpage.module.scss";

function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <img
        src={`${process.env.PUBLIC_URL}/images/error.png`}
        alt="Pipelist - Network error"
      />
      <h2>Something went wrong</h2>
      <p>
        Please refresh the page and if the problem persists, contact our{" "}
        <a
          href="https://support.pipedrive.com/contact-us"
          rel="noreferrer"
          target="_blank"
        >
          support team.
        </a>
      </p>
      <Button
        color="green"
        label="Refresh"
        onClick={() => window.location.reload()}
      />
    </div>
  );
}

export default ErrorPage;
