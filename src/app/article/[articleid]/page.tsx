import React from "react";
import NewsItemProps from "@/types/types";
import { fetchArticle } from "@/utils/utils";


const Article = async ({ params }: { params: { articleid: string } }) => {

  const id = params.articleid;
  const data: NewsItemProps = await fetchArticle(id)

  if (!data){
    return <h1>Error fetching data!</h1>
  }

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

export default Article;
