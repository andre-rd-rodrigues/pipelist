import React from "react";
import { motion } from "framer-motion";
import {
  containerVariant,
  horizontalEntranceLeft
} from "styles/motion/motionVariants";
import styles from "./list.module.scss";

function EmptyList() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className={styles.emptyList}
    >
      <motion.img
        variants={horizontalEntranceLeft}
        src={`${process.env.PUBLIC_URL}/images/start.png`}
        alt="Start your pipelist!"
      />
      <motion.p variants={horizontalEntranceLeft}>
        Currently your list is empty. <b>Add a person</b> to start your very
        first pipelist!
      </motion.p>
    </motion.div>
  );
}

export default EmptyList;
