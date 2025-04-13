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

function App() {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errBul, setErrBul] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [pageMax, setPageMax] = useState(1);
  const [image, setImage] = useState({});
  const [perPage, setPerPage] = useState(15);
  const notify = (text) => toast(text);
  
    
  useEffect(() => {

    async function fetchGallery() {
      try {
        setLoading(true);
        setErrBul(false);
        setPerPage(15);
        const data = await fetchData(search, page, perPage);
        setPageMax(data.total_pages);
        setResult(prev => [...prev, ...data.results]);
        // if (page > 1) {
        //   setResult(prev => [...prev, ...data.results]);
        //   // setPageMax( data.total_pages);
        // } else {
        //   setResult(data.results);
        //   // setPageMax( data.total_pages);
        // }
      if (data.total_pages == 0) {
        notify("Sorry. Nothing found!");
      }
      } catch (error) {
        setErrBul(true);
        // console.log(error);
        notify(error.message);
      } finally {
            setLoading(false);
        }
    };
    search && fetchGallery();
  }, [search, page, perPage]);

 

  const handleNewSearch = searchNew => {
    setSearch(searchNew);
    setResult([])
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handleModalImage = (item) => {
    setImage(item);
    setModalOpen(true);
  }

  
   return (
      <div>
        <SearchBar
          onSearch={handleNewSearch}
       />
       
        {search && <ImageGallery
         cardList={result}
         onModalImg={handleModalImage}
        //  itemImage={setImage}
        //  isModal={setModalOpen}
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


