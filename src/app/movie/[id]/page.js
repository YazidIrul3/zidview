import DetailMoviePage from "@/pages/DetailMoviePage";

const Page = ({ params }) => {
  return <DetailMoviePage id={params.id} />;
};

export default Page;
