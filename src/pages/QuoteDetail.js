import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

// Hooks
import useHttp from '../hooks/use-http';

// Api
import { getSingleQuote } from '../lib/api';

// Components
import Comments from '../components/comments/Comments';
import HighLightQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const { status, data: quote, error, sendRequest } = useHttp(getSingleQuote, true);

  // const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!quote.text) {
    return <p>No Quote Found!</p>;
  }

  return (
    <Fragment>
      <HighLightQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`} component={Comments} />
    </Fragment>
  );
};

export default QuoteDetail;
