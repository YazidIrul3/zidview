import Heading3 from "@/components/elements/heading/Heading3";
import currencyUtils from "@/utils/currencyUtils";
import EachUtils from "@/utils/EachUtils";

const SidebarDetailMovie = ({ data, movieKeywords }) => {
  return (
    <div className=" flex flex-col gap-9 pt-10 lg:ml-3 pb-4">
      <div className=" flex-col gap-3 flex">
        <div className=" text-sm">
          <Heading3 text={"Status"} />
          <h3>{data?.data?.status}</h3>
        </div>
        <div className=" text-sm">
          <Heading3 text={"Original Language"} />
          <h3>{data?.data?.original_language}</h3>
        </div>
        <div className=" text-sm">
          <Heading3 text={"Revenue"} />
          <h3>{currencyUtils(data?.data?.revenue)}</h3>
        </div>
      </div>

      <div className=" flex flex-col gap-3">
        <Heading3 text={"Keywords"} />

        <div className=" flex flex-row gap-2 flex-wrap">
          <EachUtils
            of={movieKeywords?.data?.keywords}
            render={(item, i) => (
              <div
                key={i}
                className=" bg-slate-200 rounded-lg w-fit h-fit text-[12px] font-semibold px-3 py-2"
              >
                <h4>{item.name}</h4>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarDetailMovie;
