import DetailTVLayout from "@/components/layouts/DetailTVLayout";

const Page = ({ params }) => {
  return <DetailTVLayout id={params?.id} />;
};

export default Page;
