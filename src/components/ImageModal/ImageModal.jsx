import React from 'react';
import { useEffect } from 'react'
import css from './ImageModal.module.css'

const ImageModal = ({ photo, offModal }) => {

    const handleWraperClose = e => {
        if (e.target === e.currentTarget) {
            offModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === 'Escape') offModal();
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [offModal]);

    return (
            <div className={css.modal}>
              <div className={css.modalWrapper} onClick={handleWraperClose}>
                <img src={photo.urls.regular} alt={photo.alt_description} className={css.modalImage} />
              </div>          
            </div> 
    )
};
export default ImageModal;