import React, { useState } from 'react'
import books_data from '../books'
import Header from '../components/layouts/Header'

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBooks, setFilteredBooks] = useState([])

  function filterTitle() {
    if (searchTerm == "" || searchTerm == null){
      return
    }
    const results = books_data.books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredBooks(results);
  }

   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      filterTitle();
    }
  }

  return (
    <div>
    <Header />
    <Head>
        <title>Book Rank:検索</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="description" content="Youtubeで紹介されてる本を集計しランキングを作成したサイトです" />
      </Head>
    <div className='m-4 md:m-auto  md:w-2/3 md:pt-16'>
      <div className='w-full flex flex-col justify-center items-center mb-20'>
        <input
          className='rounded-full bg-gray-100 md:w-3/4 w-4/5 h-12 px-4 md:m-auto shadow md:shadow-lg'
          type="text"
          id="book-title"
          placeholder="タイトルを検索"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
      </div>
      {filteredBooks.map((book, index) => (
          <>
          <h2 className='px-5 bg-blue-400 p-2 text-white md:text-3xl font-bold '> {book.title}</h2>
          
          <br />
          <div className='flex flex-col md:flex-row justify-start ' key={index}>      
            <img fetchpriority="low" className='mx-auto boder-1  w-1/2 h-1/3 md:w-1/3' src={"https://images-na.ssl-images-amazon.com/images/P/" + book.isbn +".THUMBZZZ.jpg"} alt="本の画像" />


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
          <div className='flex justify-center'>
            <a className='p-2 bg-orange-400 text-white rounded font-bold' href={"https://www.amazon.co.jp/dp/"+book.isbn}  target="_blank" rel="noopener noreferrer">Amazonでの評価を見る</a>
          </div>
            
        
         
          <br />
          <br />
          </>
          
          
        ))}
    </div>
  </div>
  )
}

export default Search