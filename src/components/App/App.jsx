import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';


// d27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA

// 6wMe2HfsUk9Sc5DMjWxVNxgV_k3GfVpnFuw1VFD9EB4


function App() {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState();
  
  useEffect(() => {

    const clientId = 'd27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA';
    const redirectUri = '6wMe2HfsUk9Sc5DMjWxVNxgV_k3GfVpnFuw1VFD9EB4';

    async function fetchArticles(value, page = 1, perPage = 10) {
      
      const searchParams = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        query: value,
        image_type: 'photo',
        orientation: 'landscape',
        safesearch: 'true',
        per_page: perPage,
        page: page,
        lang: 'en',
      });
      const response = await axios.get(
        `https://api.unsplash.com/photos/?${searchParams}`
      );
      console.log(response.data);
      return response.data;
    }

    // fetchArticles(search);
    setResult( fetchArticles(search));

    console.log(result);
}, []);
  
   return (
      <div>
        <SearchBar
          onSearch={setSearch}
        />
        <ImageGallery
          cardList={result}
        />
        {/* <ContactList
          cardList={filteredList}
          onDelete={deleteContact}
        />  */}
       
    </div>
  )
}

export default App


// import axios from 'axios';
// // import { messageAllert } from './render-functions';

// const API_KEY = '48882372-89a0cb49e548afa674928e493';

// export async function getAllFoto(value, perPage, page) {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: value,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: perPage,
//     page: page,
//     language: 'en',
//   });

//   const result = await axios.get(`https://pixabay.com/api/?${searchParams}`);
//   return result.data;
// }


// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// export function galleryClear() {
//   const gallery = document.querySelector('.gallery');
//   gallery.innerHTML = '';
// }

// export function galleryMaker(imageArr) {
//   return imageArr.map(elem => itemMaker(elem)).join('');
// }

// function itemMaker(foto) {
//   const {
//     largeImageURL,
//     webformatURL,
//     tags,
//     likes,
//     views,
//     comments,
//     downloads,
//   } = foto;
//   return `<li class="gallery-item">
// 	            <a class="gallery-link" href="${largeImageURL}">
// 		            <img 
// 			          class="gallery-image" 
// 			          src="${webformatURL}" 
// 			          alt="${tags}" 
// 			        />
	            
//               <div class="gallery-dl">
//                 <div>
//                   <p class="gallery-info">Likes</p>
//                   <p class="gallery-value">${likes}</p>
//                 </div>
//                 <div>
//                   <p class="gallery-info">Views</p>
//                   <p class="gallery-value">${views}</p>
//                 </div>
//                 <div>
//                   <p class="gallery-info">Comments</p>
//                   <p class="gallery-value">${comments}</p>
//                 </div>
//                 <div>
//                   <p class="gallery-info">Downloads</p>
//                   <p class="gallery-value">${downloads}</p>
//                 </div>
//               </div>
//               </a>  
//         </li>`;
// }

// export function messageAllert(message, text, backColor) {
//   iziToast.show({
//     position: 'topRight',
//     title: message,
//     titleColor: 'white',
//     message: text,
//     messageSize: '24px',
//     messageLineHeight: '24px',
//     messageColor: 'white',
//     backgroundColor: backColor,
//     theme: 'dark',
//   });
// }
