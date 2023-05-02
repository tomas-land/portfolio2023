const nameVariants = {
  hide: {
    opacity: 0,
    x: -400,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};
const titleVariants = {
  hide: {
    opacity: 0,
    x: 400,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};
const variants = {
  nameVariants,
  titleVariants,
};
export default variants;
