import { Route, Switch, Redirect } from 'react-router-dom';

//Pages
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" component={AllQuotes} exact />
        <Route path="/quotes/:quoteId" component={QuoteDetail} />
        <Route path="/new-quote" component={NewQuote} />
      </Switch>
    </div>
  );
};

export default App;
