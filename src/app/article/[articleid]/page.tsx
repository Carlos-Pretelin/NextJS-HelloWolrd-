"use client";
import React from "react";
import { useState, useEffect } from "react";
import NewsItemProps from "@/types/types";

const fetchData = async (
  setArticle: (article: NewsItemProps | null) => void,
  setError: (error: boolean) => void,
  id: string
) => {
  try {
    const response = await fetch(
      `https://itchy-famous-squares-carlosppretelin.replit.app/article/?id=${id}`
    );
    const data = await response.json();
    if (response.status > 204) {
      console.log("carlos");
      return;
    }
    setArticle(data);
  } catch (error) {
    console.error("Error fetching article:", error);
    setError(true);
  }
};

const articleid = ({ params }: { params: { articleid: string } }) => {
  console.log("Hola")

  const [article, setArticle] = useState<NewsItemProps | null>(null);
  const [error, setError] = useState(false);
  const id = params.articleid;
 console.log({id, params})
  useEffect(() => {
    fetchData(setArticle, setError, id as string);
    console.log("useEffect", id);
  }, []);

  if (error) {
    return <h1>Error fetching article </h1>;
  }

  if (!article) {
    return;
  }

  return (
    <>
      <h1>This is the article Page</h1>
      <div className="article">
        <h2 className="article-title">{article?.headLine}</h2>
        <p className="article-content">{article?.body}</p>
        <p className="article-info">Written by Carlos Pretelin on 01/01/2024</p>
      </div>
      {error ? <h1>Error fetching article </h1> : null}
    </>
  );
};

export default articleid;
