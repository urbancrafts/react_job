import { useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";
import useFetch from "./Usefetch";

const BookDetails = () => {
    const { name } = useParams();
    const {data:books, isPending, error} = useFetch('https://bookshop.urbantour.org/public/api/books/fetch_single_book/' + name);


    return(
        <div className="book-details">
        {error && <div>{ error }</div>}
        {isPending && <h4>Loading....</h4>}
        {books && <ShowDetails books={books}  />  }
        </div>
    );

}

export default BookDetails;