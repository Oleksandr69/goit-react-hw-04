import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ( cardList ) => {
    console.log({ cardList }

    );
    // return (<ul className={css.gallery}>
    //     {cardList.map((card) => {
    //         return (<li key={card.id} className={css.galleryItem}>
    //             <ImageCard
    //                 photo={card}
    //             />
    //         </li>);
    //     })}
    // </ul>);
};

export default ImageGallery;