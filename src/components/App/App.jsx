import React, { useState, useEffect } from 'react'

import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import fetchData from '../../services/api';

// applicationID = 734416
// accessKey = d27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA
// secretKey = 6wMe2HfsUk9Sc5DMjWxVNxgV_k3GfVpnFuw1VFD9EB4


function App() {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
    
  useEffect(() => {

    async function fetchGallery( value ) {
      try {
        const data = await fetchData(value, page);
        // console.log(data)
        if (page > 1) {
          setResult(prev => [...prev, ...data.results]);
        } else {
            setResult(data.results);
         }   
      } catch (error) {
        console.log(error);
      } 
    };
  search && fetchGallery(search);
  }, [search, page]);

  const handleNewSearch = searchNew => {
    setSearch(searchNew);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  
   return (
      <div>
        <SearchBar
          onSearch={handleNewSearch}
        />
       {search && <ImageGallery
         cardList={result}
       />}
       {loading && <Loader />}
       {result.length !== 0 && <LoadMoreBtn
         nextPage={handleNextPage}
       />}    
    </div>
  )
}

export default App


