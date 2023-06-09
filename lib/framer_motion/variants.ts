const left_to_right_Variants = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const right_to_left_Variants = {
  hide: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const bottom_to_top_Variants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};
const circleHeroVariant = {
  hide: {
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 5,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const variants = {
  left_to_right_Variants,
  right_to_left_Variants,
  bottom_to_top_Variants,
  circleHeroVariant,
};
export default variants;
