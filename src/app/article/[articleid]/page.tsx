import React from "react";
import NewsItemProps from "@/types";
import { fetchArticleData } from "@/utils";
import ArticlePage from "@/components/views/ArticlePage";

const Article = async ({ params }: { params: { articleid: string } }) => {
  const id = params.articleid;

  if (!id) {
    return <h1>The id is invalid!</h1>;
  }

  const data: NewsItemProps = await fetchArticleData(id);

  if (!data) {
    return <h1>Error fetching data!</h1>;
  }

  return <ArticlePage data={data} />;
};

export default Article;
