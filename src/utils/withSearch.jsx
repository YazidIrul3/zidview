import useGet from "@/features/movie/useGet";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const withSearch = (OriginalComponent) => {
  return () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    let {
      data: movie,
      fetchData: fetchMovie,
      isLoading: isLoadingMovie,
    } = useGet(`/search/movie?query=${query}`);
    let {
      data: tv,
      fetchData: fetchTVShows,
      isLoading: isLoadingTVShows,
    } = useGet(`/search/tv?query=${query}`);

    const arrayCardLoading = Array(20).fill(null);

    if (!query) {
      movie = [];
      tv = [];
    }

    useEffect(() => {
      fetchMovie();
      fetchTVShows();
    }, [query]);
    return (
      <OriginalComponent
        movie={movie}
        tv={tv}
        arrayCardLoading={arrayCardLoading}
        isLoadingMovie={isLoadingMovie}
        isLoadingTVShows={isLoadingTVShows}
      />
    );
  };
};

export default withSearch;
