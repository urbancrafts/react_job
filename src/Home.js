
import BookList from "./BookList";
import useFetch from "./Usefetch";
const Home = () => {
    const {data:books, isPending, error} = useFetch('https://bookshop.urbantour.org/public/api/books/fetch_all_books');

    return (
       <div className="home">
        {error && <div>{ error }</div>}
        {isPending && <h4>Loading....</h4>}
        {books && <BookList books={books} title="All Books!" />} 
       </div>
    );

}
export default Home;