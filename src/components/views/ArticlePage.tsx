import React from "react";
import NewsItemProps from "@/types";

const ArticlePage = ({ data }: { data: NewsItemProps }) => {
  return (
    <>
      <h1>This is the article Page</h1>
      <div className="article">
        <h2 className="article-title">{data?.headLine}</h2>
        <p className="article-content">{data?.body}</p>
        <p className="article-info">Written by Carlos Pretelin on 01/01/2024</p>
      </div>
    </>
  );
};

export default ArticlePage;
