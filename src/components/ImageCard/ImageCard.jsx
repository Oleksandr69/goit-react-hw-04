import css from './ImageCard.module.css'

const ImageCard = ({ photo }) => {
    console.log(photo);
    return (
        <div>
            <img src={photo.urls.small} alt={photo.alt_description} className={css.galleryImage} />
        </div>
    )
};
export default ImageCard;