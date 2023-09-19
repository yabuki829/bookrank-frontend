import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import books from '../books';

const fetchBooks = async ({ queryKey }) => {
  const [, start, limit] = queryKey;
  const result = books.slice(start, start + limit);
  console.log("Fetched books:", result);
  return result;
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const { data } = useQuery(
    ['books', (page - 1) * 30, 30],
    fetchBooks,
    {
      keepPreviousData: true
    }
  );

  useEffect(() => {
    if (data) {
      setAllData(prev => [...prev, ...data]);
    }
  }, [data]);

  const hasMore = allData.length < books.length;

  console.log("Can fetch more?", hasMore);

  return (
    <div>
      <h1>本のランキング</h1>
      <InfiniteScroll
        onScroll={() => console.log("Scrolling...")}
        dataLength={allData.length}
        next={() => {
          console.log("Trying to fetch the next page");
          setPage((prevPage) => prevPage + 1);
        }}
        hasMore={hasMore}
        loader={<h4>読み込み中...</h4>}
      >
        {allData.map((book, index) => (
          <div key={index}>
            <h2>{index + 1}. {book.title}</h2>
            <p>Views: {book.views}</p>
            <h3>関連動画:</h3>
            <ul>
              {book.data.map((video, idx) => (
                <li key={idx}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}