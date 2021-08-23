import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = quoteData => {
    console.log(quoteData);

    history.replace('/quotes');
  };

  return (
    <div>
      <h1>NewQuote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
