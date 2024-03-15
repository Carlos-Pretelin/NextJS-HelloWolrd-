import React from "react";
import NewsItem from "@/components/NewsItem";

const HomePage = ({ data }: { data: any}) => {

  return (
    <div>
      <h1>HOME PAGE</h1>
      {data.map((item: any) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomePage;

