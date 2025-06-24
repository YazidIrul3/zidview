import DetailMoviePage from "@/pages/DetailMoviePage";

const Page = async ({ params }) => {
  const { id } = await params;
  return <DetailMoviePage id={id} />;
};

export default Page;
