import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = () => {
  return (
    <div>
      <h1>AllQuotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
