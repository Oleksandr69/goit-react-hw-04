import css from './ImageCard.module.css'

const ImageCard = ({ photo }) => {
     return (
        <a className={css.galleryLink} href={photo.urls.regular}>
            <img src={photo.urls.small} alt={photo.alt_description} className={css.galleryImage} />
        </a>
    )
};
export default ImageCard;