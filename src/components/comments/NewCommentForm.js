import { useRef, useEffect } from 'react';

// Hooks
import useHttp from '../../hooks/use-http';

// Api
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

// Style
import classes from './NewCommentForm.module.css';

const NewCommentForm = props => {
  const commentTextRef = useRef();
  const { onAddedComment, quoteId } = props;
  const { status, error, sendRequest } = useHttp(addComment, true);

  const submitFormHandler = event => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    sendRequest({ commentData: { text: commentTextRef.current.value }, quoteId });
  };

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
