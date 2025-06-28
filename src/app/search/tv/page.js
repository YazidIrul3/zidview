import SearchTVLayout from "@/components/layouts/SearchTVLayout";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <SearchTVLayout />
    </Suspense>
  );
};

export default Page;
