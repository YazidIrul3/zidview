import useGetSearchMovies from "@/features/movie/get/useGetSearchMovie";
import useGetSearchTV from "@/features/tv/useGetSearchTV";
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
    } = useGetSearchMovies();
    const {
      data: tv,
      fetchData: fetchTVShows,
      isLoading: isLoadingTVShows,
    } = useGetSearchTV();

    const arrayCardLoading = Array(20).fill(null);

    if (!query) {
      movie = [];
    }

    useEffect(() => {
      fetchMovie(query);
      fetchTVShows(query);
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
