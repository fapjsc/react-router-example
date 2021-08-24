import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighLightQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Mike',
    text: 'cool',
  },
  {
    id: 'q2',
    author: 'Andy',
    text: 'Nice',
  },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <Fragment>
      <HighLightQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${quoteId}/comments`} component={Comments} />
    </Fragment>
  );
};

export default QuoteDetail;
