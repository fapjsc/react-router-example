import { useState, useEffect, useCallback } from 'react';

// Hooks
import useHttp from '../../hooks/use-http';

// Api
import { getAllComments } from '../../lib/api';

// Router Hooks
import { useParams } from 'react-router-dom';

// Style
import classes from './Comments.module.css';

// Components
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { quoteId } = useParams();

  const { sendRequest, status, data } = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === 'completed' && data && data.length > 0) {
    comments = <CommentsList comments={data} />;
  }

  if (status === 'completed' && (!data || data.length === 0)) {
    comments = <p className="centered">No Comments</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
