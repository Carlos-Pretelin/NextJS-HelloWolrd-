import React from 'react'
import NewsItemProps from "@/types/types";


const NewsItem = ({item}: {item:NewsItemProps}) => {
  return (
    <div>{item.title}</div>
  )
}

export default NewsItem