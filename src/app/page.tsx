import React from "react";
import HomePage from "../components/views/HomePage";
import { fetchData } from "@/utils/utils";

export default async function Home() {
  const url: string = "https://itchy-famous-squares-carlosppretelin.replit.app/news"
  const data = await fetchData(url)

  if (!data){
    return <h1>Error fetching data!</h1>
  }
  
  return (
    <main>
      <HomePage data={data} />
    </main>
  );
}
