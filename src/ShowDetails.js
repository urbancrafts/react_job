import CommentForm from "./CommentForm";


const ShowDetails = (props) => {//set props
    const books = props.books;
    //const title = props.title;

    return (
        <div>
        
            {books.map((book) => (
           <div className="blog-preview" key={book.name}>
            <article>
            <h2>{book.name}</h2>
            <p>Written by {book.authors}</p>
            <p>Publisher: {book.publisher}</p>
            <h4>Characters: {book.characters_info.map((character) => (
               <strong>{character.name}</strong>
            ))}</h4>
            <fieldset className="comment-area">
             <legend>{book.comments.length} Comments</legend>
             {book.comments.map((comment) => (
               <div className="comment-field">
                 <strong>{comment.name}</strong>
                 <p>{comment.message}</p>
               </div>
            ))}
            <CommentForm bookname={books} title={book.name} />
            </fieldset>
            </article>
            
           </div>
           ))}
        </div>
    )
}
export default ShowDetails;