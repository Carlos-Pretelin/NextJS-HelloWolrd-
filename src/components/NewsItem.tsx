import React from "react";
import NewsItemProps from "@/types/types";
import Link from "next/link";

const NewsItem = ({ item }: { item: NewsItemProps }) => {
  return (
    <div className="newsItem" key={item.id}>
      <Link href={`/article/${item.id}`} passHref>        
        <h3>{item.headLine}</h3>
        <p>{item.body}</p>
      </Link>
    </div>
  );
};

export default NewsItem;
