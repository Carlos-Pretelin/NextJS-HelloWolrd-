"use client"; // This is a client component 👈🏽

import React from "react";
import { useState, useEffect } from "react";
import NewsItem from "@/components/NewsItem";
import NewsItemProps from "@/types/types";

const HomePage = () => {
  const [news, setNews] = useState<NewsItemProps[]>([]);

  useEffect(() => {
    fetch("https://itchy-famous-squares-carlosppretelin.replit.app/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>HOME PAGE</h1>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomePage;
