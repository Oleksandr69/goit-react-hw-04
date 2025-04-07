import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;

        // Якщо текстове поле порожнє, виводимо повідомлення
        // і припиняємо виконання функції.
        if (form.elements.topic.value.trim() === "") {
            alert("Please enter search term!");
            return;
        }
        console.log(topic);
        // У протилежному випадку викликаємо пропс
        // і передаємо йому значення поля
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
        </header>
    )
}
export default SearchBar;