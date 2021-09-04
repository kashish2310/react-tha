import Header from './comp/Header';
import ProductListing from './comp/ProductListing';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductDetail from './comp/ProductDetail';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
    <Route path="/" exact component={ProductListing}/>
    <Route path="/product/:productId" exact component={ProductDetail}/>
    <Route>404 Not found</Route>
    <ProductListing/>
    </Switch>
    </Router>
    </>
  );
}

export default App;