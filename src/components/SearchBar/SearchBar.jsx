import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Please enter search term!');

const SearchBar = ({ onSearch }) => {
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;

        if (topic.trim() === "") {
            notify();
            return;
        }
        onSearch(topic);
        form.reset();
    };

    return (
        <header className={css.headerSearch}>
            <form onSubmit={handleSubmit}>
            <div className = {css.formSearch}>
           
            <input
            type="text"
            autoComplete="off"
            name="topic"
            autoFocus
            placeholder="Search images and photos"
            className = {css.inputSearch}
            />
            <button type="submit" className={ css.btnSearch}> <FaSearch/></button>
            </div>
            </form>
            <div>
            <Toaster />
            </div>
        </header>
       
    )
}
export default SearchBar;