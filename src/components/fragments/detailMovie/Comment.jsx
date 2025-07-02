import EachUtils from "@/utils/EachUtils";
import ReviewCard from "../card/ReviewCard";
import Heading1 from "@/components/elements/heading/Heading1";
import ReviewCardLoading from "../isLoadingComponent/ReviewCardLoading";

const CommentDetailMovie = ({ data, loading }) => {
  const arrayCardLoading = Array(20).fill(null);
  return (
    <div className=" ">
      <Heading1 text={"Reviews"} />

      {loading ? (
        <ReviewCardLoading />
      ) : (
        <div
          className={`flex flex-col gap-7 mt-3 scrollbar-none overflow-scroll  max-h-[220px] shadow-sm p-3  ${
            data?.data?.results.length > 0 ? "shadow-slate-900" : ""
          }`}
        >
          <EachUtils
            of={data?.data?.results}
            errorText={"Reviews not found"}
            render={(item, i) => <ReviewCard key={i} data={item} />}
          />
        </div>
      )}
    </div>
  );
};

export default CommentDetailMovie;
