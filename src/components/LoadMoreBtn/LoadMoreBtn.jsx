import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ setPage, pagePrev }) => {

    return (
        <button onClick={() => setPage(pagePrev + 1)}>Load more</button>
    )
};
export default LoadMoreBtn;