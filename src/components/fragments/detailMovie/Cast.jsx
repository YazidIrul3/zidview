import Heading1 from "@/components/elements/heading/Heading1";
import EachUtils from "@/utils/EachUtils";
import CastCard from "../card/CastCard";

const CastDetailMovie = ({ data }) => {
  return (
    <div>
      <Heading1 text={"Cast"} />
      <div className=" flex flex-row gap-3 scrollbar-none overflow-x-scroll">
        <EachUtils
          of={data}
          errorText={"Cast not found"}
          render={(item, i) => <CastCard key={i} data={item} />}
        />
      </div>
    </div>
  );
};

export default CastDetailMovie;
