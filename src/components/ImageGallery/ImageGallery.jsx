import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = (result) => {
    
    console.log(result);
    
    return (<ul className={css.gallery}>
        {result.cardList.map((card) => {
            return (<li key={card.id} className={css.galleryItem}>
                <ImageCard
                    photo={card}
                />
                <div className={css.galleryDl}>
                <div>
                  <p className={css.galleryInfo}>author</p>
                  <p className={css.galleryValue}>{card.user.name}</p>
                </div>
                <div>
                  <p className={css.galleryInfo}>views</p>
                  <p className={css.galleryValue}>{card.views}</p>
                </div>
                <div>
                  <p className={css.galleryInfo}>downloads</p>
                  <p className={css.galleryValue}>{card.downloads}</p>
                </div>
              </div>
            </li>);
        })}
    </ul>);
};

export default ImageGallery;