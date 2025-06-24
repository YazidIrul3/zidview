import DetailMovieLayout from "@/components/layouts/DetailMovieLayout";

const Page = async ({ params }) => {
  const { id } = await params;
  return <DetailMovieLayout id={id} />;
};

export default Page;
