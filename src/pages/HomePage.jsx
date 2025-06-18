"use client";
import HomeLayout from "@/components/layouts/HomeLayout";

const HomePage = () => {
  return (
    <section className="">
      <div>
        <HomeLayout.courosile endpoint={"/movie/popular"} />
      </div>

      <main className=" container ml-4 mx-auto overflow-hidden w p-2">
        <HomeLayout.trending endpoint={"/trending/movie/day?language=en-US"} />
      </main>
    </section>
  );
};

export default HomePage;
