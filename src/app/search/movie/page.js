import SearchMovieLayout from "@/components/layouts/SearchMovieLayout";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <SearchMovieLayout />
    </Suspense>
  );
};

export default Page;
