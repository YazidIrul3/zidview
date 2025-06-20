import { Children } from "react";

const EachUtils = ({ of, render }) => {
  return Children.toArray(of?.map((item, i) => render(item, i)));
};

export default EachUtils;
