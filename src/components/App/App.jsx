import React, { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import fetchData from '../../services/api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';


// applicationID = 734416
// accessKey = d27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA
// secretKey = 6wMe2HfsUk9Sc5DMjWxVNxgV_k3GfVpnFuw1VFD9EB4


function App() {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errBul, setErrBul] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [pageMax, setPageMax] = useState(1);
  const [image, setImage] = useState({});
  const notify = (text) => toast(text);
  
    
  useEffect(() => {

    async function fetchGallery( value ) {
      try {
        setLoading(true);
        setErrBul(false);
        const data = await fetchData(value, page, perPage);
        if (page > 1) {
          setResult(prev => [...prev, ...data.results]);
          setPageMax( data.total_pages);
        } else {
          setResult(data.results);
          setPageMax( data.total_pages);
        }
      if (data.total_pages == 0) {
        notify("Sorry. Nothing found!");
      }
      } catch (error) {
        setErrBul(true);
        console.log(error);
        notify(error.message);
      } finally {
            setLoading(false);
        }
    };
  search && fetchGallery(search);
  }, [search, page]);

  const handleNewSearch = searchNew => {
    setSearch(searchNew);
    setResult([])
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const perPage = 15;
  
   return (
      <div>
        <SearchBar
          onSearch={handleNewSearch}
       />
       
        {search && <ImageGallery
         cardList={result}
         itemImage={setImage}
         isModal={setModalOpen}
       />
       }

        {loading && <Loader />}

        {(result.length > 0 && !loading && page < pageMax) && <LoadMoreBtn
         nextPage={handleNextPage}
        />}

         {errBul && <ErrorMessage
         />}
       
         {modalIsOpen && <ImageModal
          photo={image}
          offModal={setModalOpen}
       
         />} 

        <Toaster
          position="top-right" 
          toastOptions={{
          className: '',
          style: {
          border: '1px solid #713200',
          backgroundColor: 'rgb(236, 12, 12)',
          padding: '8px',
          color: 'rgb(0, 0, 0)',
          fontSize: '20px',
          },
          }}
        />
    </div>
  )
}

export default App


