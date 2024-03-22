import React from "react";
import HomePage from "../components/views/HomePage";
import { fetchData } from "@/utils";

const NEWS_API_URL: string =
  "https://itchy-famous-squares-carlosppretelin.replit.app/news";

const Home = async () => {
  const data = await fetchData(NEWS_API_URL);

  if (!data) {
    return <h1>Error fetching data!</h1>;
  }

  return (
    <main>
      <HomePage data={data} />
    </main>
  );
}
export default Home
