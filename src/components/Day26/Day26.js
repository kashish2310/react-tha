import AddValue from "./AddValue";
import List from "./List";
import {Provider} from 'react-redux';
import store from './store';
function Day26() {
  return (
    <div className="App">
      <Provider store={store}>
    <h1>Hola peeps!</h1>
    <AddValue/>
    <List/>
    </Provider>
    </div>
  );
}

export default Day26;