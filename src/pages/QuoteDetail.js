import { Fragment } from 'react';

import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const { quoteId } = useParams();

  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <p>{quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetail;
