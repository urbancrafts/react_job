import { Link } from "react-router-dom";

const BookList = (props) => {//set props
    const books = props.books;
    const title = props.title;

    return (
        <div className="book-list">
            <h2>{title}</h2>
            {books.map((book) => (
           <div className="blog-preview" key={book.name}>
            <Link to={`/book/${book.name}`}>
            <h2>{book.name}</h2>
            <p>Written by {book.authors}</p>
            <p>Publisher: {book.publisher}</p>
            <p>{book.number_of_comments} Comments</p>
            </Link>
           </div>
           ))}
        </div>
    )
}
export default BookList;