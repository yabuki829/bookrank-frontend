import React from 'react'
import Header from '../components/layouts/Header'

const search = () => {

  function filterTitle(){
    
  }
  return (
    <div>
      <Header/>
      <div className='m-4 md:m-auto  md:w-2/3 md:pt-16'>
      <div className='w-full flex flex-col justify-center items-center mb-20'>
        <input
              className='rounded-full bg-gray-100 md:w-3/4 w-4/5 h-12 px-4 md:m-auto shadow md:shadow-lg'
              type="text"
              id="book-title"
              placeholder="タイトルを検索"
            
            />
        </div>
      
      </div>
    </div>
  )
}

export default search