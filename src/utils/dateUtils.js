const dateUtils = (inputDate) => {
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default dateUtils;
