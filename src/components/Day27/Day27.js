import Todo from "./comp/Todo";
import List from './comp/List';
import {Provider} from 'react-redux';
import store from './store';

function Day27() {
  return (
    
    <div className="App">
         <Provider store={store}>

    <Todo/>
    <List/>
    </Provider>

    

    </div>
   
  );
}

export default Day27;