import css from './ImageCard.module.css'

const ImageCard = ({ photo, onModalImg }) => {

    return (
    <div className={css.galleryLink}>
    <img src={photo.urls.small} alt={photo.alt_description} className={css.galleryImage} onClick={()=>onModalImg(photo)} />
    </div>
    )
};
export default ImageCard;