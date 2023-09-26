import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import books from '../books';
import Header from '../components/layouts/Header';



const fetchBooks = async ({ queryKey }) => {
  // あんまり理解できてない
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
    <div className=''>
      <Header/>
      <div className='m-4 md:m-auto  md:w-2/3'>

      
      <div className='py-3  md:text-center'>
        <p >ブックランクではYoutube上で紹介されている本を集計してランキングを作成したものです。</p>
       
      </div>
      <p className='bg-blue-400 text-white p-2'>今後の予定</p>
        <ul>
          <li>1. 一定期間でのランキング</li>
          <li>2. 検索機能</li>
          <li>3. ランキング順位の決め方の変更</li>
          <li>4. カテゴリごとのランキング</li>
          <li></li>
        </ul>
      <br />
      <InfiniteScroll
        onScroll={() => console.log("Scrolling...")}
        dataLength={allData.length}
        next={() => {
          setPage((prevPage) => prevPage + 1);
        }}
        hasMore={hasMore}
        loader={<h4>読み込み中...</h4>}
      >
        {allData.map((book, index) => (
          <>
          <h2 className='bg-blue-400 p-2 text-white md:text-3xl font-bold '>{index + 1}. {book.title}</h2>
          
          <br />
          <div className='flex flex-col md:flex-row justify-start ' key={index}>      
            <img className='mx-auto boder-1  w-1/2 h-1/3 md:w-1/3' src={"https://images-na.ssl-images-amazon.com/images/P/" + book.isbn +".THUMBZZZ.jpg"} alt="本の画像" />


            <div className='md:pl-10  '> 
            <h2 className='text-2xl font-bold text-center pt-4 md:py-0 border-b border-gray-400 '> - 関連動画 -</h2>

                <ul>
                
                  {book.data.map((video, idx) => (
                    <li className='mb-3'  key={idx}>
                      <a className='text-sm ' href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
                    
                    </li>
                  ))}
                </ul>
              </div>

          </div>
        
            
        
          <br />
          <br />
          <br />
          </>
          
          
        ))}
      </InfiniteScroll>
      </div>
     
      
    </div>
  )
}