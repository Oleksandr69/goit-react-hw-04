const ImageCard = (photo) => {
    return (
        <div>
            <img src={photo.urls.small} alt={photo.alt_descroption} />
        </div>
    )
};
export default ImageCard;