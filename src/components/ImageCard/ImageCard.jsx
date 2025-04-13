import css from './ImageCard.module.css'

const ImageCard = ({ photo, onModal, itemPhoto }) => {
    const photoModal = () => {
        itemPhoto(photo);
        onModal(true);
    }
    return (
        <div className={css.galleryLink} onClick={() => photoModal()}>
            <img src={photo.urls.small} alt={photo.alt_description} className={css.galleryImage} />
        </div>
    )
};
export default ImageCard;