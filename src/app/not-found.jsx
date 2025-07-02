import { headers } from "next/headers";

const NotFound = async () => {
  const headerList = headers();
  const host = await headerList.get("host");

  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;
