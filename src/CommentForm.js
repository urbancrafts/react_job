import { useState } from "react";
import { useHistory } from "react-router-dom";

const CommentForm = (props) => {//set props
    //const book_name = props.bookname;
    const title = props.title;
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [book_name, setBookName] = useState(title);

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
       e.preventDefault();
       
       const comment_object = {name, email, book_name, message};
       
       setIsPending(true);

       fetch('https://bookshop.urbantour.org/public/api/books/make_comment', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment_object)
       }).then(() => {
        console.log('new comment added to ' + book_name);
        setIsPending(false);
        history.go(0);
       })
    }

    return(
      <div className="comment-form">
        <h2>Comment form</h2>
        <form onSubmit={handleSubmit}>
        
        <input type="hidden" 
        value={book_name} 
        onChange={(e) => setBookName(e.target.value)}
        />
    
        <input 
        type="text"
        placeholder="name input"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
         />
         <input 
        type="email"
        placeholder="email input"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
         <textarea
         placeholder="comment input"
         required
         value={message}
         onChange={(e) => setMessage(e.target.value)}
         >
         </textarea>
         
         { !isPending && <button type="submit">Add Comment</button> }
         { isPending && <button type="submit" disabled>Adding Comment...</button>}
         </form>
      </div>
    );
}

export default CommentForm;