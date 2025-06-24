import Heading1 from "@/components/elements/heading/Heading1";
import EachUtils from "@/utils/EachUtils";
import CastCard from "../card/CastCard";
import CastCardLoading from "../isLoadingComponent/CastCardLoading";

const CastDetailMovie = ({ data, loading }) => {
  const arrayCardLoading = Array(20).fill(null);

  return (
    <div className=" flex flex-col gap-3">
      <Heading1 text={"Cast"} />
      <div className=" flex flex-row gap-3 scrollbar-none overflow-x-scroll">
        {loading ? (
          <EachUtils
            of={arrayCardLoading}
            render={(item, i) => <CastCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={data}
            errorText={"Cast not found"}
            render={(item, i) => <CastCard key={i} data={item} />}
          />
        )}
      </div>
    </div>
  );
};

export default CastDetailMovie;
