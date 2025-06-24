import { Children } from "react";
import withhDataNotFound from "./withDataNotFound";

const EachUtils = ({ of, render }) => {
  return Children.toArray(of?.map((item, i) => render(item, i)));
};

export default withhDataNotFound(EachUtils);
