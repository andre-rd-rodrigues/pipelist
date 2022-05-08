const containerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055
    }
  }
};

const horizontalEntranceLeft = {
  hidden: {
    opacity: 0,
    x: -90
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring"
    }
  }
};
const horizontalEntranceRight = {
  hidden: {
    opacity: 0,
    x: 90
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring"
    }
  }
};

const verticalEntrance = {
  hidden: {
    opacity: 0,
    y: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring"
    }
  },
  viewport: { once: true }
};

const noRepeat = { once: true };
export {
  containerVariant,
  horizontalEntranceRight,
  horizontalEntranceLeft,
  verticalEntrance,
  noRepeat
};
